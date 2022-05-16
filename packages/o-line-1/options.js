import { getCommonOption, hexToRgba } from '../../examples/utils'

export default (data, config) => {
	debugger
	let max = 0
	const value = data.value || []
	const option = getCommonOption(value, config)
	value.forEach((item, index) => {
		max = Math.max(...[...item.y, max])
		const color =
			config.colorTheme.colorDisk[
				index % config.colorTheme.colorDisk.length
			]
		option.legend.itemHeight = 2
		option.tooltip.trigger = 'axis'
		if (config.datazoom) {
			option.grid.bottom = 80
			option.dataZoom = [
				{
					type: 'slider',
					backgroundColor: 'rgba(0,0,0,0)',
					fillerColor: 'rgba(0, 221, 255, 0.5)',
					dataBackground: {
						areaStyle: {
							color: '#023066',
							opacity: 1,
						},
						lineStyle: {
							color: '#184E8D',
						},
					},
				},
				{ type: 'inside' },
			]
		}
		option.series.push({
			name: item.name,
			type: 'line',
			data: item.y,
			lineStyle: {
				color,
			},
			areaStyle: config.area
				? {
						normal: {
							color: new echarts.graphic.LinearGradient(
								0,
								0,
								0,
								1,
								[
									{
										offset: 0,
										color: hexToRgba(color, 0.6),
									},
									{
										offset: 1,
										color: hexToRgba(color, 0),
									},
								],
								false,
							),
						},
				  }
				: null,
			symbolSize: 16,
			symbol: config.lineIcon || 'emptyCircle',
			showSymbol: !!config.lineIcon,
			itemStyle: {
				color: color,
			},
			smooth: config.smooth,
		})
	})
	if (max !== undefined) option.grid.left += (max.toString().length - 3) * 12
	option.grid.left += config.left
	option.yAxis[0].axisLabel.textStyle.fontSize = config.labelSize
	return option
}
