export default (data, config) => {
	const value = data || []
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
			top: config.title2 ? '39%' : '47%',
			textStyle: {
				color: '#fff',
				fontSize: 16,
				fontWeight: 400,
			},
			subtextStyle: {
				color: '#fff',
				fontSize: 16,
				fontWeight: 400,
			},
		},
		color: config.colors || [
			'#00DDFF',
			'#0B88FF',
			'#624BEB',
			'#FA71CB',
			'#FFDC45',
			'#E5615B',
			'#00FFCF',
			'#FF9F61',
		],
		series: [
			{
				type: 'pie',
				center: ['50%', '50%'],
				radius: ['48%', '58%'],
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
							fontSize: 14,
							lineHeight: 14,
							color: '#fff',
							padding: [6, 0, 0, 0],
							align: 'right',
						},
						value: {
							align: 'left',
							fontSize: 14,
							lineHeight: 14,
							color: '#fff',
							padding: [-8, 0, 0, 0],
						},
					},
				},
				labelLine: {
					length: 25,
					length2: 110,
				},
				data: value,
			},
		],
	}

	return option
}
