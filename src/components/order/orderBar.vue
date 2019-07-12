<template>
	<div class="rnui-footer">
		<div class="total-box">
			<div class="texts">
				<span>实际付款：</span>
				<span class="red">¥</span>
				<span class="red unit">8319.00</span>
			</div>
			<router-link to="/pay" class="gobuy btn">提交订单</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['orderData'],
		data() {
			return {

			}
		}
	}
</script>

<style scoped="scoped">
	.total-box {
		height: 49px;
		position: relative;
		z-index: 99;
		display: flex;
	}
	
	.total-box.fixed {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 49px;
		background: #fff;
	}
	
	.total-box .gobuy {
		height: 36px;
		border: none;
		display: block;
		text-align: center;
		line-height: 36px;
		font-size: .3rem;
		padding: 0 .3rem;
		border-radius: 36px;
		flex-shrink: 0;
		margin: 7px 10px 0 0;
	}
	
	.total-box .texts {
		width: 100%;
		height: 49px;
		line-height: 50px;
		padding-left: .24rem;
		font-size: .28rem;
		display: flex;
	}
	
	.total-box .texts .unit {
		font-size: .36rem;
	}
</style>