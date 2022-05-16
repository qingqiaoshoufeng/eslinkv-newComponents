/**
 * 处理echarts 配置项的模块
 */
import type { optionsNameType } from '@types/chartTypes'

interface chartOptionsConstructorType {
	of: (params: optionsNameType[]) => chartOptionsType
	new (optionsNameList: optionsNameType[]): chartOptionsType
}
export interface chartOptionsType {
	map: (fn: (params: optionsNameType[]) => any) => chartOptionsType
	join(): Record<optionsNameType, any>
	value: optionsNameType[]
	defaultseries: (data: any) => void
	defaultxAxis: (data: any) => void
	defaultyAxis: (data: any) => void
	defaultgrid(data: string): void
	defaulttooltip(data: any): void
	addOptions(type: string, fn: (params: any) => chartOptionsType): chartOptionsType
}

class chartOptions implements chartOptionsType {
	value: optionsNameType[]
	optionsValue: Record<optionsNameType, any>
	constructor(value: optionsNameType[]) {
		this.value = value
		this.optionsValue = {} as Record<optionsNameType, any>
	}
	static of(value: optionsNameType[]) {
		const optionsCfg = new chartOptions(value)
		optionsCfg.createOptionsValue()
		return optionsCfg
	}
	map(fn: (params: optionsNameType[]) => any) {
		const params = this.value
		return new chartOptions(fn(params))
	}
	join() {
		return this.optionsValue
	}
	addOptions(optionsName: optionsNameType, fn: (params: any) => void) {
		fn.call(this, this.optionsValue[optionsName])
		return this
	}
	defaultseries() {
		const defaultCfg = [
			{
				type: 'category',
				axisTick: {
					show: false,
				},
				axisLabel: {
					textStyle: {
						color: '#fff',
						fontSize: 16,
						lineHeight: 16,
					},
				},
				showBackground: true,
			},
		]
		this.optionsValue.series = defaultCfg
	}
	defaultxAxis() {
		const defaultCfg = [
			{
				type: 'category',
				axisTick: {
					show: false,
				},
				axisLabel: {
					textStyle: {
						color: '#fff',
						fontSize: 16,
						lineHeight: 16,
					},
				},
			},
		]

		this.optionsValue.xAxis = defaultCfg
	}
	defaultyAxis() {
		const defaultCfg = [
			{
				// name: config.title1,
				nameTextStyle: {
					color: '#fff',
					fontSize: 16,
					align: 'right',
					padding: [2, 0, 5, 0],
				},
				splitNumber: 4,
				type: 'value',
				show: true,
				splitLine: {
					lineStyle: {
						type: 'solid',
						color: 'rgba(199, 209, 219, 0.2)',
					},
				},
				axisTick: {
					show: false,
					textStyle: {
						color: '#fff',
					},
				},
				axisLabel: {
					textStyle: {
						color: '#fff',
						fontSize: 16,
						lineHeight: 16,
					},
				},
				axisLine: {
					show: false,
				},
			},
		]
		this.optionsValue.yAxis = defaultCfg
	}
	defaultgrid() {
		this.optionsValue.grid = {
			left: 40,
			right: 40,
			top: 45,
			bottom: 40,
		}
	}
	defaulttooltip() {
		this.optionsValue.tooltip = {
			triggerOn: 'mousemove|click',
			trigger: 'item',
			axisPointer: {
				type: 'shadow',
			},
		}
	}
	createOptionsValue() {
		this.value.forEach(item => {
			this[`default${item}`]()
		})
		this.optionsValue = Object.freeze(this.optionsValue)
	}
	get options() {
		return this.optionsValue
	}
}

const getOptions = (Constructor: chartOptionsConstructorType): ((parms: optionsNameType[]) => chartOptionsType) => {
	return function (optionsList: optionsNameType[]) {
		return Constructor.of(optionsList)
	}
}

/**
 * @param optionsList
 * @returns
 * @description 创建柱状图的基础方法
 */
export const getBarOptions = (optionsList: optionsNameType[]): chartOptionsType => {
	const fn = getOptions(chartOptions)
	return fn(optionsList)
}

// export const addChartClass = chart => {
// 	return function (name) {
// 		if (!chart.prototype.chartList) {
// 			chart.prototype.chartList = []
// 		}
// 		chart.prototype.optionNameList.push(name)
// 		chart.prototype.xAxis = function (fn?: (params) => void) {
// 			this.value.xAxis = [{}]
// 			fn(this.value.xAxis)
// 		}
// 	}
// }

// export const addChartPrototype = addChartClass(chartOptions)
