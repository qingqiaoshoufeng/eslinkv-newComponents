import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

const routes: Array<RouteConfig> = []
const context = require.context('/', true, /\.(route.js)$/)

context.keys().forEach(name => {
	routes.push(context(name).default)
})
Vue.use(VueRouter)

const router: VueRouter = new VueRouter({
	mode: 'history',
	routes,
})

export default router
