'use strict'
exports.__esModule = true
exports.value = exports.customConfig = exports.version = exports.type = exports.name = void 0
// 组件中文名唯一
exports.name = '半圆环占比图'
// 组件名唯一
exports.type = 'o-pie-2'
// 检测当前组件名，版本唯一，类似npm发布策略
exports.version = '1.0.2'
// 自定义配置
exports.customConfig = []
// 配置
exports.value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify({
			value: [
				{
					name: '分类一',
					percent: 50,
					count: 321,
					unit: 'km',
				},
				{
					name: '分类二',
					percent: 80,
					count: 321,
					unit: 'km',
				},
				{
					name: '分类三',
					percent: 40,
					count: 321,
					unit: 'km',
				},
			],
		}),
	},
	layout: {
		// 宽高
		size: {
			width: 400,
			height: 170,
		},
		position: {
			value: 'relative',
		},
	},
	// 自定义配置默认值
	config: {},
	widget: {
		componentVersion: exports.version,
		name: exports.name,
	},
}
