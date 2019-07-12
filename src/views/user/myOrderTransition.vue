<template>
	<transition :name="transitionName">
		<router-view class="child-view"></router-view>
	</transition>
</template>

<script>
	export default {
		data() {
			return {
				transitionName: 'slide-left',
				isBack: false
			}
		},
		//		beforeRouteUpdate(to, from, next) {
		//			this.isBack = this.$router.isBack == "undefined" ? true : this.$router.isBack;
		//			console.log(this.$router.isBack);
		//			if(this.$router.isBack) {
		//				this.transitionName = 'slide-right'
		//			} else {
		//				this.transitionName = 'slide-left'
		//			}
		//
		//			this.$router.isBack = false;
		//			next()
		//		}
		watch: {
			'$route' (to, from) {
				const toDepth = to.path.split('/').length
				const fromDepth = from.path.split('/').length
				this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
			}
		}
	}
</script>

<style scoped="scoped">
	.child-view {
		position: absolute;
		overflow: hidden;
		min-height: 100%;
		width: 100%;
		transition: all .5s cubic-bezier(.55, 0, .1, 1);
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