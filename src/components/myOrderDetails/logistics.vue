<template>
	<div class="order-logistics">
		<router-link to="/myOrder/myOrderLogistics" class="tap">
			<i class="iconfont icon-p-wlzt"></i>
			<div class="content">
				<p class="text">{{logisticsData.status}}</p>
				<p class="time">{{logisticsData.time}}</p>
			</div>
			<i class="iconfont icon-a12r"></i>
		</router-link>
	</div>
</template>

<script>
	export default {
		props: ['logisticsData']
	}
</script>

<style scoped="scoped">
	.order-logistics .tap {
		padding: .24rem;
		background: #fff;
		position: relative;
		display: block;
		color: #62666D;
		font-size: .24rem;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	
	.order-logistics .tap:after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 1px;
		background: #e5e8ea;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}
	
	.order-logistics:after {
		left: .24rem;
		right: .24rem;
	}
	
	.order-logistics .icon-p-wlzt {
		width: .6rem;
		font-size: .48rem;
		text-align: center;
		color: #4ecc80;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		justify-content: center;
		margin-right: .2rem;
		flex-shrink: 0;
	}
	
	.order-logistics .icon-a12r {
		width: 16px;
		font-size: 16px;
		margin-right: -2px;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		justify-content: center;
	}
	
	.order-logistics .content {
		width: 100%;
	}
	
	.order-logistics .text {
		height: .4rem;
		line-height: .4rem;
		font-size: .26rem;
		color: #4ecc80;
	}
	
	.order-logistics .time {
		line-height: .36rem;
		color: #92999d;
		margin-top: .1rem;
	}
</style>