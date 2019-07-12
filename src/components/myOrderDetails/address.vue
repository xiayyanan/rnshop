<template>
	<div class="order-addr">
		<i class="iconfont icon-p-shdz"></i>
		<div class="content">
			<p class="hd">
				<span>{{addressData.name}}</span>
				<span>{{addressData.phone}}</span>
			</p>
			<p class="info">{{addressData.info}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['addressData']
	}
</script>

<style scoped="scoped">
	.order-addr {
		padding: .24rem;
		background: #fff;
		position: relative;
		display: block;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	
	.order-addr:after {
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
	
	.order-addr .icon-p-shdz {
		width: .6rem;
		font-size: .48rem;
		text-align: center;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		justify-content: center;
		margin-right: .2rem;
		color: #60646d;
		flex-shrink: 0;
	}
	
	.order-addr .hd {
		color: #62666D;
		height: .4rem;
		line-height: .4rem;
		font-size: .26rem;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	
	.order-addr .info {
		line-height: .36rem;
		font-size: .26rem;
		color: #92999D;
		margin-top: .1rem;
	}
</style>