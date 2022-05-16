<template>
	<div class="widget-part pos-r" :style="styles" v-if="data" :class="{ active: isSceneActive }">
		<div class="legend-box">
			<div class="legend" v-if="config.config.showLegend">
				<div class="legend1" v-if="config.config.desc1">
					<div class="bgc1" :style="`backgroundColor:${config.config.color1};}`"></div>
					<div class="desc1">
						{{ data.legend1 || config.config.desc1 }}
					</div>
				</div>
				<div class="legend2" v-if="config.config.desc2">
					<div class="bgc2" :style="`backgroundColor:${config.config.color2};}`"></div>
					<div class="desc2">
						{{ data.legend2 || config.config.desc2 }}
					</div>
				</div>
				<div class="legend2" v-if="config.config.desc3">
					<div class="bgc2" :style="`backgroundColor:${config.config.color3};}`"></div>
					<div class="desc2">
						{{ data.legend3 || config.config.desc3 }}
					</div>
				</div>
				<div class="legend2" v-if="config.config.desc4">
					<div class="bgc4" :style="`borderTopColor:${config.config.color4};}`"></div>
					<div class="desc2">
						{{ data.legend4 || config.config.desc4 }}
					</div>
				</div>
			</div>
		</div>
		<div class="h-line-1" :id="id" />
	</div>
</template>
<script lang="ts">
import { Component, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
import { widgetMixin } from '@eslinkv/vue2'
import { options } from './options'
import format from 'date-fns/format'
@Component
export default class HBar1 extends mixins(widgetMixin) {
	@Watch('data', { deep: true, immediate: true })
	onDataChange(val) {
		if (this.id) {
			const data = { ...val }
			this.$nextTick(() => {
				this.instance = echarts.init(document.getElementById(this.id))
				this.setOption(data, this.config.config)
				this.instance.off('click')
				this.instance.on('click', params => {
					// debugger
					const name = params.name
					let year, value, rate
					if (params.seriesIndex === 0) {
						year = (data.legend1 || this.config.config.desc1).toString()
						value = data.value[params.dataIndex].yValue1
						rate = data.value[params.dataIndex].yValue4
					}
					if (params.seriesIndex === 1) {
						year = (data.legend2 || this.config.config.desc2).toString()
						value = data.value[params.dataIndex].yValue2
						rate = data.value[params.dataIndex].yValue4
					}
					if (params.seriesIndex === 2) {
						year = (data.legend3 || this.config.config.desc3).toString()
						value = data.value[params.dataIndex].yValue3
						rate = data.value[params.dataIndex].yValue4
					}
					let month
					if (name.indexOf('月') !== -1) {
						month = format(new Date(year.replace('年', ''), name.replace('月', '') - 1), 'yyyy-MM')
					}
					this.__handleClick__({ year, name, value, rate, month })
				})
			})
		}
	}

	setOption(data, config) {
		const o = options(data, config)
		this.instance && this.instance.setOption(o)
	}

	created() {
		this.configValue = this.parseConfigValue(value, customConfig, true)
	}
}
</script>
<style lang="scss" scoped>
.widget-part.active {
	background: rgba(0, 221, 255, 0.2);
}
.h-line-1 {
	height: 100%;
}

.legend-box {
	position: absolute;
	top: 10px;
	left: 0;
	display: flex;
	align-items: center;
	width: 100%;
	height: 20px;

	.unit {
		width: 30px;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 16px;
		color: #fff;
		text-align: right;
		letter-spacing: 0;
		white-space: nowrap;
	}

	.legend {
		position: absolute;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;

		.legend1,
		.legend2 {
			display: flex;
			align-items: center;
			margin-left: 20px;
		}

		.bgc1,
		.bgc2 {
			width: 16px;
			height: 8px;
		}

		.bgc4 {
			width: 16px;
			height: 0;
			border-top: 1px dotted #ccc;
		}

		.desc1,
		.desc2 {
			margin-left: 5px;
			font-size: 16px;
			font-style: normal;
			font-weight: 400;
			line-height: 16px;
			color: #fff;
			letter-spacing: 0;
		}
	}
}
</style>
