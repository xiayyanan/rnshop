<template>
	<div v-if="isShow">
		<div class="sideslip" id="sideslip" :class="className" v-bind:style="domStyle">
			<span class="close" v-if="isClose" @click="$closes"></span>
			<v-content :cdata="cdata"></v-content>
		</div>
		<div class="sideslipBg" @click="$closes" v-bind:style="bgStyle" :class="{active:isActive}"></div>
	</div>
</template>

<script>
	export default {
		props: {
			isShow: Boolean,
			isActive: Boolean,
			aniDelay: Number,
			className: String,
			isClose: {
				type: Boolean,
				default: false
			},
			direction: {
				type: String,
				default: 'left'
			},
			domStyle:String,
			bgStyle:String,
			content: String,
			cdata:Object
		}
	}
</script>

<style>
	.sideslipBg {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		visibility: hidden;
		opacity: 0;
		z-index: 999;
		background: rgba(0, 0, 0, .25);
		-webkit-transition: all 350ms cubic-bezier(.165, .84, .44, 1);
		transition: all 350ms cubic-bezier(.165, .84, .44, 1);
	}
	
	.sideslipBg.active {
		visibility: visible;
		opacity: 1;
	}
	
	.sideslip {
		position: fixed;
		z-index: 1000;
		opacity: 0;
		visibility: hidden;
		background: #FFF;
		-webkit-transition: all 350ms cubic-bezier(.165, .84, .44, 1);
		transition: all 350ms cubic-bezier(.165, .84, .44, 1);
		box-shadow: 0 -1px 40px rgba(0, 0, 0, .3);
	}
	
	.sideslipLeft {
		left: 0;
		top: 0;
		bottom: 0;
		width: 80%;
		-webkit-transform: translate3d(-100%, 0px, 0px);
		transform: translate3d(-100%, 0px, 0px);
	}
	
	.sideslipRight {
		right: 0;
		top: 0;
		bottom: 0;
		width: 80%;
		-webkit-transform: translate3d(100%, 0px, 0px);
		transform: translate3d(100%, 0px, 0px);
	}
	
	.sideslipTop {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background: #FFF;
		-webkit-transition: all 350ms cubic-bezier(.165, .84, .44, 1);
		transition: all 350ms cubic-bezier(.165, .84, .44, 1);
		-webkit-transform: translate3d(0px, -100%, 0px);
		transform: translate3d(0px, -100%, 0px);
	}
	
	.sideslipBottom {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: #fff;
		opacity: 0;
		visibility: hidden;
		box-shadow: 0 -1px 40px rgba(0, 0, 0, .3);
		-webkit-transform: translate3d(0px, 100%, 0px);
		transform: translate3d(0px, 100%, 0px);
	}
	
	.sideslip.active {
		opacity: 1;
		visibility: visible;
		-webkit-transform: translate3d(0px, 0px, 0px);
		transform: translate3d(0px, 0px, 0px);
	}
	
	.sideslip .close {
		width: 44px;
		height: 44px;
		text-align: center;
		line-height: 44px;
		font-size: 36px;
		display: block;
		position: absolute;
		font-family: "iconfont";
	}
	
	.sideslipLeft .close {
		right: -44px;
	}
	
	.sideslipRight .close {
		left: -44px;
	}
	
	.sideslipBottom .close {
		right: 0;
		top: -44px;
	}
	
	.sideslipTop .close {
		right: 0;
		bottom: -44px;
	}
	
	.sideslip .close:before {
		content: '\e830';
	}
</style>