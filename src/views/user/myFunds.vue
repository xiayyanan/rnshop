<template lang="html">
	<div id="myFunds">
		<v-header :header="header"></v-header>
		<div class="rnui-content">
			<v-balance :balanceData="myFundsData.balance"></v-balance>
			<v-account :accountData="myFundsData"></v-account>
			<v-nav :navData="myFundsData"></v-nav>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import balance from "@/components/myFunds/balance.vue"
	import account from "@/components/myFunds/account.vue"
	import nav from "@/components/myFunds/nav.vue"
	import myFunds from '@/http/mock.js' //模拟数据
	export default {
		components: {
			'v-header': header,
			'v-balance': balance,
			'v-account': account,
			'v-nav': nav
		},
		data() {
			return {
				header: {
					title: '我的钱包',
					back: {
						isBack: true
					},
					isRed: true
				},
				myFundsData: {}
			}
		},
		beforeCreate() {
			this.$api({
				method: 'post',
				url: '/myFunds'
			}).then((response) => {
				let datas = response.data.myFunds.myFundsData;
				this.myFundsData = datas;
				//let _self=this;
				//this.$set(_self.$data,'myFundsData',datas);
			}).catch(function(error) {
				console.log(error);
			})
		}
	}
</script>
<style scoped="scoped">

</style>