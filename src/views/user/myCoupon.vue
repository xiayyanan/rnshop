<template lang="html">
	<div id="myCoupon">
		<v-header :header="header"></v-header>
		<v-menu></v-menu>
		<div class="rnui-content">
			<v-coupon :couponData="couponData"></v-coupon>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import menu from "@/components/myCoupon/menu.vue"
	import coupon from "@/components/myCoupon/coupon.vue"
	import mock from '@/http/mock.js' //模拟数据
	export default {
		components: {
			'v-header': header,
			'v-menu': menu,
			'v-coupon': coupon
		},
		data() {
			return {
				header: {
					title: '我的优惠券',
					back: {
						isBack: true
					}
				},
				couponData:[]
			}
		},
		beforeCreate(){
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