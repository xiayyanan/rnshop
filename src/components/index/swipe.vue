<template>
	<div class="focus">
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="item in swipeData" :key="item.id">
				<router-link :to="item.pagePath">
					<img v-bind:src="item.imgs" class="mint-swipe-img">
				</router-link>
			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	import { Swipe, SwipeItem } from 'mint-ui';
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
	.focus {
		margin: -1.58rem .3rem .24rem;
		box-shadow: 0px 1px .3rem rgba(0, 0, 0, .15);
	}
	
	.focus .mint-swipe {
		height: 2.58rem;
	}
	
	.focus .mint-swipe-img {
		width: 100%;
	}
</style>
<style>
	.focus .mint-swipe-indicator {
		background: #fff;
		opacity: .75;
		margin: 0 6px;
	}
	
	.focus .mint-swipe-indicator.is-active {
		background: #ff2741;
		opacity: 1;
	}
</style>