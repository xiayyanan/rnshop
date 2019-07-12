<template>
	<div id="car">
		<div class="orderListTit mt10">订单信息</div>
		<ul class="orderList">
			<li class="item" v-for="item in orderData">
				<router-link :to="item.pagePath" class="tap">
					<div class="imgbox">
						<img class="lazy" :src="item.thumb">
					</div>
					<div class="content">
						<h2 class="name">{{item.name}}</h2>
						<p class="attr">{{item.attrs}}</p>
						<div class="price">
							<span class="unit red">¥{{item.price}}</span>
							<span class="num">×{{item.amount}}</span>
						</div>
					</div>
				</router-link>
			</li>
		</ul>
		<ul class="list-tab">
			<li class="item">
				<div class="tap">
					<span class="name">运费</span>
					<span class="dsp">快递 免邮</span>
				</div>
			</li>

			<li class="item">
				<div class="tap arrow">
					<span class="name">优惠券</span>
					<span class="btn couponUsed" @click="openCoupon">5张可用</span>
					<i class="iconfont icon-a12r"></i>
				</div>
			</li>

			<li class="item">
				<div class="tap">
					<span class="name">店铺优惠</span>
					<span class="dsp">省100元：组合优惠</span>
				</div>
			</li>
		</ul>

		<div class="order-count mt10">
			<div class="item">
				<span>商品金额：</span>
				<span class="money">¥8319.00</span>
			</div>
			<div class="item">
				<span>运费：</span>
				<span class="money">¥6.00</span>
			</div>
			<div class="item">
				<span>优惠券</span>
				<span class="money">-¥20.00</span>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import sideslip from '@/components/rn-sideslip/rn-sideslip.js'
	Vue.use(sideslip);
	import coupon from './coupon.vue'
	export default {
		props: ['orderData','couponData'],
		data() {
			return {
				opts: {
					isClose: false,
					direction: 'bottom',
					domStyle: {
						top: '2rem',
						bottom: "0px",
					},
					content: coupon,
					cdata: {}
				}
			}
		},
		methods:{
			openCoupon:function(){
				this.$mySideslip(this.opts);
			}
		},
		watch: {
			couponData: function(newVal, oldVal) {
				this.opts.cdata = newVal;
			}
		}
	}
</script>

<style scoped="scoped">
	@import "../../assets/css/list-tab.css";
	.orderListTit {
		line-height: .48rem;
		background: #FFF;
		padding: .2rem .24rem;
		font-size: .3rem;
	}
	
	.orderList {
		position: relative;
		background: #fff;
	}
	
	.orderList .item {
		background: #f5f5f5;
		margin-bottom: 1px;
	}
	
	.orderList .tap {
		padding: .24rem;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	
	.orderList .item:last-child {
		margin-bottom: 0;
	}
	
	.orderList .imgbox {
		width: 2rem;
		height: 2rem;
		overflow: hidden;
		flex-shrink: 0;
		margin-right: .24rem;
	}
	
	.orderList .content {
		width: 100%;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.orderList .name {
		font-weight: normal;
		line-height: .36rem;
		font-size: .28rem;
		display: -webkit-box;
		overflow: hidden;
		white-space: normal!important;
		text-overflow: ellipsis;
		word-wrap: break-word;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	
	.orderList .attr {
		height: .42rem;
		line-height: .42rem;
		color: #92999D;
	}
	
	.orderList .price {
		height: .42rem;
		line-height: .42rem;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	
	.orderList .price .unit {
		font-size: .3rem;
	}
	
	.orderList .price .num {
		font-size: .28rem;
	}
	
	.couponUsed {
		height: .48rem;
		border: none;
		line-height: .48rem;
		padding: 0 .2rem;
		font-size: .24rem;
		position: absolute;
		right: .64rem;
		top: 50%;
		margin-top: -.24rem;
		border-radius: .48rem;
	}
	
	.order-count {
		padding: .24rem;
		background: #FFF;
		position: relative;
	}
	
	.order-count .item {
		height: .6rem;
		line-height: .6rem;
		font-size: .28rem;
		color: #999;
	}
	
	.order-count .money {
		font-size: .3rem;
		float: right;
		color: #333;
	}
</style>