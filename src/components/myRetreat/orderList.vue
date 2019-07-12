<template>
	<div id="myRetreat">
		<ul class="myOrder clearfix">
			<li class="item" v-for="item in myRetreatData">
				<div class="stores">
					<i class="ishop"></i>
					<span class="bts">{{item.store}}</span>
					<span class="status red">{{item.type}}</span>
					<span class="status red">{{item.status}}</span>
				</div>
				<div class="goodsBox">
					<div class="goodsItem">
						<router-link to="/detail" class="tap">
							<div class="imgbox">
								<img class="thumb" :src="item.goodsData.thumb">
							</div>
							<div class="content">
								<h2 class="name">{{item.goodsData.name}}</h2>
								<p class="attr">{{item.goodsData.attrs}}</p>
								<p class="pay">
									<span class="price">¥ <em class="unit">{{item.goodsData.price}}</em></span>
									<span class="num">x<em class="cnum">{{item.goodsData.amount}}</em></span>
								</p>
							</div>
						</router-link>
					</div>
				</div>
				<div class="btn-box">
					<router-link to="/myRetreat/myRetreatDetails" class="btn btn-outlined">订单详情</router-link>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: {
			myRetreatData: {
				type: Array,
				default: function() {
					return []
				}
			}
		},
		data() {
			return {

			}
		},
		mounted() {

		},
		methods: {

		}
	}
</script>
<style scoped="scoped">
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
</style>