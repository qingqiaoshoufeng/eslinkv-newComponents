export default (data, config) => {
	const value = data.value || []
	let total = 0
	if (value.length) {
		total = value.reduce((p, n, index) => {
			return (Number(p) || 0) + Number(n.value)
		}, 0)
	}
	const option = {
		title: {
			text: config.title1,
			subtext: config.title2,
			left: 'center',
			top: config.top + '%',
			textStyle: {
				color: '#fff',
				fontSize: config.fontSize,
				fontWeight: 600,
			},
			subtextStyle: {
				color: '#fff',
				fontSize: config.fontSize,
				fontWeight: 600,
			},
		},
		color: config.colorTheme.colorDisk,
		series: [
			{
				type: 'pie',
				center: ['50%', '50%'],
				radius: ['52%', '64%'],
				avoidLabelOverlap: false,
				minAngle: 24,
				startAngle: config.startAngle,
				label: {
					formatter: function (params) {
						const percent = ((params.value * 100) / total).toFixed(
							2,
						)
						return `{normal|${params.name}} \n {value|${Math.ceil(
							params.value,
						).toLocaleString()} ${percent}%}`
					},
					padding: [0, -100],
					rich: {
						normal: {
							fontSize: config.labelSize,
							lineHeight: config.labelSize,
							color: '#fff',
							padding: [6, 0, 0, 0],
							align: 'right',
						},
						value: {
							align: 'left',
							fontSize: config.labelSize,
							lineHeight: config.labelSize,
							color: '#fff',
							padding: [-8, 0, 0, 0],
						},
					},
				},
				labelLine: {
					length: config.length,
					length2: config.length2,
				},
				data: value,
			},
		],
	}

	return option
}
