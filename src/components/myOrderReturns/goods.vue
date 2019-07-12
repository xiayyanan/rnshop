<template>
	<div class="orderServieItem">
		<router-link :to="goodsData.pagePath" class="tap">
			<div class="imgbox">
				<img :src="goodsData.thumb">
			</div>
			<div class="content">
				<h2 class="name">{{goodsData.name}}</h2>
				<p class="attr">{{goodsData.attr}}</p>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				goodsData: {
					thumb: require("../../assets/images/example/p1.jpg"),
					name: "Apple 苹果 iPhone X 64GB 移动联通电信4G手机 国内行货",
					attr: "机身颜色：颜色；存储容量：256GB",
					pagePath: "/detail"
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.orderServieItem {
		background: #fff;
	}
	
	.orderServieItem .tap {
		padding: .24rem;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	
	.orderServieItem .imgbox {
		width: 1.32rem;
		height: 1.32rem;
		border: #e5e8ea 1px solid;
		flex-shrink: 0;
		margin-right: .24rem;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		justify-content: center;
	}
	
	.orderServieItem .content {
		width: 100%;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.orderServieItem .name {
		font-weight: normal;
		height: .72rem;
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
	
	.orderServieItem .attr {
		height: .4rem;
		line-height: .4rem;
		font-size: .24rem;
		color: #92999D;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>