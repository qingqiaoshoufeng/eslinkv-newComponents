// 组件中文名唯一
export const name = 'b-多轴图'
// 组件名唯一
export const type = 'b-bar-1-1'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.2'
// 自定义配置
export const customConfig = [
	{
		prop: 'title',
		label: 'y轴单位',
		type: 'func-input',
	},
	{
		prop: 'pointer',
		label: '折线圆点图标',
		type: 'func-input',
	},
	{
		prop: 'left',
		label: '缩进',
		type: 'func-number',
	},
	{
		prop: 'isLinearGradient',
		label: '是否渐变',
		type: 'func-switch',
	},
	{
		prop: 'unit2',
		label: '右侧单位',
		type: 'func-switch',
	},
]
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify({
			value: [
				{
					x: ['08/12', '08/13', '08/14', '08/15', '08/16', '08/17'],
					y: [250, 120, 140, 270, 180, 130],
					name: '居民数',
				},
				{
					x: ['08/12', '08/13', '08/14', '08/15', '08/16', '08/17'],
					y: [280, 170, 80, 200, 190, 90],
					name: '非居民数',
				},
			],
			line: {
				x: ['08/12', '08/13', '08/14', '08/15', '08/16', '08/17'],
				y: [20, 50, 10, 90, 40, 50],
				name: '数据1',
			},
		}),
	},
	layout: {
		// 宽高
		size: {
			width: 497,
			height: 200,
		},
		position: {
			value: 'relative',
		},
	},
	// 自定义配置默认值
	config: {
		title: '数量',
		left: 0,
		pointer:
			'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAdCAYAAAC5UQwxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM3SURBVHgBtVbbVdtAEJ1Zmb8ETAVRKoipIKYC6ABTASaQb9vfgWBXAK7ATgWICnAqQKkAJ+EvljZ3tLt4JcsP+RzmHLD2NXfuzOzsMG0gbf1cr1GtQZQ2NfEHJgplXhPFTPoXkYqu+H20iS5eAxQC6AyqWxjWabVMYcA4oaTX5/24EqBl1AFQ25uONOmfitJJCuVs/sKUVAO/n6Gq4antgnFvI0BhtUO1EZRnCmD1naJk8I33J7RC5FxAqsvEJ1Zx/I+SwyJbXgQL7gESAhDxSU+veD+iCmKB7wEcloGyt7EOsEedJYSezCiVjVPaQkzs1UjcbEEPnK6a2xRQcOOYJSVg80ylI2Qm9kkS8QT7H655d+zvFUbYfwhQeIsbJh/o/JXhpf7bBCss6inADop+v9B/jrHxlpZkqrBIiHrfefeuyBREHjk7lxxKeJRZ0h17cFAEgzEdzI9oxbUQz0DRrewtMoU3BmYUGAzj7+DJc2XsDnzVL2ea0j5VEn1+xXt9j2UdLJ+EJSOWCn4+Nksc+WBiCMC6VFm4IyA0Z4lc0MPMFGDBE3xk1374x2BIi9ZXlzJBcql2wYjIfjSUq4u43HF+kzqi7SV3FuUuKxq4m5+UtoCLlUQ3aGvh0B+5UNnkehNZGgphmF1wP9Aicrdoe1koGm5eKbu4Y13rBC/ChLYW/eCPbIWS+VildhEp2/Q34c4MaEtJiceFGfvy8AQMXcpyLrPsKxFRRZECUixxTjfC96BQycc2js1L/dz0t80oORUFVAFMqpU/JwVEdMtaCiwllaBY75xIOouCTUDLSqMInrwb85VVsqkyTNL+nOXvdhH0mvc+IolK2coLg/+9slfG1GI6NsYkWcvx+gBf6Gc8QcHIKFGta343LGMCF+F9M/dshquzrGG60C8n6Bju5FuMdXHNtRhg15Xia23PVf0q4oMJe+jpurWFJsoHlQZqXdvni32KbqC0VQZWCijyBXFEoe2wdZ0AYzxc1uyajkEKtulfJa442yvzEK+wNtf2zQ9o9DE8td9QziHla2ck12mZV1Z23h5we7HZzRkRwwtDxG28rn9dC1gAx+NKr6Azc5XiKu3kf54voSeECG5EAAAAAElFTkSuQmCC',
		isLinearGradient: false,
		unit2: '',
	},
	widget: {
		componentVersion: version,
		name,
	},
}
