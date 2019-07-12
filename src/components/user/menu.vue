<template>
	<div id="menu">
		<div class="userOrder">
			<router-link to="/myOrder" class="userTit">
				<span class="name">我的订单</span>
				<span class="view">查看全部 </span>
			</router-link>
			<ul class="orderNav">
				<li class="item" v-for="item in orderNav">
					<router-link :to="item.pagePath" class="tap">
						<span class="num" v-if="item.amount">{{item.amount}}</span>
						<img :src="item.iconPath" class="img-icon">
						<p class="name">{{item.name}}</p>
					</router-link>
				</li>
			</ul>
		</div>

		<div class="userOrder mt10">
			<router-link to="/myCollect" class="userTit">
				<span class="name">我的收藏<em class="c2">89</em></span>
				<span class="view">查看全部 </span>
			</router-link>
			<ul class="collectList">
				<li class="item" v-for="item in collectData">
					<router-link :to="item.pagePath" class="tap">
						<img :src="item.thumb" class="thumb">
						<p class="price c5">¥{{item.price}}</p>
					</router-link>
				</li>
			</ul>
		</div>

		<ul class="user-nav mt10">
			<li class="item" v-for="item in userNav">
				<router-link :to="item.pagePath" class="tap">
					<img :src="item.iconPath" class="img-icon">
					<p class="name">{{item.name}}</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: {
			collectData: {
				type: Array,
				default: function() {
					return []
				}
			}
		},
		data() {
			return {
				orderNav: [{
						pagePath: "/myOrder",
						name: "待付款",
						iconPath: "../../../static/images/dfk.png"
					},
					{
						pagePath: "/myOrder",
						name: "待发货",
						iconPath: "../../../static/images/dfh.png"
					},
					{
						pagePath: "/myOrder",
						name: "待收货",
						iconPath: "../../../static/images/dsh.png",
						amount: "18"
					},
					{
						pagePath: "/myOrder",
						name: "待评价",
						iconPath: "../../../static/images/dpj.png",
						amount: "7"
					},
					{
						pagePath: "/myRetreat",
						name: "退款售后",
						iconPath: "../../../static/images/tksh.png"
					}
				],
				userNav: [{
						pagePath: "/myAddress",
						name: "收货地址",
						iconPath: "../../../static/images/user-nav-1.png"
					},
					{
						pagePath: "/myFunds",
						name: "我的钱包",
						iconPath: "../../../static/images/user-nav-2.png"
					},
					{
						pagePath: "/mySpread",
						name: "我的分销",
						iconPath: "../../../static/images/user-nav-3.png"
					},
					{
						pagePath: "/feedback",
						name: "意见反馈",
						iconPath: "../../../static/images/user-nav-4.png"
					}
				]
			}
		},
		mounted() {

		},
		methods: {

		}
	}
</script>
<style scoped="scoped">
	.userTit {
		height: .88rem;
		line-height: .88rem;
		display: flex;
		justify-content: space-between;
	}
	
	.userTit .name {
		font-size: .32rem;
		font-weight: bold;
	}
	
	.userTit .view {
		color: #92999d;
		font-size: .26rem;
		position: relative;
		padding-right: .24rem;
	}
	
	.userTit .view:after {
		font-family: "iconfont";
		width: 16px;
		height: 16px;
		font-size: 16px;
		line-height: 16px;
		display: block;
		position: absolute;
		right: -4px;
		top: 50%;
		margin-top: -8px;
		content: "\e7af";
	}
	
	.userOrder {
		background: #FFF;
		position: relative;
		padding: 0 .24rem .24rem;
	}
	
	.userOrder:after {
		left: .24rem;
		right: .24rem;
	}
	
	.orderNav {
		display: flex;
		justify-content: space-between;
	}
	
	.orderNav .img-icon {
		width: .6rem;
		height: .6rem;
		margin: 0 auto;
	}
	
	.orderNav .tap {
		color: #62666D;
		padding: .2rem 0;
		text-align: center;
	}
	
	.orderNav .name {
		line-height: 1;
		font-size: .24rem;
		margin-top: .18rem;
	}
	
	.orderNav .num {
		height: 18px;
		width: 18px;
		line-height: 16px;
		border-radius: 18px;
		text-align: center;
		color: #cc9a6a;
		border: #cc9a6a 1px solid;
		background: #fff;
		position: absolute;
		top: .24rem;
		left: 50%;
		font-size: .2rem;
	}
	
	.user-nav {
		background: #FFF;
		position: relative;
		overflow: hidden;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	
	.user-nav .item {
		width: 25%;
	}
	
	.user-nav .tap {
		padding: .4rem 0;
		text-align: center;
	}
	
	.user-nav .img-icon {
		width: .6rem;
		height: .6rem;
		margin: 0 auto;
	}
	
	.user-nav .name {
		display: block;
		font-size: 0.24rem;
		line-height: 1;
		margin-top: .24rem;
		color: #62666D;
	}
	.collectList{
		display: flex;
		justify-content: space-between;
	}
	.collectList .item {
		margin-top: .2rem;
		text-align: center;
	}
	
	.collectList .thumb {
		width: 1.2rem;
		margin: 0 auto;
	}
	
	.collectList .name {
		height: .36rem;
		line-height: .36rem;
		font-size: .24rem;
		margin-top: .24rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.collectList .price {
		height: .36rem;
		font-size: .24rem;
		line-height: .36rem;
		margin-top: .24rem;
	}
</style>