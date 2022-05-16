import { hexToRgba, getCommonOption } from '../../examples/utils'

export default (data, config) => {
	const colorList = config.colorList.split(',')
	const linearColor = config.colorList.split(',')
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
	option.yAxis[0].splitNumber = 4
	option.yAxis[1] = {
		...option.yAxis[0],
		position: 'right',
		name: config.title1,
		nameTextStyle: {
			color: '#fff',
			fontSize: 24,
			algin: 'right',
			padding: [0, 0, 0, config.y2TitleLeft],
		},
	}
	// option.yAxis[0].interval = 0.3

	value.forEach((item, index) => {
		max = Math.max(...[...item.y, max])
		const color = colorList[index]

		option.series.push({
			name: item.name,
			type: 'line',
			symbolSize: 16,
			symbol: config.lineIcon || 'none',
			showSymbol: !!config.lineIcon,
			itemStyle: {
				color: color,
			},
			lineStyle: {
				color: item.linear
					? {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [
								{
									offset: 0,
									color: linearColor[0], // 0% 处的颜色
								},
								{
									offset: 1,
									color: linearColor[1], // 100% 处的颜色
								},
							],
							globalCoord: false, // 缺省为 false
					  }
					: color,
			},
			data: item.y,
			yAxisIndex: item.yAxisIndex,
			smooth: config.smooth,
			width: 2,
		})
	})
	if (max !== undefined) option.grid.left += (max.toString().length - 3) * 12
	option.grid.left = option.grid.left + parseInt(config.left)
	option.grid.right = config.right

	return option
}
