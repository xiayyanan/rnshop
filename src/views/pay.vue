<template lang="html">
	<div id="pay">
		<v-header :header="header"></v-header>
		<div class="rnui-footer">
			<button class="btn f-full-btn" @click="onsend">立即支付</button>
		</div>
		<div class="rnui-content">
			<v-payMoney :money="money"></v-payMoney>
			<v-payment></v-payment>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import sideslip from '@/components/rn-sideslip/rn-sideslip.js'
	Vue.use(sideslip);
	
	import header from "@/common/header.vue"
	import payMoney from "@/components/pay/payMoney.vue"
	import payment from "@/components/pay/payment.vue"
	import enterPwd from '@/components/pay/enterPwd.vue'
	export default {
		components: {
			'v-header': header,
			'v-payMoney': payMoney,
			'v-payment': payment
		},
		data() {
			return {
				header: {
					title: '支付订单',
					back: {
						isBack: true
					}
				},
				money:'8319.00',
				opts: {
					isClose: false,
					direction: 'bottom',
					domStyle: {
						bottom: "0px",
					},
					content: enterPwd,
					cdata: {}
				}
			}
		},
		methods: {
			onsend: function() {
				this.$mySideslip(this.opts);
			}
		},
		beforeCreate() {
			document.querySelector('body').setAttribute('style', 'background:#fff;')
		},
		beforeDestroy() {
			document.querySelector('body').removeAttribute('style')
		}
	}
</script>
<style scoped="scoped">
	.rnui-content {
		background: #fff;
	}
</style>