<template>
	<widgetNormal :value="value" :customConfig="customConfig">
		<div class="h-ring-1" :id="id" />
		<ul
			class="h-ring-1-icon pos-a"
			:style="{
				backgroundImage: `url(${config.config.background})`,
			}"
		>
			<li
				class="pos-a"
				v-for="(item, index) in icon"
				:key="index"
				:style="{ transform: `rotate(${3.6 * index}deg)` }"
			/>
		</ul>
		<div class="pos-a h-ring-1-legend-box" v-if="config.config.colorTheme">
			<ul class="h-ring-1-legend" :style="legengdTransform">
				<li
					class="fn-flex flex-row"
					v-for="(item, index) in data.value"
					:key="index"
					@click="activeHandler(index)"
					:class="[{ active: animateActiveIndex === index }]"
				>
					<i
						class="circle"
						:style="{
							color: config.config.colorTheme.colorDisk[index % config.config.colorTheme.colorDisk.length]
						}"
					/>
					<label class="ellipsis">{{ item.title }}</label>
					<a>{{ item.des }}</a>
					<span>
						{{ (item.value * 100 / total).toFixed(1) }}{{ config.config.suffix }}
					</span>
				</li>
			</ul>
		</div>
	</widgetNormal>
</template>
<script lang="ts">
import { Component, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import options from './options'

@Component({ components: { widgetNormal } })
export default class OPie7 extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig
	icon = new Int8Array(100)
	showSize =  4
	
	get total () {
		return this.data.value.reduce((p, n) => p + n.value, 0)
	}
	
	get legengdTransform() {
		if (this.data) {
			if (this.data.value.length <= this.showSize + 1) {
				return { transform: 'translateY(0px)' }
			} else {
				if (this.animateActiveIndex > this.showSize) {
					const top =
						(this.animateActiveIndex - this.showSize) * 32
					return { transform: `translateY(-${top}px)` }
				} else {
					return { transform: 'translateY(0px)' }
				}
			}
		}
		return { transform: 'translateY(0px)' }
	}
	
	@Watch('data', { deep: true, immediate: true })
	onDataChange(val) {
		if (this.id) {
			const data = { ...val }
			this.$nextTick(() => {
				console.log(data)
				this.instance = echarts.init(document.getElementById(this.id))
				this.setOption(data.value)
				this.show(data.value)
			})
		}
	}

	activeHandler(index) {
		clearInterval(this.animateTimer)
		this.instance.dispatchAction({
			type: 'downplay',
			seriesIndex: 0,
			dataIndex: this.animateActiveIndex,
		})
		this.animateActiveIndex = index
		this.instance.dispatchAction({
			type: 'highlight',
			seriesIndex: 0,
			dataIndex: index,
		})
		setTimeout(() => {
			this.show(this.data)
		}, 2000)
	}

	setOption(data) {
		options.series[0].data = data.map(item => item.value)
		options.color = this.config.config.colorTheme.colorDisk
		this.instance && this.instance.setOption(options)
	}

	show(data) {
		clearInterval(this.animateTimer)
		this.animateTimer = setInterval(() => {
			this.instance.dispatchAction({
				type: 'downplay',
				seriesIndex: 0,
				dataIndex: this.animateActiveIndex % data.length,
			})
			if (this.animateActiveIndex >= data.length - 1) {
				this.animateActiveIndex = 0
			} else {
				this.animateActiveIndex = this.animateActiveIndex + 1
			}
			this.instance.dispatchAction({
				type: 'highlight',
				seriesIndex: 0,
				dataIndex: this.animateActiveIndex % data.length,
			})
		}, 1000)
	}

	
}
</script>
<style lang="scss" scoped>
.h-ring-1 {
	height: 100%;
}

.h-ring-1-icon {
	top: 50%;
	left: 20%;
	width: 112px;
	height: 112px;
	margin-top: -56px;
	margin-left: -56px;
	background-repeat: no-repeat;
	background-position: center;
	background-size: 40px 49px;

	li {
		top: 6%;
		left: 50%;
		width: 2px;
		height: 8px;
		margin-left: -1px;
		background-color: rgba(255, 255, 255, 0.2);
		transform-origin: 0 50px;
	}
}

.h-ring-1-legend-box {
	top: 49px;
	right: 0;
	max-height: 176px;
	overflow-y: hidden;
}

.h-ring-1-legend {
	transition: all 0.3s;

	li {
		align-items: center;
		min-width: 272px;
		height: 24px;
		line-height: 24px;
		padding: 0 8px;
		margin-bottom: 8px;

		&.active {
			background: rgba(255, 255, 255, 0.2);
			border-radius: 4px;
		}
	}

	i {
		width: 12px;
		height: 12px;
		border: 2px solid;
	}

	label,
	span,
	a {
		font-size: 18px;
		line-height: 18px;
		color: #fff;
	}

	label {
		width: 150px;
		margin-left: 4px;
		text-align: left;
	}

	a {
		margin-right: 10px;
	}

	span {
		margin-left: auto;
	}
}
</style>
