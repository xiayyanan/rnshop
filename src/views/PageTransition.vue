<template>
	<transition :name="transitionName">
		<router-view class="child-view"></router-view>
	</transition>
</template>

<script>
	import header from "@/common/header.vue"
	export default {
		components: {
			'v-header': header
		},
		data() {
			return {
				transitionName: 'slide-left'
			}
		},
		beforeRouteUpdate(to, from, next) {
			let isBack = this.$router.isBack;
			//console.log(isBack);
			if(isBack) {
				this.transitionName = 'slide-right'
			} else {
				this.transitionName = 'slide-left'
			}
			this.$router.isBack = false
			next()
		}
	}
</script>

<style scoped="scoped">
	.child-view {
		position: absolute;
		overflow: hidden;
		min-height: 100%;
		width: 100%;
		transition: all .8s cubic-bezier(.55, 0, .1, 1);
	}
	
	.slide-left-enter,
	.slide-right-leave-active {
		opacity: 0;
		-webkit-transform: translate(50px, 0);
		transform: translate(50px, 0);
	}
	
	.slide-left-leave-active,
	.slide-right-enter {
		opacity: 0;
		-webkit-transform: translate(-50px, 0);
		transform: translate(-50px, 0);
	}
</style>