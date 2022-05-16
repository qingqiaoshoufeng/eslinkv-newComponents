import type { customConfigItemType } from '@utils/defineConfig'
import defineConfig from '@utils/defineConfig'
const customConfigList: customConfigItemType[] = [
	{
		prop: 'xAxisConfig',
		label: 'x轴配置',
		type: 'func-group',
		children: [
			{
				prop: 'name',
				label: 'x轴名称',
				type: 'func-input',
			},
			{
				prop: 'axisLabel-rotate',
				label: '坐标注旋转',
				type: 'func-input',
			},
			{
				prop: 'axisLabel-textStyle-fontSize',
				label: '字体大小',
				type: 'func-input',
			},
		],
		defaultValue: [
			{
				name: '',
				'axisLabel-rotate': 0,
				'axisLabel-textStyle-fontSize': 14,
			},
		],
	},
	{
		prop: 'yAxisConfig',
		label: 'y轴配置',
		type: 'func-group',
		children: [
			{
				prop: 'name',
				label: 'y轴名称',
				type: 'func-input',
			},
			{
				prop: 'axisLabel-rotate',
				label: '坐标注旋转',
				type: 'func-input',
			},
			{
				prop: 'axisLabel-textStyle-fontSize',
				label: '字体大小',
				type: 'func-input',
			},
		],
		defaultValue: [
			{
				name: '',
				'axisLabel-rotate': 0,
				'axisLabel-textStyle-fontSize': 14,
			},
		],
	},
	{
		prop: 'gridConfig',
		label: '布局配置',
		type: 'func-group',
		children: [
			{
				prop: 'left',
				label: '左边距',
				type: 'func-input',
			},
		],
		defaultValue: [
			{
				left: 40,
			},
		],
	},
	{
		prop: 'gridConfig',
		label: '布局配置',
		type: 'func-group',
		children: [
			{
				prop: 'left',
				label: '左边距',
				type: 'func-input',
			},
		],
		defaultValue: [
			{
				left: 40,
			},
		],
	},
	{
		prop: 'seriesConfig',
		label: '数据处理配置',
		type: 'func-group',
		children: [
			{
				prop: 'xAxisKey',
				label: 'x轴数据字段',
				type: 'func-input',
			},
			{
				prop: 'yAxisKey',
				label: 'y轴数据字段',
				type: 'func-input',
			},
			{
				prop: 'itemStyle-color',
				label: '柱体颜色',
				type: 'func-input',
			},
			{
				prop: 'backgroundStyle-color',
				label: '背景色',
				type: 'func-input',
			},
			{
				prop: 'type',
				label: '图形类型',
				type: 'func-input',
			},
			{
				prop: 'barWidth',
				label: '柱宽',
				type: 'func-input',
			},
			{
				prop: 'barMaxWidth',
				label: '最大柱宽',
				type: 'func-input',
			},
			{
				prop: 'barMinWidth',
				label: '最小柱宽',
				type: 'func-input',
			},
		],
		defaultValue: [
			{
				xAxisKey: 'xValue',
				yAxisKey: 'yValue1',
				'itemStyle-color': '#00DDFF',
				'backgroundStyle-color': '#000',

				type: 'bar',
				barWidth: '16',
				barMaxWidth: '8',
				barMinWidth: '32',
			},
			// {
			// 	xAxisKey: 'xValue',
			// 	yAxisKey: 'yValue2',
			// 	'itemStyle-color': '#1774FF',
			// 	'backgroundStyle-color': '#000',
			// 	type: 'bar',
			// 	barWidth: '16',
			// 	barMaxWidth: '8',
			// 	barMinWidth: '32',
			// },
		],
	},
]
const customData = JSON.stringify({
	// legend1: '', // 没有则取config中的数据
	// legend2: '',
	// legend3: '',
	// legend4: '',
	value: [
		{
			yValue1: 120,
			yValue2: 110,
			yValue3: 100,
			yValue4: 33,
			xValue: '5月',
		},
		{
			yValue1: 200,
			yValue2: 200,
			yValue3: 200,
			yValue4: 54,
			xValue: '6月',
		},
		{
			yValue1: 150,
			yValue2: 150,
			yValue3: 150,
			yValue4: 88,
			xValue: '7月',
		},
		{
			yValue1: 80,
			yValue2: 80,
			yValue3: 80,
			yValue4: 66,
			xValue: '8月',
		},
		{
			yValue1: 70,
			yValue2: 70,
			yValue3: 70,
			yValue4: 52,
			xValue: '9月',
		},
		{
			yValue1: 110,
			yValue2: 110,
			yValue3: 110,
			yValue4: 33,
			xValue: '10月',
		},
		{
			yValue1: 130,
			yValue2: 130,
			yValue3: 130,
			yValue4: 16,
			xValue: '11月',
		},
	],
})

const { name, type, version, customConfig, value } = defineConfig({
	name: '二维坐标图',
	type: 'hangran-bar-1',
	version: '1.0.0',
	layout: {
		height: 240,
		width: 480,
		position: 'relative',
	},
	customConfigList,
	customData,
})
export { name, type, version, customConfig, value }
