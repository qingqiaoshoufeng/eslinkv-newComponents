
export default (data, config) => {
	const value = data.value || []
	if (value.length === 0) return {}
	const xAxis = value.map(v => v.name + v.percent + '%')
	const option = {
		grid: {
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
		},
		textStyle: {
			fontSize: 16,
			color: '#FFF',
		},
		color: config.colorTheme.colorDisk,
		legend: {
			orient: 'vertical',
			left: '33%',
			top: '-2%',
			textStyle: {
				color: '#FFFFFF',
				fontSize: 16,
			},
			itemGap: 0,
			itemWidth: 44,
			itemHeight: 1,
			data: xAxis,
		},
		series: [
			{
				name: xAxis[0],
				clockWise: false,
				type: 'pie',
				center: ['42%', '50%'],
				radius: ['86%', '96%'],
				labelLine: {
					normal: {
						show: false,
					},
				},
				label: {
					show: false,
				},
				hoverAnimation: false,
				data: [
					{
						value: value[0].percent,
						name: '一般',
					},
					{
						value: 100 - value[0].percent,
						name: '',
						itemStyle: {
							color: 'rgba(0,0,0,0)',
							borderWidth: 0,
						},
						tooltip: {
							show: false,
						},
					},
				],
			}
		],
	}
	if (value.length > 1) {
		option.series.push({
			name: xAxis[1],
			clockWise: false,
			type: 'pie',
			center: ['42%', '50%'],
			radius: ['66%', '76%'],
			labelLine: {
				normal: {
					show: false,
				},
			},
			label: {
				show: false,
			},
			hoverAnimation: false,
			data: [
				{
					value: value[1].percent,
					name: '良',
				},
				{
					value: 100 - value[1].percent,
					name: '',
					itemStyle: {
						color: 'rgba(0,0,0,0)',
						borderWidth: 0,
					},
					tooltip: {
						show: false,
					},
				},
			],
		})
	}
	if (value.length === 3) {
		option.series.push({
			name: xAxis[2],
			type: 'pie',
			clockWise: false,
			center: ['42%', '50%'],
			radius: ['46%', '56%'],
			hoverAnimation: false,
			label: {
				show: false,
			},
			labelLine: {
				normal: {
					show: false,
				},
			},
			data: [
				{
					value: value[2].percent,
					name: '优',
				},
				{
					value: 100 - value[2].percent,
					name: '',
					itemStyle: {
						color: 'rgba(0,0,0,0)',
						borderWidth: 0,
					},
					tooltip: {
						show: false,
					},
				},
			],
		})
	}
	return option
}
