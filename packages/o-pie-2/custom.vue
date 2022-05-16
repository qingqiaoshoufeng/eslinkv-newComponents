<template lang="pug">
widget-normal(:value="value", :customConfig="customConfig")
	.main(v-if="config.config.colorTheme")
		.chart(:id="id")
		ul.circle-legend.fn-flex.flex-column
			li(v-for="(k, i) in data.value")
				.circle-legend-color(
					:style="{ borderColor: config.config.colorTheme.colorDisk[i] }")
				.circle-legend-name {{ k.name }}
				.circle-legend-num
					.font-num {{ k.count.toLocaleString() }}
				.circle-legend-unit {{ k.unit }}
</template>
<script lang="ts">
import { Component, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import options from './options'

@Component({ components: { widgetNormal } })
export default class OPie2 extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig
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

	setOption(data, config) {
		const o = options(data, config)
		this.instance && this.instance.setOption(o)
	}
}
</script>
<style lang="scss" scoped>
.main {
	display: flex;
	height: 100%;
	width: 100%;
}
.chart {
	flex: none;
	width: 200px;
	height: 100%;
}
.circle-legend {
	justify-content: center;
	li {
		display: flex;
		align-items: center;
		margin-bottom: 16px;
		font-size: 18px;
		color: #fff;
		.circle-legend-color {
			box-sizing: content-box;
			width: 6px;
			height: 6px;
			margin-right: 10px;
			background: transparent;
			border: 4px solid #2c99ff;
			border-radius: 50%;
		}
		.circle-legend-name {
			width: 80px;
			text-align: left;
		}
		.circle-legend-num {
			width: 50px;
			text-align: right;
		}
		.circle-legend-unit {
			margin-right: 8px;
			font-size: 18px;
		}
	}
}
</style>
