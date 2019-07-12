<template lang="html">
	<div id="myCoupon">
		<v-header :header="header"></v-header>
		<v-menu></v-menu>
		<div class="rnui-content">
			<v-redenvelope :myRedenvelopeData="myRedenvelopeData"></v-redenvelope>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import menu from "@/components/myRedenvelope/menu.vue"
	import redenvelope from "@/components/myRedenvelope/redenvelope.vue"
	import mock from '@/http/mock.js' //模拟数据
	export default {
		components: {
			'v-header': header,
			'v-menu': menu,
			'v-redenvelope':redenvelope
		},
		data() {
			return {
				header: {
					title: '我的红包',
					back: {
						isBack: true
					}
				},
				myRedenvelopeData:[]
			}
		},
		beforeCreate(){
			this.$api({
				method: 'post',
				url: '/myRedenvelope'
			}).then((response) => {
				this.myRedenvelopeData = response.data.myRedenvelope.myRedenvelopeData;
			}).catch(function(error) {
				console.log(error);
			})
		}
	}
</script>
<style scoped="scoped">

</style>