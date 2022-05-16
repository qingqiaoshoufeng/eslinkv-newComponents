<template lang="pug">
.main
	.chart(ref="chart")
	.unit(:style="{ [unitPosition]: 0 }", v-if="unit") {{ unit }}
</template>
<script lang="ts">
import { Component, Watch, Prop, Vue } from 'vue-property-decorator'
import options from './options'

@Component
export default class Pie extends Vue {
	@Prop(Number) index?: number
	@Prop(String) unit?: string
	@Prop({ default: 'bottom' }) unitPosition?: string
	@Prop(String) title1?: string
	@Prop(String) title2?: string
	@Prop(String) colors?: string[]
	@Prop({ default: 270 }) startAngle?: number
	@Prop() data: any

	instance: any = null
	lastIndex = 0

	@Watch('index', { immediate: true })
	indexChange(val) {
		if (typeof val !== 'number') return
		this.instance.dispatchAction({
			type: 'downplay',
			seriesIndex: 0,
			dataIndex: this.lastIndex,
		})
		this.lastIndex = val
		this.instance.dispatchAction({
			type: 'highlight',
			seriesIndex: 0,
			dataIndex: val,
		})
	}

	mounted() {
		this.instance = echarts.init(this.$refs.chart)
		this.instance.setOption(
			options(this.data, {
				title1: this.title1,
				title2: this.title2,
				startAngle: this.startAngle,
				colors: this.colors,
			}),
		)
	}
}
</script>
<style lang="scss" scoped>
.main {
	position: relative;
	width: 100%;
	height: 100%;
}
.chart {
	height: 100%;
	background-image: url('./loop-bg.svg');
	background-repeat: no-repeat;
	background-size: 46% 46%;
	background-position: 50% 50%;
}
.unit {
	position: absolute;
	right: 0;
	color: #fff;
}
</style>
