import { hexToRgba, getCommonOption } from '../../examples/utils'

export default (data, config) => {
	let max = 0,
		min = 0
	const value = data.value || []
	const option = getCommonOption(value, config)
	option.tooltip.trigger = 'axis'
	option.tooltip = {
		show: true,
		trigger: 'axis',
		textStyle: {
			fontSize: 28,
		},
	}
	option.xAxis.axisLabel.textStyle.fontSize = 22
	option.yAxis[0].axisLabel.textStyle.fontSize = 24
	option.yAxis[0].nameTextStyle.fontSize = 24
	option.xAxis.axisLabel.interval = 0
	option.xAxis.axisLabel.rotate = config.rotate
	option.xAxis.axisLabel.align = 'center'
	option.yAxis[0].axisLabel.formatter = function (value) {
		return value.toFixed(config.toFixed)
	}
	option.grid.left = config.left
	option.yAxis[0].splitNumber = 5

	let obj = value => {
		if (!value) return { min: 0, max: 100 }
		min = max = value[0].y[0]
		value[0].y.map(item => {
			Number(min) > Number(item) ? (min = item) : ''
			Number(max) < Number(item) ? (max = item) : ''
		})
		min = (min - config.reduceNum).toFixed(config.toFixed)
		return { min, max }
	}
	config.yMax
		? (option.yAxis[0].max = config.yMax)
		: (option.yAxis[0].max = obj(value).max)
	config.yMin
		? (option.yAxis[0].min = config.yMin)
		: (option.yAxis[0].min = obj(value).min)

	option.series.push({
		data: [...value[0].y],
		type: 'line',
		lineStyle: {
			color: config.lineColor,
			type: config.lineType,
		},
		smooth: config.smooth,
		symbol: config.lineIcon,
		symbolSize: 20,
	})
	return option
}
