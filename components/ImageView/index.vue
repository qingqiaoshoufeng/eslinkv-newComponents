<template>
	<viewer :options="option" :images="images" @inited="inited" class="viewer" ref="viewer">
		<template slot-scope="scope">
			<img v-for="src in scope.images" v-show="showImage" :src="src" :key="src" />
		</template>
	</viewer>
</template>

<script>
import 'viewerjs/dist/viewer.css'
import { component as Viewer } from "v-viewer"

export default {
	name: 'ImageView',
	props: {
		images: {
			type: Array,
			default() {
				return []
			},
		},
		option: {
			type: Object,
			default() {
				return {}
			},
		},
		showImage: {
			type: Boolean,
			default: true,
		},
	},
	data() {
		return {
			$viewer: null,
		}
	},
	methods: {
		inited(viewer) {
			this.$viewer = viewer
		},
		show() {
			this.$viewer && this.$viewer.show()
		},
	},
	components: {
		Viewer,
	},
}
</script>

<style lang="scss" scoped>
img {
	width: 100%;
	height: 100%;
}
</style>
