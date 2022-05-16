export default (data, config) => {
	let newData = []
	let newData1 = []
	let newData3 = []
	let newData4 = []

	for (let i = 0; i < data.percent / 4; i++) {
		let opacity = (i * 4) / data.percent
		if (opacity <= 0) opacity = 0.1
		newData = [
			...newData,
			{
				value: 3.5,
				itemStyle: {
					color: '#00FFCF',
				},
			},
			{
				value: 0.5,
				itemStyle: {
					color: 'rgba(0, 221, 255, 0)',
				},
			},
		]
		newData1 = [
			...newData1,
			{
				value: 3.5,
				itemStyle: {
					color: `rgba(0, 221, 255,${opacity})`,
				},
			},
			{
				value: 0.5,
				itemStyle: {
					color: 'rgba(255,255,255,0)',
				},
			},
		]
		newData3 = [
			...newData3,
			{
				value: 4,
				itemStyle: {
					color: 'rgba(0, 221, 255, 0)',
				},
			},
		]
		newData4 = [
			...newData4,
			{
				value: 4,
				itemStyle: {
					color: `rgba(0, 221, 255, 0.5)`,
				},
			},
		]
	}
	for (let i = 0; i <= (100 - data.percent) / 4; i++) {
		newData = [
			...newData,
			{
				value: 3.5,
				itemStyle: {
					color: 'rgba(0, 87, 169, 0.5)',
				},
			},
			{
				value: 0.5,
				itemStyle: {
					color: 'rgba(255, 255, 255, 0)',
				},
			},
		]
		newData1 = [
			...newData1,
			{
				value: 3.5,
				itemStyle: {
					color: 'rgba(255, 255, 255, .1)',
				},
			},
			{
				value: 0.5,
				itemStyle: {
					color: 'rgba(255, 255, 255, 0)',
				},
			},
		]
		newData3 = [
			...newData3,
			{
				value: 4,
				itemStyle: {
					color: 'rgba(255, 255, 255, 0)',
				},
			},
		]
		newData4 = [
			...newData4,
			{
				value: 4,
				itemStyle: {
					color: 'rgba(255, 255, 255, 0)',
				},
			},
		]
	}
	return {
		color: config.colorTheme.colorDisk,
		series: [
			{
				name: '外环底色',
				animation: false,
				type: 'pie',
				startAngle: 270,
				radius: ['82.5%', '97.5%'],
				label: {
					show: false,
					position: 'center',
				},
				labelLine: {
					normal: {
						show: true,
						lineStyle: {
							color: 'rgba(255, 255, 255, 0)',
						},
						smooth: 0.2,
						length: 10,
					},
				},
				data: newData1
			},
			{
				name: '外环数据展示',
				animation: false,
				type: 'pie',
				startAngle: 270,
				radius: ['82%', '98%'],
				label: {
					show: false,
					position: 'center',
				},
				labelLine: {
					normal: {
						show: true,
						lineStyle: {
							color: 'rgba(255, 255, 255, 1)',
						},
						smooth: 0.2,
						length: 10,
					},
				},
				data: newData
			},
			{
				name: '内环底色',
				animation: false,
				type: 'pie',
				startAngle: 270,
				radius: ['75%', '78%'],
				label: {
					show: false,
					position: 'center',
				},
				labelLine: {
					normal: {
						show: true,
						lineStyle: {
							color: 'rgba(255, 255, 255, 1)',
						},
						smooth: 0.2,
						length: 10,
					},
				},
				data: newData3
			},
			{
				name: '内环数据展示',
				animation: false,
				type: 'pie',
				startAngle: 270,
				radius: ['75%', '78%'],
				label: {
					show: false,
					position: 'center',
				},
				labelLine: {
					normal: {
						show: true,
						lineStyle: {
							color: 'rgba(255, 255, 255, 1)',
						},
						smooth: 0.2,
						length: 10,
					},
				},
				data: newData4
			},
		]
	}
}
