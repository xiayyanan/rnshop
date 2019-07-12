<template lang="html">
	<header class="rnui-header" :class="{'rnui-header-red':header.isRed,'rnui-header-transparent':header.isTrans}">
		<a v-if="header.back.isBack==true" class="rnui-header-back" @click="goback"></a>
		<h1 v-if="header.title" class="rnui-header-title">{{header.title}}</h1>
		<slot name="rnui-opn"></slot>
	</header>
</template>

<script>
	export default {
		props: {
			header: {
				title: String,
				back: {
					isBack: Boolean
				},
				isRed: {
					type: Boolean,
					default: false
				},
				isTrans:{
					type: Boolean,
					default: false
				}
			}
		},
		methods: {
			goback() {
				this.$router.goBack()
			}
		}
	}
</script>

<style scoped="scoped">
	.rnui-header {
		height: 44px;
		background: #fff;
		color: #000000;
		position: fixed;
		z-index: 200;
		left: 0;
		right: 0;
		top: 0;
	}
	
	.rnui-header-title {
		position: absolute;
		z-index: 1;
		left: 44px;
		right: 44px;
		height: 44px;
		line-height: 44px;
		text-align: center;
		font-size: 18px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.rnui-header-back {
		text-align: center;
		font-family: "iconfont";
		width: 44px;
		height: 44px;
		line-height: 44px;
		flex-shrink: 0;
		font-size: 22px;
		position: absolute;
		z-index: 11;
		left: 0;
		top: 0;
	}
	
	.rnui-header-back:before {
		content: '\e7c4';
	}
	
	.rnui-header-opn {
		height: 44px;
		line-height: 44px;
		padding: 0 .2rem;
		flex-shrink: 0;
		font-size: .28rem;
		position: absolute;
		z-index: 12;
		right: 0;
		top: 0;
		color: #62666d;
	}
	
	.edit-text {
		padding: 0 10px;
		font-size: .3rem;
		height: 44px;
		line-height: 44px;
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		color: #535258;
		z-index: 6;
	}
	
	.h-close {
		width: 44px;
		height: 44px;
		text-align: center;
		line-height: 44px;
		font-size: 32px;
		color: #333;
		display: block;
		text-align: center;
		position: absolute;
		right: 0;
		top: 0;
		z-index: 3;
		font-family: "iconfont" !important;
	}
	
	.h-close:before {
		content: "\e830";
	}
	
	.rnui-header-red {
		background: #ff2741;
	}
	.rnui-header-red .rnui-header-title{
		color: #fff;
	}
	.rnui-header-red .rnui-header-back{
		color: #fff;
	}
	.rnui-header-transparent{
		background:rgba(255,39,65,0);
	}
	.rnui-header-transparent .rnui-header-back{
		width: 32px ;
		height: 32px;
		text-align: center;
		line-height: 32px;
		background: rgba(0,0,0,.75);
		color: #fff;
		left: 6px;
		top: 6px;
		border-radius:32px ;
	}
	.rnui-header-transparent .rnui-header-title{
		background: none;
		color: rgba(255,255,255,0);
	}
</style>