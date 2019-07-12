<template>
	<div id="goods">
		<div class="stores mt10">
			<i class="ishop"></i>
			<span class="bts">{{orderData.store}}</span>
			<span class="status red">{{orderData.status}}</span>
		</div>

		<div class="goodsBox">
			<div class="goodsItem" v-for="item in orderData.goodsData">
				<router-link to="/detail" class="tap">
					<div class="imgbox">
						<img class="thumb" :src="item.thumb">
					</div>
					<div class="content">
						<h2 class="name">{{item.name}}</h2>
						<p class="attr">{{item.attrs}}</p>
						<p class="pay">
							<span class="price">¥ <em class="unit">{{item.price}}</em></span>
							<span class="num">x<em class="cnum">{{item.amount}}</em></span>
						</p>
					</div>
				</router-link>
				<div class="btn-box">
					<router-link to="/myOrder/myOrderService" class="btn bbgf">申请售后</router-link>
				</div>
			</div>
		</div>

		<div class="order-list">
			<p class="text">
				<span class="bt">商品总价：</span>
				<span class="value">¥{{orderData.tmoney}}</span>
			</p>
			<p class="text">
				<span class="bt">运费(快递)：</span>
				<span class="value">¥{{orderData.freight}}</span>
			</p>
			<p class="text">
				<span class="bt">店铺优惠：</span>
				<span class="value">-¥{{orderData.offer}}</span>
			</p>
			<p class="text total">
				<span class="bt">订单总价：</span>
				<span class="value red">¥{{orderData.rmoney}}</span>
			</p>
		</div>

		<div class="order-list mt10">
			<p>订单编号：{{orderData.onumber}}</p>
			<p>创建时间：{{orderData.creatTime}}</p>
			<p>付款时间：{{orderData.payTime}}</p>
			<p>发货时间：{{orderData.shipTime}}</p>
			<router-link to="/myOrder/myOrderLogistics" class="btn bbgf">查看物流</router-link>
		</div>

	</div>
</template>

<script>
	export default {
		props: ['orderData']
	}
</script>

<style scoped="scoped">
	.stores {
		background: #fff;
		padding: .2rem .24rem;
		line-height: .4rem;
		font-size: .28rem;
		position: relative;
		overflow: hidden;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	
	.stores .bts {
		width: 100%;
	}
	
	.stores .status {
		flex-shrink: 0;
	}
	
	.stores .ishop {
		font-family: "iconfont";
		color: #5F646E;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		display: block;
		font-size: .4rem;
		line-height: .4rem;
		flex-shrink: 0;
		margin-right: .16rem;
	}
	
	.stores .ishop:before {
		content: "\e81a";
	}
	
	.goodsBox {
		background: #fff;
	}
	
	.goodsItem {
		background: #f5f5f5;
		margin-top: 1px;
	}
	
	.goodsItem:first-child {
		margin-top: 0;
	}
	
	.goodsItem .tap {
		padding: .24rem;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	
	.goodsItem .imgbox {
		width: 1.92rem;
		height: 1.92rem;
		flex-shrink: 0;
		margin-right: .2rem;
	}
	
	.goodsItem .content {
		width: 100%;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.goodsItem .name {
		font-weight: normal;
		height: .72rem;
		line-height: .36rem;
		font-size: .3rem;
		display: -webkit-box;
		overflow: hidden;
		white-space: normal!important;
		text-overflow: ellipsis;
		word-wrap: break-word;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	
	.goodsItem .attr {
		height: .4rem;
		line-height: .4rem;
		font-size: .24rem;
		color: #92999D;
		margin-top: .2rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.goodsItem .pay {
		height: .4rem;
		line-height: .4rem;
		font-size: .28rem;
		color: #92999D;
		display: flex;
		justify-content: space-between;
	}
	
	.goodsItem .price {
		color: #ff2741;
	}
	
	.goodsItem .unit {
		font-size: .3rem;
	}
	
	.goodsItem .num {
		color: #051b28;
	}
	
	.goodsItem .btn-box {
		padding: .2rem .24rem;
		font-size: 0;
		line-height: 0;
		text-align: right;
	}
	
	.goodsItem .btn-box {
		padding-top: 0;
	}
	
	.goodsItem .btn-box .btn {
		height: 28px;
		line-height: 26px;
		display: inline-block;
		vertical-align: middle;
		margin-left: .18rem;
		padding: 0 8px;
		min-width: 72px;
		font-size: .26rem;
	}
	
	.goodsItem .btn-box .btn.bbgf {
		color: #05080a;
		border: #b5b8ba 1px solid;
	}
	
	.order-list {
		padding: .24rem;
		font-size: .24rem;
		color: #92999d;
		background: #fff;
		position: relative;
	}
	
	.order-list .text {
		font-size: .26rem;
		line-height: .48rem;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	
	.order-list .value {
		color: #25282a;
	}
	
	.order-list .total {
		font-size: .3rem;
		color: #25282a;
	}
	
	.order-list .btn {
		height: 28px;
		line-height: 26px;
		display: block;
		padding: 0 8px;
		min-width: 72px;
		font-size: 13px;
		border: #bbbabb 1px solid;
		position: absolute;
		right: .32rem;
		top: 50%;
		margin-top: -14px;
	}
</style>