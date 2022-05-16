/**
 * 处理echarts 样式配置的模块
 */

import type { optionsNameType, styleCfgOptionType, StyleCfgType, chartCfgType } from '../types/chartTypes'
import { isNumber } from '@utils/isType'

class StyleCfg implements styleCfgOptionType {
	value: optionsNameType[]
	formatCfgOptions: Record<optionsNameType, any>
	chartCfg: chartCfgType
	constructor(optionsList: optionsNameType[], chartCfg: chartCfgType) {
		this.value = optionsList
		this.formatCfgOptions = {} as Record<optionsNameType, any>
		this.chartCfg = chartCfg
	}
	static of(optionsList: optionsNameType[], chartCfg: chartCfgType) {
		const options = new StyleCfg(optionsList, chartCfg)
		options.init()
		return options
	}
	init() {
		const optionsMap: Record<optionsNameType, (param: any) => any> = {
			series: function (params: any) {
				return params
			},
			xAxis: function (params: any) {
				return params
			},
			yAxis: function (params: any) {
				return params
			},
			grid: function (params: any) {
				return params[0]
			},
			tooltip: function (params: any) {
				return params[0]
			},
		}
		this.baseCreateProps()
		this.value.forEach(key => {
			const keyName = key as optionsNameType
			this.formatCfgOptions[keyName] = optionsMap[keyName](this.formatCfgOptions[keyName])
		})
	}
	baseCreateProps() {
		this.formatCfgOptions = this.value.reduce((current, key: optionsNameType) => {
			current[key] = this.chartCfg[`${key}Config`].map((item: Record<string, unknown>) => {
				// debugger
				return Object.entries(item).reduce((current, [keyName, value]) => {
					const keylist = keyName.split('-')
					this.createProps(current, keylist, value)
					return current
				}, {} as any)
			})
			return current
		}, {} as Record<optionsNameType, any>)
	}
	isArray(params: any): boolean {
		return Object.prototype.toString.call(params).includes('Array')
	}
	createProps(parent: any, keylist: string[], value: any) {
		const key = keylist[0]

		if (keylist.length === 1) {
			parent[key] = isNumber(value) && typeof value === 'string' ? parseFloat(value) : value
		} else {
			parent[key] = parent[key] || {}
			keylist.shift()
			this.createProps(parent[key], keylist, value)
		}
	}
}

export const echartsStyleCfg = function (Constructor: StyleCfgType) {
	return function (params: optionsNameType[], chartCfg: chartCfgType) {
		return Constructor.of(params, chartCfg)
	}
}
export const getCfgChartOptions = echartsStyleCfg(StyleCfg)
