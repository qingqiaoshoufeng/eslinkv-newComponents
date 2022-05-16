import { hexToRgba } from '../../examples/utils'

export default (data, config) => {
	const max = 100
	const percent = data.percent

	return {
		title: {
			text: percent + '%',
			left: 'center',
			top: '33%',
			textStyle: {
				color: config.titleColor,
				fontSize: 32,
				fontFamily: 'font-num',
			},
			subtextStyle: {
				color: config.subTitleColor,
				fontSize: 16,
			},
			subtext: config.title,
		},
		grid: {
			left: 0,
			right: 0,
		},
		polar: {
			// 圆弧大小
			radius: '107%',
			center: ['50%', '50%'],
		},
		angleAxis: {
			axisLine: {
				show: false,
			},
			axisLabel: {
				show: false,
			},
			splitLine: {
				show: false,
			},
			axisTick: {
				show: false,
			},
			min: 0,
			max: max,
			boundaryGap: ['0', '100'],
			startAngle: 180,
		},
		radiusAxis: {
			type: 'category',
			axisLine: {
				show: false,
			},
			axisTick: {
				show: false,
			},
			axisLabel: {
				show: false,
			},
			data: ['a', 'b', 'c'],
			z: 10,
		},
		series: [
			{
				type: 'bar',
				data: [, , percent || 0],
				coordinateSystem: 'polar',
				barMaxWidth: 8,
				z: 2,
				roundCap: 1,
				color: config.mainColor,
				barGap: '-100%',
			},
			{
				type: 'bar',
				data: [, , max],
				z: 0,
				silent: true,
				coordinateSystem: 'polar',
				barMaxWidth: 8,
				name: 'C',
				roundCap: 1,
				color: config.bgColor,
				barGap: '-100%',
			},
			{
				type: 'pie',
				radius: ['82%', '92%'],
				center: ['50%', '50%'],
				hoverAnimation: false,
				startAngle: 180,
				endAngle: 0,
				data: [
					{
						name: '',
						value: percent,
						label: {
							show: false,
						},
						labelLine: {
							show: false,
						},
						itemStyle: {
							color: 'rgba(1,0,0,0)',
						},
					},
					{
						// 画中间的图标
						name: '',
						value: 0,
						label: {
							position: 'inside',
							backgroundColor: config.pointerColor,
							borderRadius: 8,
							padding: 8,
							borderWidth: 4,
							borderColor: hexToRgba(config.pointerColor, 0.5),
						},
					},
					{
						name: '',
						value: max - percent,
						label: {
							show: false,
						},
						labelLine: {
							show: false,
						},
						itemStyle: {
							color: 'rgba(255,255,255,0)',
						},
					},
				],
			},
		],
	}
}
