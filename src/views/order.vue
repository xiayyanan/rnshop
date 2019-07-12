<template lang="html">
	<div class="index">
		<v-header :header="header"></v-header>
		<v-orderBar></v-orderBar>
		<div class="rnui-content">
			<v-address :defaultAddrees="defaultAddrees" :addressData="addressData"></v-address>
			<v-order :orderData="orderData" :couponData="couponData"></v-order>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import address from "@/components/order/address.vue"
	import order from "@/components/order/order.vue"
	import orderBar from "@/components/order/orderBar.vue"
	import mock from '@/http/mock.js' //模拟数据
	export default {
		components: {
			'v-header': header,
			'v-order': order,
			'v-address': address,
			'v-orderBar': orderBar
		},
		data() {
			return {
				header: {
					title: '提交订单',
					back: {
						isBack: true
					}
				},
				addressData: [],
				defaultAddrees:{},
				orderData: [],
				couponData: []
			}
		},
		methods: {

		},
		beforeCreate() {
			this.$api({
				method: 'post',
				url: '/address'
			}).then((response) => {
				this.addressData = response.data.address.addressData;
				let arr=this.addressData.filter(function(elem) {
					return elem.default == true;
				});
				let texts='';
				arr[0].areas.forEach(function(item){
					texts+=item.text+" ";
				})
				arr[0].text=texts;
				this.defaultAddrees=arr[0];
				
			}).catch(function(error) {
				console.log(error);
			})

			this.$api({
				method: 'post',
				url: '/order'
			}).then((response) => {
				this.orderData = response.data.order.orderData;
			}).catch(function(error) {
				console.log(error);
			})

			this.$api({
				method: 'post',
				url: '/coupon'
			}).then((response) => {
				this.couponData = response.data.coupon.couponData;
			}).catch(function(error) {
				console.log(error);
			})
		}
	}
</script>
<style scoped="scoped">

</style>