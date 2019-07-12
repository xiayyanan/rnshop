<template lang="html">
	<div id="myOrder">
		<v-header :header="header"></v-header>
		<div class="rnui-content">
			<v-logistics :logisticsData="logisticsData"></v-logistics>
			<v-address :addressData="addressData"></v-address>
			<v-orders :orderData="orderData"></v-orders>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import logistics from "@/components/myOrderDetails/logistics.vue"
	import address from "@/components/myOrderDetails/address.vue"
	import orders from "@/components/myOrderDetails/orders.vue"
	import myOrderDetails from '@/http/mock.js' //模拟数据
	export default {
		components: {
			'v-header': header,
			'v-logistics': logistics,
			'v-address': address,
			'v-orders': orders
		},
		data() {
			return {
				header: {
					title: '订单详情',
					back: {
						isBack: true
					}
				},
				myOrderDetailsData: {},
				logisticsData: {},
				addressData: {},
				orderData: {}
			}
		},
		beforeCreate() {
			this.$api({
				method: 'post',
				url: '/myOrderDetails'
			}).then((response) => {
				let datas = response.data.myOrderDetails.myOrderDetailsData;
				let arr = [];
				let sum = 0
				datas.orderData.goodsData.forEach(function(item) {
					sum += parseFloat(item.price);
				})
				datas.orderData.tmoney = sum.toFixed(2);
				datas.orderData.rmoney = (sum-datas.orderData.offer).toFixed(2);
				this.myOrderDetailsData = datas;
				this.logisticsData = datas.logistics;
				this.addressData = datas.address;
				this.orderData = datas.orderData;

			}).catch(function(error) {
				console.log(error);
			})
		}
	}
</script>
<style scoped="scoped">
	.rnui-header:after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 1px;
		background: #d5d8da;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}
</style>