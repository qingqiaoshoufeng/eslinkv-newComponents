import { hexToRgba, getCommonOption } from '../../examples/utils'

export default (data, config) => {
	debugger

	let max = 0
	const value = data.value || []
	const option = getCommonOption(value, config)
	config.hour
		? (option.xAxis.axisLabel.formatter = function (value) {
				// 2021-09-28 14:00:34
				if (value.slice(14, 16) === '00') {
					return value.slice(10, 16)
				} else {
					return ''
				}
		  })
		: ''
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
	option.dataZoom = [
		{
			type: 'slider',
			yAxisIndex: [0],
			show: true,
			left: '0%',
			start: 90,
			end: 100,
		},
	]
	option.yAxis[0].splitNumber = 4
	// option.yAxis[0].interval = 0.3

	value.forEach((item, index) => {
		max = Math.max(...[...item.y, max])
		const color =
			config.colorTheme.colorDisk[
				index % config.colorTheme.colorDisk.length
			]
		option.series.push({
			name: item.name,
			type: 'line',
			symbolSize: 16,
			symbol: config.lineIcon || 'none',
			showSymbol: !!config.lineIcon,
			itemStyle: {
				color: config.lineColor || color,
			},
			lineStyle: {
				color: config.lineColor || color,
			},
			data: item.y,
			smooth: config.smooth,
		})
	})
	if (max !== undefined) option.grid.left += (max.toString().length - 3) * 12
	return option
}
