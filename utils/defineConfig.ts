export interface layoutType {
	width: number
	height: number
	position: 'relative'
}
export interface customConfigItemType {
	prop: string
	label: string
	children?: Record<string, string>[]
	type:
		| 'func-color'
		| 'func-group'
		| 'func-image'
		| 'func-image'
		| 'func-input'
		| 'func-number'
		| 'func-select'
		| 'func-switch'
		| 'func-text'
		| 'func-video'
	defaultValue: any
}
export type configParamsType = {
	name: string
	type: string
	version: string
	customConfigList: customConfigItemType[]
	layout: layoutType
	customData: string
}

export type configResponseType = {
	name: string
	type: string
	version: string
	customConfig: customConfigItemType[]
	value: any
}

/**
 * @param name 组件中文名唯一
 * @param type 组件名唯一
 * @param version  组件版本
 * @param customConfigList 右侧列表配置项
 * @param layout 组件布局（宽、高、定位方式）
 * @param customData 自定义数据配置项
 * @description 返回参数:{
 *  @description name 组件中文名唯一
 *  @description type 组件名唯一
 *  @description version  组件版本
 *  @description customConfigList 右侧列表配置项
 *  @description value 自定义数据
 *  @description}
 */
export default function defineConfig(params: configParamsType): configResponseType {
	const { name, type, version, customConfigList, layout, customData } = params
	console.log(name, type, version, customConfigList, layout)
	const value = {
		api: {
			data: customData,
		},
		layout: {
			size: {
				height: layout.height,
				width: layout.width,
			},
			position: {
				value: layout.position,
			},
		},
		config: customConfigList.reduce((current, item) => {
			const { prop, defaultValue } = item
			current[prop] = defaultValue
			return current
		}, {} as any),
	}
	// const
	return {
		name,
		type,
		version,
		customConfig: customConfigList,
		value,
	}
}
