<template lang="html">
	<div class="index">
		<v-header :header="header">
			<span slot="rnui-opn" class="h-saoma"></span>
			<router-link to="/message" slot="rnui-opn" class="h-msg">
				<span class="num">1</span>
			</router-link>
			<div slot="rnui-opn" class="search">
				<div class="input-box">
					<i class="i-sousuo"></i>
					<input type="search" class="txt" placeholder="iphoneX 256GB">
				</div>
			</div>
		</v-header>
		<v-tabBar></v-tabBar>
		<div class="rnui-content">
			<v-top :idxNavData="indexData.idxNav"></v-top>
			<v-swipe :swipeData="indexData.swipeData"></v-swipe>
			<v-goods :goodsData="indexData.goodsData"></v-goods>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import tabBar from "@/common/tabBar.vue"
	import top from "@/components/index/top.vue"
	import swipe from "@/components/index/swipe.vue"
	import goods from "@/components/index/goods.vue"
	import index from '@/http/mock.js' //模拟数据
	export default {
		components: {
			'v-header': header,
			'v-tabBar': tabBar,
			'v-top': top,
			'v-swipe': swipe,
			'v-goods': goods
		},
		data() {
			return {
				header: {
					back: {
						isBack: false
					},
					isRed: true
				},
				indexData: [],
				loading: true
			}
		},

		beforeCreate() {
			this.$api({
				method: 'post',
				url: '/index'
			}).then((response) => {
				this.indexData = response.data.index;
			}).catch(function(error) {
				console.log(error);
			})
		}
	}
</script>
<style scoped="scoped">
	@import '../assets/css/search.css';
	.search .txt {
		background: #fff;
		color: #a6a6a6;
		border-radius: 0;
	}
	
	.search .txt::-webkit-input-placeholder {
		color: #a6a6a6;
	}
	
	.search .i-sousuo {
		font-size: 18px;
		color: #a6a6a6;
	}
	
	/*.rnui-header-red {
		background: rgba(255, 39, 65, 0);
	}*/
	
	.h-saoma {
		width: 44px;
		height: 44px;
		line-height: 44px;
		font-size: 24px;
		text-align: center;
		display: block;
		position: absolute;
		color: #FFF;
		left: 0;
		top: 0;
		z-index: 5;
		font-family: "iconfont";
	}
	
	.h-saoma:before {
		content: '\e83a';
	}
	
	.h-msg {
		width: 44px;
		height: 44px;
		line-height: 44px;
		font-size: 24px;
		text-align: center;
		display: block;
		position: absolute;
		color: #FFF;
		left: auto;
		right: 0;
		top: 0;
		z-index: 5;
		font-family: "iconfont";
	}
	
	.h-msg:before {
		content: '\e831';
	}
	
	.h-msg .num {
		background: #FFF;
		position: absolute;
		right: 6px;
		top: 6px;
		width: 16px;
		height: 16px;
		text-align: center;
		line-height: 16px;
		font-size: 9px;
		color: #ff1c1c;
		-webkit-border-radius: 10px;
		border-radius: 10px;
	}
</style>