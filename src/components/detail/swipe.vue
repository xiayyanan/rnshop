<template>
	<mt-swipe :auto="4000">
		<mt-swipe-item v-for="(item,index) in swipeData" :key="item.id">
			<img v-bind:src="item.imgs" class="mint-swipe-img" preview="f1">
		</mt-swipe-item>
	</mt-swipe>
</template>

<script>
	import Vue from 'vue'
	import preview from 'vue-photo-preview'
	import 'vue-photo-preview/dist/skin.css'
	Vue.use(preview)

	export default {
		props: {
			swipeData: {
				type: Array,
				default: function() {
					return []
				}
			}
		}
	}
</script>
<style scoped="scoped">
	.mint-swipe {
		height: 100vw;
		margin-top: -44px;
	}
	
	.mint-swipe-img {
		width: 100%;
	}
</style>

<style>
	.mint-swipe-indicator {
		margin: 0 5px;
	}
	
	.mint-swipe-indicator.is-active {
		background: #ff2741;
		opacity: 1;
	}
</style>