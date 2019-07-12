<template lang="html">
	<div id="myShop">
		<v-header :header="header"></v-header>
		<div class="rnui-footer">
			<router-link to="/addressAdd" class="btn f-full-btn">新增地址</router-link>
		</div>
		<div class="rnui-content">
			<v-address :myAddressData="myAddressData"></v-address>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import address from "@/components/myAddress/address.vue"
	import myAddress from '@/http/mock.js' //模拟数据
	export default {
		components: {
			'v-header': header,
			'v-address': address
		},
		data() {
			return {
				header: {
					title: '收货地址',
					back: {
						isBack: true
					}
				},
				myAddressData: []
			}
		},
		beforeCreate() {
			this.$api({
				method: 'post',
				url: '/address'
			}).then((response) => {
				let datas = response.data.address.addressData;
				var _self = this;
				datas.forEach(function(item) {
					let areas = '';
					item.areas.forEach(function(itemsub) {
						areas += itemsub.text + " ";
					})
					_self.$set(item, 'text', areas);
				})
				this.myAddressData = datas;
			}).catch(function(error) {
				console.log(error);
			})
		}
	}
</script>
<style scoped="scoped">

</style>