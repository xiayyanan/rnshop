<template lang="html">
	<div class="index">
		<v-header :header="header"></v-header>
		<div class="rnui-content">
			<v-brand :brandData="brandData"></v-brand>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import brand from "@/components/brand/brand.vue"
	import mock from '@/http/mock.js' //模拟数据
	export default {
		components: {
			'v-header': header,
			'v-brand': brand
		},
		data() {
			return {
				header: {
					title: '品牌专区',
					back: {
						isBack: true
					}
				},
				brandData: []
			}
		},

		beforeCreate() {
			this.$api({
				method: 'post',
				url: '/myShop'
			}).then((response) => {
				this.brandData = response.data.myShop.myShopData;
			}).catch(function(error) {
				console.log(error);
			})
		}
	}
</script>
<style scoped="scoped">

</style>