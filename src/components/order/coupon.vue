<template>
	<div id="address">
		<v-header :header="header">
			<span slot="rnui-opn" class="h-close" @click="$closes"></span>
		</v-header>
		<div class="rnui-footer">
			<button class="btn f-full-btn" @click="$closes">完成</button>
		</div>
		<div class="rnui-content">
			<ul class="coupon-list">
				<li class="item" v-for="(item,index) in cdata">
					<div class="content">
						<p class="price">
							<span>¥</span>
							<span class="unit">{{item.values}}</span>
							<span>店铺优惠券</span>
						</p>
						<p class="text">满{{item.limit}}使用</p>
						<p class="text">有效期 {{item.time}}</p>
					</div>
					<span class="opn" @click="onSelectedConpon(index)">立即使用</span>
					<img src="../../../static/images/received.png" v-if="item.received" class="received">
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import { Toast } from 'mint-ui';
	export default {
		components: {
			'v-header': header
		},
		props: ['cdata'],
		data() {
			return {
				header: {
					title: '优惠券',
					back: {
						isBack: false
					}
				}
			}
		},
		methods: {
			onSelectedConpon: function(i) {
				//console.log(this.cdata);
				this.cdata[i].received=true;
				Toast('恭喜,抢到了');
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	@import '../../assets/css/reset.less';
	.rnui-content{
		background: #fff;
	}
	.coupon-list {
		padding: 0 .24rem .24rem;
	}
	
	.coupon-list .item {
		height: 1.6rem;
		background: #fff1f1;
		color: #ff615e;
		margin-top: .24rem;
		position: relative;
		border-radius: .1rem;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
		overflow: hidden;
	}
	
	.coupon-list .content {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: .16rem .24rem;
	}
	
	.coupon-list .price {
		height: .52rem;
		line-height: .52rem;
		font-size: .28rem;
	}
	
	.coupon-list .price .unit {
		font-size: .48rem;
	}
	
	.coupon-list .text {
		height: .32rem;
		line-height: .32rem;
		padding-top: 0;
		font-size: .24rem;
	}
	
	.coupon-list .opn {
		width: 2.1rem;
		height: 1.6rem;
		display: block;
		text-align: center;
		line-height: 1.6rem;
		font-size: .28rem;
		z-index: 1;
		flex-shrink: 0;
		position: relative;
		z-index: 2;
	}
	.coupon-list .opn:after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		border-left:#ffcdcd 1px dashed;
		.fz(border-left-width,1)
	}
	
	.coupon-list .item:after {
		content: '';
		width: 13px;
		height: 12px;
		background: #FFF;
		position: absolute;
		bottom: -5px;
		right: 2.1rem;
		-webkit-border-radius: 11px;
		border-radius: 11px;
		z-index: 2;
		margin-right: -6px;
	}
	
	.coupon-list .item:before {
		content: '';
		width: 13px;
		height: 12px;
		background: #FFF;
		position: absolute;
		top: -5px;
		right: 2.1rem;
		-webkit-border-radius: 11px;
		border-radius: 11px;
		z-index: 3;
		margin-right: -6px;
	}
	.coupon-list .received{
		width: 1rem;
		height: 1rem;
		position: absolute;
		right: -.1rem;
		bottom:-.2rem;
		z-index: 1;
	}
</style>