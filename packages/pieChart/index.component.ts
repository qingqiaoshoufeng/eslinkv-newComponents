import type { customConfigItemType } from '@utils/defineConfig'
import defineConfig from '@utils/defineConfig'
const customConfigList: customConfigItemType[] = [
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
				prop: 'type',
				label: '图形类型',
				type: 'func-input',
			},
		],
		defaultValue: [
			{
				raduis: '90%',
				dataNameList: 'Direct,Union Ads',
			},
		],
	},
]
const customData = JSON.stringify({
	value: [
		[
			{ value: 1048, name: 'Search Engine' },
			{ value: 735, name: 'Direct' },
			{ value: 580, name: 'Email' },
			{ value: 484, name: 'Union Ads' },
			{ value: 300, name: 'Video Ads' },
		],
	],
})
debugger
const { name, type, version, customConfig, value } = defineConfig({
	name: '饼图',
	type: 'pieChart',
	version: '1.0.0',
	layout: {
		height: 240,
		width: 480,
		position: 'relative',
	},
	customConfigList,
	customData,
})
debugger
export { name, type, version, customConfig, value }
