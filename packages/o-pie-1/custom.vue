<template lang="pug">
widget-normal(
	:value="value",
	:customConfig="customConfig",
	:eventTypes="eventTypes"
)
	.chart(:id="id", v-if="config.config.show")
	.unit(:style="{ [config.config.unitPosition]: 0 }", v-if="config.config.show") {{ config.config.unit }}
</template>
<script lang="ts">
import { Component, Watch } from 'vue-property-decorator'
import { value, customConfig } from './index.component.ts'
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import options from './options'

@Component({ components: { widgetNormal } })
export default class OLine1 extends widgetNormalMixin {
	eventTypes = [{ key: 'click', label: '点击事件' }]
	value = value
	customConfig = customConfig

	@Watch('data', { deep: true, immediate: true })
	onDataChange(val) {
		if (this.id) {
			const data = { ...val }
			this.$nextTick(() => {
				this.instance = echarts.init(document.getElementById(this.id))
				this.setOption(data, this.config.config)
				this.instance.off('click')
				this.instance.on('click', params => {
					this.__handleEvent__('click', params.data)
				})
			})
		}
	}

	@Watch('config.config.show')
	setOptions(data, config) {
		this.$nextTick(() => {
			this.instance = echarts.init(document.getElementById(this.id))
			this.setOption(this.data, this.config.config)
		})
	}
	setOption(data, config) {
		const o = options(data, config)
		this.instance && this.instance.setOption(o)
	}
}
</script>
<style lang="scss" scoped>
.chart {
	height: 100%;
	background-image: url('./loop-bg.svg');
	background-repeat: no-repeat;
	background-size: 44% 44%;
	background-position: 50% 50%;
}
.unit {
	position: absolute;
	right: 0;
	color: #fff;
}
</style>
