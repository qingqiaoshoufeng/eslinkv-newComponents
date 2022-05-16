/**
 * 处理echarts 数据的模块
 */
export interface barChartDataAdaptParmasType {
	data: any[]
	config: {
		seriesConfig: {
			xAxisKey: string
			yAxisKey: string
			color: string
		}[]
	}
}

export interface pieChartDataAdaptParmasType {
	data: any[]
	config: {
		seriesConfig: {
			// dataNameList: string
			dataNameList: string
		}[]
	}
}

/**
 * @description 配置项单元属性
 */
export type optionsNameType = 'series' | 'xAxis' | 'yAxis' | 'grid' | 'tooltip'

export interface StyleCfgType {
	new (params: optionsNameType[], chartCfg: chartCfgType): styleCfgOptionType
	of(params: optionsNameType[], chartCfg: chartCfgType): styleCfgOptionType
}

export interface styleCfgOptionType {
	value: optionsNameType[]
	formatCfgOptions: Record<optionsNameType, any>
	chartCfg: chartCfgType
	init: () => void
}

export interface chartCfgType {
	seriesConfig: {
		xAxisKey: string
		yAxisKey: string
		'itemStyle.color': string
	}[]
	xAxisConfig?: any
	yAxisConfig?: any
	gridConfig?: any
	tooltipConfig?: any
}
