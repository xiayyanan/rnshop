<template lang="html">
	<div id="myOrder">
		<v-header :header="header"></v-header>
		<div class="rnui-content">
			<v-logistics :logisticsData="logisticsData"></v-logistics>
			<v-logisticsList :listData="listData"></v-logisticsList>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import logistics from "@/components/myOrderLogistics/logistics.vue"
	import logisticsList from "@/components/myOrderLogistics/logisticsList.vue"
	import myOrderLogistics from '@/http/mock.js' //模拟数据
	export default {
		components: {
			'v-header': header,
			'v-logistics': logistics,
			'v-logisticsList': logisticsList
			
		},
		data() {
			return {
				header: {
					title: '物流详情',
					back: {
						isBack: true
					}
				},
				logisticsData: {},
				listData:[]
			}
		},
		beforeCreate() {
			this.$api({
				method: 'post',
				url: '/myOrderLogistics'
			}).then((response) => {
				let datas = response.data.myOrderLogistics.myOrderLogisticsData;
				this.logisticsData = datas.logistics;
				this.listData = datas.listData;
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