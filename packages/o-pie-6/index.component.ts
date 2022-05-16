// 组件中文名唯一
export const name = '玫瑰环占比图'
// 组件名唯一
export const type = 'o-pie-6'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.1'
// 自定义配置
export const customConfig = []
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify({
			value: [
				{
					name: '零食',
					value: 3000,
				},
				{
					name: '化妆品',
					value: 9300,
				},
				{
					name: '服装',
					value: 13200,
				},
				{
					name: '家电',
					value: 5600,
				},
			],
		}),
	},
	layout: {
		// 宽高
		size: {
			width: 480,
			height: 160,
		},
		position: {
			value: 'relative',
		},
	},
	// 自定义配置默认值
	config: {},
	widget: {
		componentVersion: version,
		name,
	},
}
