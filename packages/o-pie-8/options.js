import { hexToRgba } from '../../examples/utils'

export default (data, config) => {
	const option = {
		series: [{
			type: 'liquidFill',
			color: [{
				type: 'linear',
				x: 0,
				y: 1,
				x2: 0,
				y2: 0,
				colorStops: [{
					offset: 1,
					color: hexToRgba(config.color2, 1),
				}, {
					offset: 0,
					color: hexToRgba(config.color2, 0),
				}],
				global: false // 缺省为 false
			},{
				type: 'linear',
				x: 0,
				y: 1,
				x2: 0,
				y2: 0,
				colorStops: [{
					offset: 1,
					color: hexToRgba(config.color1, 1),
				}, {
					offset: 0,
					color: hexToRgba(config.color1, 0.3),
				}],
				global: false // 缺省为 false
			},],
			data: [data.percent, data.percent - 0.03],
			shape: 'circle',
			backgroundStyle: {
				color: 'transparent'
			},
			label: {
				fontSize: 32,
				color: config.fontColor,
				insideColor: config.fontColor,
				fontFamily: 'font-num'
			},
			outline: {
				show: true,
				borderDistance: 5,
				itemStyle: {
					color: 'none',
					borderColor: config.borderColor,
					borderWidth: 2,
					shadowBlur: 20,
					shadowColor: 'rgba(0, 0, 0, 0.25)'
				}
			},
		}]
	}
	return option
}
