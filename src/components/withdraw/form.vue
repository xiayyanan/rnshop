<template>
	<div id="withdraw">
		<div class="title-bt">提现的帐号</div>

		<ul class="list-tab mt10 btline bbline">
			<li class="item" v-for="item in payment">
				<div class="tap check">
					<div class="img-icon"><img :src="item.imgicon"></div>
					<span class="name">{{item.name}}</span>
					<input name="payment" type="radio" class="rcheck">
				</div>
			</li>
		</ul>

		<ul class="form-list f-list-mt10">
			<li class="item">
				<span class="name">提现金额</span>
				<input type="text" class="txt tar" placeholder="请输入提现金额">
			</li>
		</ul>
	</div>
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
	@import "../../assets/css/form-list.css";
	@import "../../assets/css/list-tab.css";
</style>