<template>
	<div id="myRetreat">
		<ul class="list-tab mt10">
			<li class="item">
				<div class="tap">
					<span class="name">退款总金额</span>
					<span class="dsp red">¥{{detailsData.money}}</span>
				</div>
			</li>
		</ul>

		<ul class="myOrder clearfix">
			<li class="item">
				<div class="stores">
					<span class="bts">退款信息</span>
					<span class="status red">{{detailsData.status}}</span>
				</div>
				<div class="goodsBox">
					<div class="goodsItem">
						<router-link to="/detail" class="tap">
							<div class="imgbox">
								<img class="thumb" :src="detailsData.goodsData.thumb">
							</div>
							<div class="content">
								<h2 class="name">{{detailsData.goodsData.name}}</h2>
								<p class="attr">{{detailsData.goodsData.attrs}}</p>
								<p class="pay">
									<span class="price">¥ <em class="unit">{{detailsData.goodsData.price}}</em></span>
									<span class="num">x<em class="cnum">{{detailsData.goodsData.amount}}</em></span>
								</p>
							</div>
						</router-link>
					</div>
				</div>
			</li>
		</ul>
		<div class="order-list">
			<p class="text">
				<span class="bt">退款原因</span>
				<span class="value">{{detailsData.reason}}</span>
			</p>
			<p class="text">
				<span class="bt">退款金额</span>
				<span class="value red">¥{{detailsData.money}}</span>
			</p>
			<p class="text">
				<span class="bt">申请时间</span>
				<span class="value">{{detailsData.applyTime}}</span>
			</p>
			<p class="text">
				<span class="bt">退款编号</span>
				<span class="value">{{detailsData.numbers}}</span>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				detailsData: {
					money: "8319.00",
					reason: "多拍/拍错/不想要",
					status:"退款成功",
					applyTime: "2018-12-26 21:44:56",
					numbers: "6843536476035192",
					goodsData: {
						pagePath: "/detail",
						thumb: require("../../assets/images/example/p3.jpg"),
						name: "Apple/苹果 iPhone 8 Plus 苹果8plus 64G/256G",
						attrs: '机身颜色：颜色；存储容量：256GB',
						amount: 1,
						price: "6630.00"
					}
				}
			}
		},
		mounted() {

		},
		methods: {

		}
	}
</script>
<style scoped="scoped">
	@import '../../assets/css/list-tab.css';
	.myOrder .item {
		margin-top: .24rem;
		background: #FFF;
		position: relative;
	}
	
	.myOrder .stores {
		padding: .2rem .24rem;
		line-height: .4rem;
		font-size: .28rem;
		position: relative;
		overflow: hidden;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	
	.myOrder .stores .bts {
		width: 100%;
	}
	
	.myOrder .stores .status {
		flex-shrink: 0;
		margin-left: .2rem;
	}
	
	.myOrder .stores .ishop {
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
	
	.myOrder .stores .ishop:before {
		content: "\e81a";
	}
	
	.myOrder .goodsItem {
		background: #f5f5f5;
		margin-top: 1px;
	}
	
	.myOrder .goodsItem:first-child {
		margin-top: 0;
	}
	
	.myOrder .goodsItem .tap {
		padding: .24rem;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	
	.myOrder .goodsItem .imgbox {
		width: 1.92rem;
		height: 1.92rem;
		flex-shrink: 0;
		margin-right: .2rem;
	}
	
	.myOrder .goodsItem .content {
		width: 100%;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.myOrder .goodsItem .name {
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
	
	.myOrder .goodsItem .attr {
		height: .4rem;
		line-height: .4rem;
		font-size: .24rem;
		color: #92999D;
		margin-top: .2rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.myOrder .goodsItem .pay {
		height: .4rem;
		line-height: .4rem;
		font-size: .24rem;
		color: #92999D;
	}
	
	.myOrder .goodsItem .price {
		float: left;
		color: #ff2741;
	}
	
	.myOrder .goodsItem .unit {
		font-size: .3rem;
	}
	
	.myOrder .goodsItem .num {
		float: right;
		color: #051b28;
	}
	
	.myOrder .counts {
		line-height: .4rem;
		overflow: hidden;
		padding: .2rem .24rem;
		text-align: right;
		color: #62666d;
		font-size: .26rem;
		position: relative;
	}
	
	.myOrder .counts:after {
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
	
	.myOrder .btn-box {
		padding: .2rem .24rem;
		font-size: 0;
		line-height: 0;
		text-align: right;
	}
	
	.myOrder .goodsItem .btn-box {
		padding-top: 0;
	}
	
	.myOrder .btn-box .btn {
		height: 28px;
		line-height: 26px;
		display: inline-block;
		vertical-align: middle;
		margin-left: .18rem;
		padding: 0 8px;
		min-width: 72px;
		font-size: .26rem;
	}
	
	.myOrder .btn-box .btn.bbgf {
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
		line-height: .52rem;
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
</style>