<template>
	<div class="pay-text">
		<p class="opn">
			<span class="btn">订单金额</span>
		</p>
		<p class="value red">
			<span class="unit">¥</span>
			<span>{{money}}</span>
		</p>
	</div>
</template>

<script>
	export default{
		props:['money']
	}
</script>

<style scoped="scoped">
	.pay-text {
		padding: 1rem .3rem;
		text-align: center;
	}
	
	.pay-text .opn {
		margin-top: .3rem;
	}
	
	.pay-text .opn .btn {
		background: #e5e8ea;
		border: none;
		height: .56rem;
		line-height: .56rem;
		border-radius: .56rem;
		color: #62666d;
		padding: 0 .4rem;
	}
	
	.pay-text .value {
		font-size: .6rem;
		line-height: 1;
		margin-top: .4rem;
	}
	
	.pay-text .value .unit {
		font-size: .4rem;
		margin-right: -.1rem;
	}
</style>