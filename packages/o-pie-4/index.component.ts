// 组件中文名唯一
export const name = '半圆环进度图'
// 组件名唯一
export const type = 'o-pie-4'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.2'
// 自定义配置
export const customConfig = [
	{
		prop: 'title',
		label: '标题',
		type: 'func-input',
	},
	{
		prop: 'mainColor',
		label: '环形主颜色',
		type: 'func-color',
	},
	{
		prop: 'pointerColor',
		label: '圆点颜色',
		type: 'func-color',
	},
	{
		prop: 'titleColor',
		label: '标题颜色',
		type: 'func-color',
	},
	{
		prop: 'subTitleColor',
		label: '副标题颜色',
		type: 'func-color',
	},
]
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify({
			percent: 30,
		}),
	},
	layout: {
		// 宽高
		size: {
			width: 170,
			height: 90,
		},
		position: {
			value: 'relative',
		},
	},
	// 自定义配置默认值
	config: {
		title: '完成率',
		mainColor: '#00DDFF',
		bgColor: 'rgba(0, 87, 169, 0.5)',
		pointerColor: '#00FFCF',
		titleColor: '#fff',
		subTitleColor: '#00DDFF',
	},
	widget: {
		componentVersion: version,
		name,
	},
}
