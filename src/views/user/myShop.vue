<template lang="html">
	<div id="myShop">
		<v-header :header="header"></v-header>
		<div class="rnui-content">
			<v-shop :myShopData="myShopData"></v-shop>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import shop from "@/components/myShop/shop.vue"
	import myShop from '@/http/mock.js' //模拟数据
	export default {
		components: {
			'v-header': header,
			'v-shop':shop
		},
		data() {
			return {
				header: {
					title: '关注店铺',
					back: {
						isBack: true
					}
				},
				myShopData: []
			}
		},
		beforeCreate() {
			this.$api({
				method: 'post',
				url: '/myShop'
			}).then((response) => {
				let datas=response.data.myShop.myShopData;
				this.myShopData = datas;
			}).catch(function(error) {
				console.log(error);
			})
		}
	}
</script>
<style scoped="scoped">
</style>