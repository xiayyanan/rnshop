<template>
	<div class="show-info">
		<div class="hd">
			<h2 class="name">{{baseData.name}}</h2>
			<span class="share" @click="share"></span>
		</div>
		<div class="price">
			<span class="unit red">¥</span>
			<span class="nPrice red">{{baseData.nPrice}}</span>
			<span class="oPrice">¥{{baseData.oPrice}}</span>
			<span class="num">月销量：{{baseData.vSales}}</span>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import sideslips from '@/components/rn-sideslip/rn-sideslip.js'
	Vue.use(sideslips);
	import share from './share.vue'
	export default {
		props: {
			baseData: {
				type: Object,
				default: function() {
					return {}
				}
			}
		},
		data() {
			return {
				opts: {
					isClose: false,
					direction: 'bottom',
					domStyle: {
						background: "rgba(255,255,255,.9)"
					},
					content: share
				}
			}
		},
		mounted() {
			
		},
		methods: {
			share: function() {
				this.$mySideslip(this.opts);
			}
		}
	}
</script>
<style scoped="scoped">
	.show-info {
		padding: .3rem;
		background: #fff;
	}
	
	.show-info .hd {
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	
	.show-info .name {
		font-size: .3rem;
		line-height: .42rem;
	}
	
	.show-info .share {
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex-shrink: 0;
		font-size: .42rem;
		line-height: .56rem;
		margin-left: .2rem;
		color: #55585a;
		font-family: "iconfont";
	}
	
	.show-info .share:before {
		content: '\e811';
	}
	
	.show-info .dsp {
		color: #62666d;
		line-height: 22px;
		margin: 0 -15px;
		padding: 10px 15px;
		font-size: 14px;
		position: relative;
	}
	
	.show-info .price {
		height: .48rem;
		line-height: .48rem;
		margin-top: .24rem;
		font-size: .24rem;
		overflow: hidden;
		color: #92999D;
	}
	
	.show-info .unit {
		font-size: .3rem;
	}
	
	.show-info .nPrice {
		font-size: .48rem;
	}
	
	.show-info .oPrice {
		font-size: .24rem;
		margin-left: .24rem;
		text-decoration: line-through;
	}
	
	.show-info .num {
		float: right;
	}
</style>