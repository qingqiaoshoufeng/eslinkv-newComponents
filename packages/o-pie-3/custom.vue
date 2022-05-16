<template lang="pug">
widget-normal(:value="value", :customConfig="customConfig")
	.chart(:id="id")
	.info(:style="topStyle")
		.title.font-num {{ data && data.percent }}%
		.sub-title(
			v-for="(item, index) in config.config.title.split(',')",
			:key="index"
		) {{ item }}
</template>
<script lang="ts">
import { Component, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import options from './options'

@Component({ components: { widgetNormal } })
export default class OPie3 extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig
	topStyle = {}
	bottomStyle = {}
	@Watch('data', { deep: true, immediate: true })
	onDataChange(val) {
		if (this.id) {
			const data = { ...val }
			this.$nextTick(() => {
				this.instance = echarts.init(document.getElementById(this.id))
				this.setOption(data, this.config.config)
			})
		}
	}
	mounted() {
		this.formatStyle()
	}
	setOption(data, config) {
		const o = options(data, config)
		this.instance && this.instance.setOption(o)
	}
	formatStyle() {
		const formatOptions = {
			topStyle: {
				keyMap: {
					'margin-bottom': 'bottom',
				},
			},
			bottomStyle: {
				keyMap: {
					'margin-bottom': 'bottom',
				},
			},
		}

		for (let keys in formatOptions) {
			Object.entries(formatOptions[keys].keyMap).forEach(
				([key, key2]) => {
					this[keys][key] = `${this.config.config[key2 as string]}px`
				},
			)
		}
		// this.topStyle = {
		// 	'margin-top': `${this.config.config.top}px`,
		// }
		// this.bottomStyle = {
		// 	'margin-bottom': `${this.config.config.bottom}px`,
		// }
	}
}
</script>
<style lang="scss" scoped>
.chart {
	height: 100%;
}
.info {
	height: 100%;
	position: relative;
	transform: translateY(-100%);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.title {
		margin-bottom: 5px;
		margin-top: 10px;
		font-size: 32px;
		font-weight: bold;
		text-align: center;
		color: #fff;
	}
	.sub-title {
		text-align: center;
		font-size: 18px;
		color: rgba(255, 255, 255, 0.75);
	}
}
</style>
