<template lang="html">
	<div id="detail">
		<v-header :header="header">
			<div slot="rnui-opn" class="runi-slot">
				<div class="h-nav">
					<div class="item">
						<router-link to="/detail" class="tap">详情</router-link>
					</div>
					<div class="item">
						<router-link to="/evaluate" class="tap">评论</router-link>
					</div>
				</div>
				<router-link to="/car" class="h-car">
					<span class="carnum">{{carnum}}</span>
				</router-link>
			</div>
		</v-header>
		<v-orderBar :baseData="detailData.baseData"></v-orderBar>
		<div class="rnui-content">
			<v-swipe :swipeData="detailData.swipeData"></v-swipe>
			<v-base :baseData="detailData.baseData"></v-base>
			<v-promotions></v-promotions>
			<v-evaluate :evaluateData="detailData.evaluateData">
				<div slot="evaluateAll" class="evaluateAll">
					<router-link to="evaluate" class="btn btn-outlined">查看全部评价</router-link>
				</div>
			</v-evaluate>
			<v-details :detailsData="detailData.detailsData"></v-details>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import header from "@/common/header.vue"
	import orderBar from "@/components/detail/orderBar.vue"
	import swipe from "@/components/detail/swipe.vue"
	import base from "@/components/detail/base.vue"
	import promotions from "@/components/detail/promotions.vue"
	import evaluate from "@/components/detail/evaluate.vue"
	import details from "@/components/detail/details.vue"
	import detail from '@/http/mock.js' //模拟数据
	export default {
		components: {
			'v-header': header,
			'v-orderBar': orderBar,
			'v-swipe': swipe,
			'v-base': base,
			'v-promotions': promotions,
			'v-evaluate': evaluate,
			'v-details': details
		},
		data() {
			return {
				header: {
					back: {
						isBack: true
					},
					isTrans: true
				},
				detailData: [],
				Rname: this.$route.name
			}
		},
		computed: {
			carnum: function() {
				return this.$store.state.detail.carnum
			}
		},
		methods: {
			onScroll() {
				document.addEventListener('scroll', function(e) {
					let stop = document.documentElement.scrollTop;
					let bv = (0.75 - stop / 300) < 0.75 ? 0.75 - stop / 300 : 0.75;
					document.querySelector(".rnui-header").style.background = "rgba(255,39,65," + stop / 300 + ")";
					document.querySelector(".rnui-header-back").style.background = "rgba(0,0,0," + bv + ")";
					document.querySelector(".h-nav").style.opacity = stop / 300;
					document.querySelector(".h-car").style.background = "rgba(0,0,0," + bv + ")";
				}, false)
			}
		},
		mounted() {
			//document.addEventListener('scroll',this.onScroll())
		},
		beforeCreate() {

			this.$api({
				method: 'post',
				url: '/detail'
			}).then((response) => {
				let len = response.data.detail.evaluateData.evaluateList.length - 1;
				response.data.detail.evaluateData.evaluateList.splice(1, len);
				this.detailData = response.data.detail;
			}).catch(function(error) {
				console.log(error);
			})
		},
		beforeDestroy() {
			//document.removeEventListener("scroll", this.onScroll());
			//document.querySelector(".rnui-header").removeAttribute('style');
			//document.querySelector(".h-car").removeAttribute('style');
		}
	}
</script>
<style scoped="scoped">
	.h-nav {
		position: absolute;
		right: 44px;
		left: 44px;
		height: 44px;
		display: flex;
		justify-content: center;
		opacity: 0;
	}
	
	.h-nav .item {
		padding: 0 .4rem;
	}
	
	.h-nav .tap {
		height: 44px;
		line-height: 44px;
		font-size: .28rem;
		color: #fff;
	}
	
	.h-nav .router-link-active:after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 5px;
		height: 3px;
		background: #f90;
	}
	
	.h-car {
		width: 32px;
		height: 32px;
		font-size: 22px;
		line-height: 32px;
		text-align: center;
		display: block;
		position: absolute;
		color: #fff;
		right: 6px;
		top: 6px;
		z-index: 5;
		font-family: "iconfont";
		background: rgba(0, 0, 0, .75);
		border-radius: 32px;
	}
	
	.h-car:before {
		content: "\e818";
	}
	
	.carnum {
		width: 18px;
		height: 18px;
		font-size: 12px;
		line-height: 18px;
		text-align: center;
		color: #fff;
		background: #f60;
		display: block;
		position: absolute;
		right: -3px;
		top: -3px;
		-webkit-border-radius: 18px;
		border-radius: 18px;
	}
</style>