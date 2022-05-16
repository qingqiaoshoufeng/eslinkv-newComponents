// 组件中文名唯一
export const name = '水球图'
// 组件名唯一
export const type = 'o-pie-8'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.1'
// 自定义配置
export const customConfig = [
	{
		prop: 'color1',
		label: '第一层颜色',
		type: 'func-color',
	},
	{
		prop: 'color2',
		label: '第二层颜色',
		type: 'func-color',
	},
	{
		prop: 'borderColor',
		label: '边框颜色',
		type: 'func-color',
	},
	{
		prop: 'fontColor',
		label: '文字颜色',
		type: 'func-color',
	},
]
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify({
			percent: 0.6,
		}),
	},
	layout: {
		// 宽高
		size: {
			width: 148,
			height: 148,
		},
		position: {
			value: 'relative',
		},
	},
	// 自定义配置默认值
	config: {
		color1: '#00DDFF',
		color2: '#225C9F',
		borderColor: '#023066',
		fontColor: '#fff',
	},
	widget: {
		componentVersion: version,
		name,
	},
}
