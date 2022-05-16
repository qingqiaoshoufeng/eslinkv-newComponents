
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Message, Modal } from 'view-design'
import '@eslinkv/core/lib/core.css'
import '@eslinkv/vue2/lib/v2.css'

import { Editor } from '@eslinkv/core'
const editor = Editor.Instance()
const components: Record<string, unknown> = {}
const snapshots: Record<string, unknown> = {}
const widgetsObject: {
	componentId: number
	componentConfig: Record<string, unknown>
	componentTitle: string
	componentEnTitle: string
	componentAvatar: string
	market: boolean
}[] = []
const widgetsObject1: {
	componentId: number
	componentConfig: Record<string, unknown>
	componentTitle: string
	componentEnTitle: string
	componentAvatar: string
	market: boolean
}[] = []
const conf = require.context('../packages', true, /\.(component.ts)$/)
const component = require.context('../packages', true, /custom\.(vue)$/)
const snapshot = require.context('../packages', true, /snapshot\.(jpg|png)$/)
snapshot.keys().forEach((name: string) => {
	const title = name.split('/')[1]
	snapshots[title] = snapshot(name)
})
component.keys().forEach(name => {
	const title = name.split('/')[1]
	components[title] = component(name).default
})
conf.keys().forEach(name => {
	const typeTwo = name.split('/')[1]
	const componentConfig = { ...conf(name).value, componentEnTitle: typeTwo }
	const componentAvatar = snapshots[typeTwo]
	if (componentConfig) {
		widgetsObject.push({
			componentId: Date.now(),
			componentConfig,
			componentTitle: typeTwo.replace('hangran-', ''),
			componentEnTitle: typeTwo,
			componentAvatar: componentAvatar as string,
			market: false,
		})
		if (typeTwo.indexOf('hangran-three') > -1) {
			widgetsObject1.push({
				componentId: Date.now(),
				componentConfig,
				componentTitle: typeTwo.replace('hangran-', ''),
				componentEnTitle: typeTwo,
				componentAvatar: componentAvatar as string,
				market: false,
			})
		}
	}
})
const obj = {
	'e.g': {
		componentTypeName: 'e.g',
		componentTypeEnName: 'e.g',
		componentTypeId: 'e.g',
		market: false,
		children: [
			{
				componentTypeName: 'typeOne',
				componentTypeEnName: 'typeOne',
				componentTypeId: 'typeOne',
				market: false,
				children: widgetsObject,
			},
		],
	},
	'hr3': {
		componentTypeName: 'hr3',
		componentTypeEnName: 'hr3',
		componentTypeId: 'hr3',
		market: false,
		children: [
			{
				componentTypeName: 'hr-three',
				componentTypeEnName: 'hr-three',
				componentTypeId: 'hr-three',
				market: false,
				children: widgetsObject1,
			},
		],
	},
}
editor.setLocalComponents(components)
editor.setLocalWidgets(obj)

Vue.config.productionTip = false
Vue.prototype.$Message = Message
Vue.prototype.$Modal = Modal

new Vue({
	router,
	render: h => h(App),
}).$mount('#example')
