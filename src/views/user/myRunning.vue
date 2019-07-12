<template lang="html">
	<div id="myCoupon">
		<v-header :header="header"></v-header>
		<div class="rnui-content">
			<v-running :myRunningData="myRunningData"></v-running>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import running from "@/components/myRunning/running.vue"
	import mock from '@/http/mock.js' //模拟数据
	export default {
		components: {
			'v-header': header,
			'v-running':running
		},
		data() {
			return {
				header: {
					title: '资金明细',
					back: {
						isBack: true
					}
				},
				myRunningData:[]
			}
		},
		beforeCreate(){
			this.$api({
				method: 'post',
				url: '/myRunning'
			}).then((response) => {
				this.myRunningData = response.data.myRunning.myRunningData;
			}).catch(function(error) {
				console.log(error);
			})
		}
	}
</script>
<style scoped="scoped">

</style>