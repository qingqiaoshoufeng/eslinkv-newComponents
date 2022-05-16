// 组件中文名唯一
export const name = '轮播饼图'
// 组件名唯一
export const type = 'o-pie-7'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.4'
// 自定义配置
export const customConfig = [
	{
		prop: 'suffix',
		label: '后缀',
		type: 'func-input',
	},
	{
		prop: 'background',
		label: '背景图片',
		type: 'func-image',
	},
]
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify({
			value: [
				{ value: 12.5, des: '111', title: '分类一' },
				{ value: 12.5, des: '', title: '分类二' },
				{ value: 12.5, des: '', title: '分类三' },
				{ value: 12.5, des: '', title: '分类四' },
				{ value: 12.5, des: '', title: '分类五' },
				{ value: 12.5, des: '', title: '分类六' },
				{ value: 12.5, des: '', title: '分类七' },
			],
		}),
	},
	layout: {
		// 宽高
		size: {
			width: 480,
			height: 276,
		},
		position: {
			value: 'relative',
		},
	},
	// 自定义配置默认值
	config: {
		background: 'https://placeholder.idcd.com/?w=300&h=300&text=300x300',
		suffix: '%',
	},
	widget: {
		componentVersion: version,
		name,
	},
}
