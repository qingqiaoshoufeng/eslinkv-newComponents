<template lang="pug">
widget-normal(
	:value="value",
	:customConfig="customConfig",
	:eventTypes="eventTypes")
	.o-zhuxing-2(:id="id")
</template>
<script lang="ts">
import { Component, Watch } from 'vue-property-decorator'
import { value, customConfig } from './index.component.ts'
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import options from './options'

@Component({ components: { widgetNormal } })
export default class extends widgetNormalMixin {
	value = value
	customConfig = customConfig
	eventTypes = [{ key: 'click', label: '点击事件' }]

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

	@Watch('config.config')
	onConfigChange(val) {
		if (this.id) {
			this.$nextTick(() => {
				this.instance = echarts.init(document.getElementById(this.id))
				this.setOption(this.data, this.config.config)
			})
		}
	}

	setOption(data, config) {
		const o = options(data, config)
		this.instance && this.instance.setOption(o)
	}
}
</script>
<style lang="scss" scoped>
.o-zhuxing-2 {
	height: 100%;
}
</style>
