import custom from './custom'
import { version, type } from './index.component'

const install = function (Vue) {
	if (install.installed) return
	install.installed = true
	Vue.component(`market-${type}-${version}`, custom)
}

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

export default {
	install,
	custom,
}
