<template>
	<ul class="list-tab btline bbline">
		<li class="item" v-for="item in payment">
			<div class="tap check">
				<div class="img-icon"><img :src="item.imgicon"></div>
				<span class="name">{{item.name}}</span>
				<input name="payment" type="radio" class="rcheck">
			</div>
		</li>
	</ul>
</template>

<script>
	export default {
		data() {
			return {
				payment: [{
						imgicon: "../../static/images/zfb.png",
						name: "支付宝"
					},
					{
						imgicon: "../../static/images/weixin.png",
						name: "微信支付"
					},
					{
						imgicon: "../../static/images/ylzf.png",
						name: "银联支付"
					}
				]
			}
		}
	}
</script>

<style scoped="scoped">
	@import "../../assets/css/list-tab.css";
</style>