<template lang="html">
	<footer class="rnui-footer">
		<div class="order-bar">
			<router-link to="/chat" class="obtn">
				<i class="iconfont icon-p-kefu"></i>
				<p>咨询</p>
			</router-link>
			<router-link to="/shop" class="obtn">
				<i class="iconfont icon-p-shop"></i>
				<p>店铺</p>
			</router-link>
			<div class="obtn" :class="{active:isColect}" @click="collect">
				<i class="iconfont icon-p-fav"></i>
				<p>收藏</p>
			</div>
			<span class="btn addCarBtn" @click="addcar">加入购物车</span>
			<span class="btn" @click="nowbuy">立即购买</span>
		</div>
	</footer>
</template>
<script>
	import Vue from 'vue'
	import sideslip from '@/components/rn-sideslip/rn-sideslip.js'
	Vue.use(sideslip);

	import { Toast } from 'mint-ui';
	import orderbox from './orderBox.vue'
	export default {
		props: ['baseData'],
		data() {
			return {
				opts: {
					isClose: false,
					direction: 'bottom',
					domStyle: {
						top: '3rem',
						bottom: "0px"
					},
					content: orderbox,
					cdata: {
						id: 0,
						otype: 'obuy',
						pdata: {}
					}
				}
			}
		},
		methods: {
			collect: function(e) {
				if(this.isColect) {
					this.$store.commit('SET_COLECT', false);
				} else {
					this.$store.commit('SET_COLECT', true);
					Toast({
						message: '收藏成功',
						iconClass: 'colect-yes'
					});
				}
			},
			addcar: function() {
				this.opts.cdata.otype = 'ocar';
				this.$mySideslip(this.opts);
			},
			nowbuy: function() {
				this.opts.cdata.otype = 'obuy';
				this.$mySideslip(this.opts);
			}
		},
		computed: {
			isColect: function() {
				return this.$store.state.detail.isColect
			}
		},
		mounted() {
			//console.log(this.$route);
		},
		watch: {
			baseData: function(newVal, oldVal) {
				this.opts.cdata.pdata = newVal;
			}
		}
	}
</script>

<style scoped="scoped">
	.order-bar {
		height: 49px;
		position: relative;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	
	.order-bar .obtn {
		width: 50px;
		height: 49px;
		display: block;
		text-align: center;
		color: #92999D;
		flex-shrink: 0;
	}
	
	.order-bar .obtn .iconfont {
		text-align: center;
		color: #5F646E;
		width: 30px;
		height: 30px;
		text-align: center;
		display: block;
		margin: 2px auto 0;
		line-height: 30px;
		font-size: 22px;
	}
	
	.order-bar .obtn.active {
		color: #ff2741;
	}
	
	.order-bar .obtn.active .icon-p-fav {
		color: #ff2741;
	}
	
	.order-bar .obtn.active .icon-p-fav:before {
		content: '\e810';
	}
	
	.order-bar .obtn p {
		line-height: 1;
		margin-top: 2px;
		font-size: 12px;
	}
	
	.order-bar .btn {
		width: 50%;
		height: 49px;
		border: none;
		padding: 0;
		line-height: 50px;
		text-align: center;
		font-size: .3rem;
		position: relative;
		z-index: 10;
		border-radius: 0;
	}
	
	.addCarBtn {
		background: #ff7e8d;
	}
</style>
<style>
	.colect-yes {
		font-family: "iconfont" !important;
		color: #ff2741;
		font-size: .8rem;
		line-height: 1;
	}
	
	.colect-yes:before {
		content: "\e82f";
	}
</style>