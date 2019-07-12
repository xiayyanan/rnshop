<template lang="html">
	<div id="myOrder">
		<v-header :header="header"></v-header>
		<v-menu></v-menu>
		<div class="rnui-content">
			<v-orderList :myOrderData="myOrderData"></v-orderList>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import menu from "@/components/myOrder/menu.vue"
	import orderList from "@/components/myOrder/orderList.vue"
	import myorder from '@/http/mock.js' //模拟数据
	export default {
		components: {
			'v-header': header,
			'v-menu':menu,
			'v-orderList':orderList
		},
		data() {
			return {
				header: {
					title: '我的订单',
					back: {
						isBack: true
					}
				},
				myOrderData: []
			}
		},
		beforeCreate() {
			this.$api({
				method: 'post',
				url: '/myOrder'
			}).then((response) => {
				let datas=response.data.myOrder.myOrderData;
				let arr=[];
				datas.forEach(function(item,index,arr){
					let sum=0
					let amount=0;
					item.goodsData.forEach(function(itemB){
						sum+=parseFloat(itemB.price);
						amount+=parseInt(itemB.amount);
					})
					arr[index].tmoney=sum.toFixed(2);
					arr[index].tamount=amount;
				})
				this.myOrderData = datas;
			}).catch(function(error) {
				console.log(error);
			})
		}
	}
</script>
<style scoped="scoped">
</style>