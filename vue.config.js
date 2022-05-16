const path = require('path')
const isProduction = process.env.NODE_ENV === 'production'
const needReport = false
function resolve(dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	pages: {
		index: {
			entry: 'src/main.ts',
			template: 'public/index.html',
			filename: 'index.html',
		},
	},
	transpileDependencies: ['@simonwep', 'swiper', 'dom7'],
	assetsDir: 'static',
	productionSourceMap: false,
	lintOnSave: false,
	devServer: {
		port: 3000,
		hot: true,
		open: true,
		disableHostCheck: true,
		proxy: {
			'^/etbc': {
				target: 'http://ebp-pc.hzrq.local:15003',
				headers: {
					Cookie: 'SESSION=96312c36-26ad-4f3f-8f25-cb690f3a9edb',
				},
				changeOrigin: true,
				pathRewrite: {
					'^/etbc': '/',
				},
			},
			'^/node': {
				// target: 'http://127.0.0.1:7001',
				target: 'http://eslinkv.eslink.cc',
				// target: 'http://192.168.1.44:2000',
				changeOrigin: true,
				pathRewrite: {
					'^/node': '/',
				},
			},
			'^/cdn': {
				// target: 'http://127.0.0.1:7001',
				target: 'http://eslinkv.eslink.cc',
				// target: 'http://192.168.1.44:2000',
				changeOrigin: true,
				// pathRewrite: {
				// 	'^/cdn': '/',
				// },
			},
			'^/server': {
				target: 'http://eslinkv.eslink.cc',
				// target: 'http://192.168.1.44:2000',
				changeOrigin: true,
				// pathRewrite: {
				// 	'^/server': '/',
				// },
			},
		},
	},
	css: {
		extract: false,
		sourceMap: false,
	},
	configureWebpack: config => {
		config.resolve.extensions = ['.js', '.vue', '.json', '.ts', '.tsx']
		config.externals = [
			{
				vue: 'Vue',
				// 'eslinkv-sdk': 'eslinkV',
				// '@eslinkv/core': 'eslinkV',
				// '@eslinkv/vue2': 'eslinkV',
				'vue-router': 'VueRouter',
				echarts: 'echarts',
				'vue-class-component': 'VueClassComponent',
			},
		]
	},
	chainWebpack: config => {
		config.resolve.alias.set('@utils', resolve('utils'))
		config.resolve.alias.set('@types', resolve('types'))
		config.module
			.rule('js')
			.include.add('/packages')
			.end()
			.use('babel')
			.loader('babel-loader')
			.tap(options => {
				// 修改它的选项...
				return options
			})
		config.optimization.splitChunks({ cacheGroups: {} })
		if (isProduction) {
			if (needReport) {
				config
					.plugin('webpack-bundle-analyzer')
					.use(
						// eslint-disable-next-line @typescript-eslint/no-var-requires
						require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
					)
					.end()
			}
			config.plugins.delete('prefetch')
		} else {
			config.resolve.symlinks(true)
		}
	},
}
