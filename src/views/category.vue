<template lang="html">
	<!-- 在首页父组件发送http请求,后将数据通过props传递给子组件,可减少请求次数,减少服务器压力 -->
	<div class="index">
		<v-header :header="header"></v-header>
		<v-tabBar></v-tabBar>
		<div class="rnui-content">
			<v-nav :navData="categoryData"></v-nav>
			<v-main :mainData="categoryData"></v-main>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import tabBar from "@/common/tabBar.vue"
	import nav from "@/components/category/nav.vue"
	import main from "@/components/category/main.vue"
	import category from '@/http/mock.js' //模拟数据
	export default {
		components: {
			'v-header': header,
			'v-tabBar': tabBar,
			'v-nav': nav,
			'v-main': main
		},
		data() {
			return {
				header: {
					title: '分类',
					back: {
						isBack: true
					}
				},
				selected: 0,
				categoryData: [],
			}
		},
		beforeCreate() {
			this.$api({
				method: 'post',
				url: '/category'
			}).then((response) => {
				this.categoryData = response.data.category;
				//console.log(response.data.index);
			}).catch(function(error) {
				console.log(error);
			})
		}
	}
</script>
<style scoped="scoped">
	body {
		background: #fff;
	}
	
	.rnui-header {
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	}
</style>