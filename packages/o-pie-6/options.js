export default (data, config) => {
	return {
		color: config.colorTheme.colorDisk,
		series: [{
			type: 'pie',
			data: data.value,

			label: {
				show: false
			},
			roseType: 'radius',
			selectedMode: 'single',
			selectedOffset: 30
		}]
	}
}
