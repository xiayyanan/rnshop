<template>
	<div class="fundsHd">
		<p class="bts">账户余额（元）</p>
		<p class="value">{{balanceData}}</p>
		<router-link to="/myFunds/withdraw" class="btn">申请提现</router-link>
	</div>
</template>

<script>
	export default {
		props: {
			balanceData: {
				type: Number
			}
		},
		data() {
			return {

			}
		}
	}
</script>
<style scoped="scoped">
	.fundsHd {
		padding: .3rem;
		background: #ff2741;
		overflow: hidden;
		color: #FFF;
		position: relative;
		text-align: center;
	}
	
	.fundsHd .bts {
		line-height: 1;
		font-size: .24rem;
		color: rgba(255, 255, 255, .75);
		text-align: center;
	}
	
	.fundsHd .value {
		line-height: 1;
		font-size: .72rem;
		margin-top: .3rem;
	}
	
	.fundsHd .btn {
		display: block;
		margin: .3rem auto 0;
		width: 1.8rem;
		height: .6rem;
		line-height: .58rem;
		font-size: .24rem;
		padding: 0;
		background: none;
		border-color: #fff;
		border-radius: .6rem;
	}
</style>