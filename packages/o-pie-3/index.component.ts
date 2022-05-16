// 组件中文名唯一
export const name = '圆环进度图'
// 组件名唯一
export const type = 'o-pie-3'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.4'
// 自定义配置
export const customConfig = [
	{
		prop: 'title',
		label: '标题',
		type: 'func-input',
	},
	{
		prop: 'titleTop',
		label: '标题位置',
		type: 'func-input',
	},
	{
		prop: 'bottom',
		label: '间距',
		type: 'func-input',
	},
]
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify({
			percent: 56,
		}),
	},
	layout: {
		// 宽高
		size: {
			width: 160,
			height: 160,
		},
		position: {
			value: 'relative',
		},
	},
	// 自定义配置默认值
	config: {
		title: '完成率',
		titleTop: '10',
		bottom: '5',
	},
	widget: {
		componentVersion: version,
		name,
	},
}
