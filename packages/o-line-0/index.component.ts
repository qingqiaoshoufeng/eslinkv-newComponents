// 组件中文名唯一
export const name = '基础折线图'
// 组件名唯一
export const type = 'o-line-0'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.3'
// 自定义配置
export const customConfig = [
	{
		prop: 'title',
		label: 'y轴单位',
		type: 'func-input',
	},
	{
		prop: 'smooth',
		label: '平滑曲线',
		type: 'func-switch',
	},
	{
		prop: 'left',
		label: '左部距离',
		type: 'func-input',
	},
	{
		prop: 'rotate',
		label: 'x轴文字倾斜',
		type: 'func-input',
	},
	{
		prop: 'toFixed',
		label: 'y轴保留小数位',
		type: 'func-input',
	},
	{
		prop: 'reduceNum',
		label: 'y轴最小数据减去值',
		type: 'func-input',
	},
	{
		prop: 'yMin',
		label: 'y轴min值',
		type: 'func-input',
	},
	{
		prop: 'yMax',
		label: 'y轴max值',
		type: 'func-input',
	},
	{
		prop: 'lineIcon',
		label: '图标',
		type: 'func-input',
	},
	{
		prop: 'lineColor',
		label: '折线颜色',
		type: 'func-input',
	},
	{
		prop: 'lineType',
		label: '折线虚实（dashed/solid）',
		type: 'func-input',
	},
]
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify({
			value: [
				{
					x: ['08/12', '08/13', '08/14', '08/15', '08/16'],
					y: ['80', '80', '90', '88', '90'],
					name: '数据1',
				},
			],
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
		title: '%',
		left: 50,
		rotate: 30,
		smooth: 0,
		lineColor: '#FFDE52',
		lineType: 'dashed',
		toFixed: 2,
		reduceNum: 0.05,
		yMin: '',
		yMax: '',
		lineIcon:
			'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFUSURBVHgBjVNBTsNADJzNgSPqDwhCHDjBE+AF8AT6A35AeQH8IPwg9AWBFyQ3JNqwOXFNOSEhgbG9bfE2SdWRnGy83rHXnjhsYkbnSHDJqyu2dOmt1L5xhxPX2PBkvSppBE/37Mnxi09+X+DIObUEYxBesIcCNcdIbARx1FRiTo9MMsIQZG9ODxobkUhm2dgVkkgqUbxSyh/eZiailK1gaykgF19USU2t9osXGTNebxxeHbRoI5IZTULVcp83OjMEOQ2jMFWEyvlB9nq0HW3UCz6b9LRogWF0JiQEDT7owPiqLQTT9Spcu0pYIFN8sVD+MR6oQnw3JrUSBOnKSMrOGHPT/SKaQBCe10Yqgroy7IqO8EQY7zzOXp0bhMyZjn4pvDCFQ7eA45+H+LmPUoVltKGlerrlPc8x4UeTMwzXU16KH0x455S/ViSNNpvwhGP3bMP/AKHGMIU7wYTyAAAAAElFTkSuQmCC',
	},
	widget: {
		componentVersion: version,
		name,
	},
}
