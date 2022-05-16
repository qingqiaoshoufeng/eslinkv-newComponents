import type { barChartDataAdaptParmasType, pieChartDataAdaptParmasType } from '../types/chartTypes'

/**
 * @description 柱状图数据格式化适配
 * @param {barChartDataAdaptParmasType} barChartDataAdaptParmas 数据(data)和图表配置(config)集合对象
 * @returns
 */
export const barChartDataAdapt = ({ data, config }: barChartDataAdaptParmasType) => {
	const datakeys = Object.keys(data[0])
	const dataListMap = data.reduce((current, dataItem, index) => {
		if (index === 0) {
			datakeys.forEach(item => {
				current[item] = []
			})
		}
		datakeys.forEach(item => {
			current[item].push(dataItem[item])
		})
		return current
	}, {})

	const configxAxiskeys = config.seriesConfig.reduce((current, item) => {
		if (current.includes(item.xAxisKey)) return current
		current.push(item.xAxisKey)
		return current
	}, [] as string[])
	const configyAxiskeys = config.seriesConfig.reduce((current, item) => {
		if (current.includes(item.yAxisKey)) return current
		current.push(item.yAxisKey)
		return current
	}, [] as string[])

	class checkAndFormatData {
		dataKeys: string[]
		dataListMap: Record<string, any[]>
		configxAxiskeys: string[]
		configyAxiskeys: string[]
		nofoundxAxiskeys: string[]
		nofoundyAxiskeys: string[]
		isError: boolean
		constructor(dataListMap: Record<string, any[]>, configxAxiskeys: string[], configyAxiskeys: string[]) {
			this.dataListMap = dataListMap
			this.dataKeys = Object.keys(dataListMap)
			this.configxAxiskeys = configxAxiskeys
			this.configyAxiskeys = configyAxiskeys
			this.nofoundxAxiskeys = []
			this.nofoundyAxiskeys = []
			this.isError = false
		}
		static of(dataListMap: Record<string, any[]>, configxAxiskeys: string[], configyAxiskeys: string[]) {
			return new checkAndFormatData(dataListMap, configxAxiskeys, configyAxiskeys)
		}
		checkxAxiskeys() {
			this.nofoundxAxiskeys = this.checkBase('dataKeys', 'configxAxiskeys')
		}
		checkyAxiskeys() {
			this.nofoundxAxiskeys = this.checkBase('dataKeys', 'configxAxiskeys')
		}
		checkBase(datakesNameList: 'dataKeys', configkesNameList: 'configxAxiskeys' | 'configxAxiskeys') {
			return this[configkesNameList].filter(item => !this[datakesNameList].includes(item))
		}
		check() {
			this.checkxAxiskeys()
			this.checkyAxiskeys()
			if (!this.nofoundxAxiskeys.length && !this.nofoundyAxiskeys.length) {
				this.isError = false
			} else {
				this.isError = true
			}
			return this
		}
		formatdata() {
			if (this.isError) {
				this.error()
			}
			const formatData: {
				xAxis: any[]
				series: any[]
			} = {
				xAxis: [],
				series: [],
			}
			this.configxAxiskeys.forEach(item => {
				formatData.xAxis.push(this.dataListMap[item])
			})
			this.configyAxiskeys.forEach(item => {
				formatData.series.push(this.dataListMap[item])
			})
			return formatData
		}
		error() {
			throw Error(`${this.nofoundxAxiskeys},${this.nofoundyAxiskeys}字段在后台返回中不存在`)
		}
	}
	return checkAndFormatData.of(dataListMap, configxAxiskeys, configyAxiskeys).check().formatdata()
}
export const pieChartDataAdapt = ({ data, config }: pieChartDataAdaptParmasType) => {
	return {
		serise: config.seriesConfig.map(item => item.dataNameList.split(',')),
	}
}
