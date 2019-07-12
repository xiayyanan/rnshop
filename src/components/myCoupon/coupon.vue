<template>
	<ul class="myCoupon">
		<li class="item" :class="{'fail':item.expired}" v-for="item in couponData">
			<img :src="item.thumb" class="thumb">
			<div class="content">
				<p class="bt">{{item.stores}}</p>
				<p class="time">{{item.time}}</p>
			</div>
			<div class="value">
				<img src="../../../static/images/expired.png" class="status" v-if="item.expired">
				<p class="money">¥<span class="unit">{{item.values}}</span></p>
				<p class="limit">满{{item.limit}}使用</p>
			</div>
		</li>
	</ul>
</template>

<script>
	export default {
		props: {
			couponData: {
				type: Array,
				default: function() {
					return []
				}
			}
		},
		data() {
			return {

			}
		}
	}
</script>
<style scoped="scoped">
	.myCoupon {
		margin: 0 .24rem .24rem .24rem;
	}
	
	.myCoupon .item {
		background: #fff;
		margin-top: .24rem;
		padding: .3rem 0 .3rem .3rem;
		position: relative;
		border-radius: 8px;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	
	.myCoupon .thumb {
		width: 1rem;
		height: 1rem;
		flex-shrink: 0;
		margin-right: .24rem;
		box-shadow: 0px 1px 10px rgba(0, 0, 0, .1);
	}
	
	.myCoupon .content {
		width: 100%;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.myCoupon .bt {
		height: .48rem;
		line-height: .48rem;
		font-size: .28rem;
	}
	
	.myCoupon .time {
		height: .4rem;
		line-height: .4rem;
		font-size: .24rem;
		color: #92999d;
	}
	
	.myCoupon .value {
		position: relative;
		flex-shrink: 0;
		width: 1.8rem;
		height: 1.6rem;
		padding: .3rem .3rem .3rem 0;
		margin: -.3rem 0;
		color: #FFF;
		text-align: right;
		border-radius: 0 8px 8px 0;
		font-size: .24rem;
		background: #ff2741;
		background-image: -webkit-linear-gradient(left, #ff8896, #ff2741);
		background: linear-gradient(to right, #ff8896, #ff2741);
	}
	
	.myCoupon .money {
		height: .48rem;
		line-height: .48rem;
		font-size: .3rem;
		margin-top: .06rem;
	}
	
	.myCoupon .money .unit {
		font-size: .36rem;
		margin-left: 2px;
	}
	
	.myCoupon .money .limit {
		font-size: .24rem;
		height: .36rem;
		line-height: .36rem;
	}
	
	.myCoupon .status {
		width: 1.2rem;
		height: 1.2rem;
		position: absolute;
		left: -.6rem;
		top: 50%;
		margin-top: -.6rem;
	}
	
	.myCoupon .value:before {
		content: '';
		position: absolute;
		width: 10px;
		height: 10px;
		background: #f5f8fa;
		left: -5px;
		top: -5px;
		border-radius: 10px;
	}
	
	.myCoupon .value:after {
		content: '';
		position: absolute;
		width: 10px;
		height: 10px;
		background: #f5f8fa;
		left: -5px;
		bottom: -5px;
		border-radius: 10px;
	}
	
	.myCoupon .fail .value {
		background: #d0cece;
		background-image: -webkit-linear-gradient(left, #f0f0f0, #d0cece);
		background: linear-gradient(to right, #f0f0f0, #d0cece);
	}
</style>