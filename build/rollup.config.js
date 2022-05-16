const resolve = require('@rollup/plugin-node-resolve').default
const vue = require('rollup-plugin-vue')
const typescript = require('rollup-plugin-typescript2')
const babel = require('@rollup/plugin-babel').default
const { terser } = require('rollup-plugin-terser')
const commonjs = require('@rollup/plugin-commonjs')
const json = require('@rollup/plugin-json')
const { cwdResolve } = require('../utils')
const url = require('@rollup/plugin-url')
const postcss = require('rollup-plugin-postcss')
const autoprefixer = require('autoprefixer')
const postcssUrl = require('postcss-url')

exports.getRollupConfig = ({ entry, outputFile, compName, componentDir }) => {
	const inputOptions = {
		input: entry,
		plugins: [
			json(),
			commonjs(),
			resolve({
				extensions: ['.js', '.ts', '.jsx', '.tsx', '.vue'],
			}),
			postcss({
				inject: true,
				plugins: [
					autoprefixer({ add: true }),
					postcssUrl({
						basePath: componentDir,
						url: 'inline', // enable inline assets using base64 encoding
					}),
				],
			}),
			vue({
				exclude: /node_modules/,
				target: 'browser',
				css: false,
			}),
			url(),
			typescript({
				check: false,
				tsconfigOverride: {
					compilerOptions: {
						declaration: false,
					},
				},
				abortOnError: false,
			}),
			babel({
				babelHelpers: 'runtime',
				configFile: false,
				babelrc: false,
				exclude: /node_modules/,
				presets: ['@babel/preset-env','@vue/cli-plugin-babel/preset'],
				plugins: [['@babel/plugin-transform-runtime', { corejs: 3 }]],
				extensions: ['.vue', '.js'],
			}),
			terser(),
		],
		external: [
			'vue',
			'eslinkv-sdk',
			'@eslinkv/core',
			'@eslinkv/vue2',
			'echarts',
			'vue-router',
			'vue-class-component',
		],
	}
	const getOutFile = () => {
		return cwdResolve(outputFile)
	}
	const outOptions = {
		format: 'umd',
		name: `EslinkV-${compName}`,
		file: getOutFile(),
		globals: {
			'eslinkv-sdk': 'eslinkV',
			vue: 'Vue',
			'vue-router': 'VueRouter',
			'vue-class-component': 'VueClassComponent',
			echarts: 'echarts',
		},
	}

	return {
		inputOptions,
		outOptions,
	}
}
