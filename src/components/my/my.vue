<template>
	<div class="title">
		<div>{{msg}}</div>
		<v-tabBar></v-tabBar>
	</div>
</template>

<script>
	import tabBar from "../../common/tabBar.vue"
	export default {
		name: 'my',
		data() {
			return {
				msg: 'my'
			}
		},
		components: {
			'v-tabBar': tabBar
		}
	}
</script>

<style>
	.title {
		font-size: 36px;
	}
</style>