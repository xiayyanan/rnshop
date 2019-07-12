<template>
	<div class="index">
		<v-header :header="header"></v-header>
		<v-tabBar></v-tabBar>
		<div class="rnui-content">
			<mt-swipe :auto="4000">
				<mt-swipe-item v-for="item in indexData.swipeData" :key="item.id">
					<router-link :to="item.pagePath">
						<img v-bind:src="item.imgs" class="mint-swipe-img">
					</router-link>
				</mt-swipe-item>
			</mt-swipe>

			<ul class="idxNav clearfix">
				<li class="item" v-for="item in indexData.idxNav" :key="item.id">
					<router-link :to="item.pagePath" class="tap">
						<img v-bind:src="item.icon" class="img-icon">
						<p class="name">{{item.name}}</p>
					</router-link>
				</li>
			</ul>

			<ul class="plist">
				<li class="item" v-for="item in indexData.goodsData" :key="item.id">
					<router-link :to="item.pagePath" class="tap">
						<img v-bind:src="item.thumb" class="thumb">
						<div class="content">
							<h3 class="name">{{item.name}}</h3>
							<p class="price">
								<span class="unit red">¥</span>
								<span class="nPrice red">{{item.nPrice}}</span>
								<span class="oPrice">¥{{item.oPrice}}</span>
							</p>
							<p class="volume">月销{{item.sales}}笔</p>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import header from "../../common/header.vue"
	import tabBar from "../../tabBar/tabBar.vue"
	import index from '@/http/mock.js' //模拟数据
	export default {
		data() {
			return {
				header: {
					title: '首页',
					back: {
						isBack: false
					}
				},
				indexData: []
			}
		},
		
		components: {
			'v-header': header, 
			'v-tabBar': tabBar
		},
		created() {
			this.$api({
				method: 'post',
				url: '/index'
			}).then((res) => {
				this.indexData = res.data.index
				console.log(res.data.index);
			}).catch((error) => {
				console.log(error)
			})
		}
	}
</script>

<style>
	@import '../../assets/css/plist.css';
	.mint-swipe {
		height: 2.8rem;
	}
	
	.mint-swipe-img {
		width: 100%;
	}
	
	.mint-swipe-indicator {
		background: #fff;
		opacity: .75;
		margin: 0 6px;
	}
	
	.mint-swipe-indicator.is-active {
		background: #ff2741;
		opacity: 1;
	}
	
	.idxNav {
		display: flex;
		flex-wrap: nowrap;
		background: #fff;
	}
	
	.idxNav .item {
		width: 20%;
	}
	
	.idxNav .img-icon {
		width: .6rem;
		height: .6rem;
		margin: 0 auto;
	}
	
	.idxNav .tap {
		padding: .4rem 0;
		color: #65686a;
	}
	
	.idxNav .name {
		line-height: 1;
		font-size: .24rem;
		text-align: center;
		margin-top: .24rem;
	}
</style>