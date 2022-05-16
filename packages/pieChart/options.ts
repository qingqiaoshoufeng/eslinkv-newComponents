import { getBarOptions, chartOptionsType } from '@utils/echarts'
import { pieChartDataAdapt } from '@utils/chartData'
import { getCfgChartOptions } from '@utils/echartsStyleCfgAdapt'
import { deepMerge } from '@utils/merge'
import { optionsNameType } from '@types/chartTypes'
import { isArray } from '@utils/isType'
export const options = function (res, config) {
	const data = res.value || []
	const formatChartData = pieChartDataAdapt({
		data: data,
		config: config,
	})
	const componentsDefaultCfg = {
		seriesConfig: {
			type: 'pie',
		},
	}
	Object.keys(componentsDefaultCfg).forEach(item => {
		if (isArray(config[item])) {
			config[item].forEach(itm => {
				deepMerge(itm, componentsDefaultCfg[item as keyof typeof componentsDefaultCfg])
			})
		}
	})
	// config = componentsDefaultCfg
	const { formatCfgOptions } = getCfgChartOptions(['series', 'grid'], config)
	const addData = (params: any, type: optionsNameType, formatChartData: any, index: number) => {
		if (['xAxis', 'series'].includes(type)) {
			params.data = formatChartData[type][index]
		}
	}
	const mergebase = (type: optionsNameType, params: any, formatChartData: any) => {
		if (isArray(params)) {
			const defaultconfig = params[0]
			params.length = 0
			formatCfgOptions[type].forEach((item: any, index: number) => {
				const deepCloneDefaultconfig = deepMerge({}, defaultconfig)
				const currentItem = deepMerge(deepCloneDefaultconfig, item)
				addData(currentItem, type, formatChartData, index)
				params.push(currentItem)
			})
		} else {
			deepMerge(params, formatCfgOptions[type])
		}
	}
	const addOptionsMap = [
		{
			key: 'grid',
			fn: function (params: any[]): chartOptionsType {
				mergebase('grid', params, formatChartData)
				return this as unknown as chartOptionsType
			},
		},
		{
			key: 'series',
			fn: function (params: any[]) {
				mergebase('series', params, formatChartData)
				return this as unknown as chartOptionsType
			},
		},
	]

	const baseOptions = getBarOptions(['series', 'xAxis', 'yAxis', 'grid', 'tooltip'])
	addOptionsMap.forEach(item => {
		const { key, fn } = item
		baseOptions.addOptions(key, fn)
	})
	const options = baseOptions.join()
	return options
}
