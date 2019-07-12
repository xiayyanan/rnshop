<template>
	<ul class="account bbline">
		<li class="item">
			<p class="num red">{{accountData.withdraw}}</p>
			<p class="name">可提现金额</p>
		</li>
		<li class="item">
			<p class="num red">{{accountData.frozen}}</p>
			<p class="name">冻结金额</p>
		</li>
	</ul>
</template>

<script>
	export default {
		props: ['accountData'],
		data() {
			return {

			}
		}
	}
</script>
<style scoped="scoped">
	.account {
		background: #FFF;
		overflow: hidden;
		position: relative;
		display: flex;
	}
	
	.account .item {
		width: 50%;
		padding: .3rem .24rem;
		line-height: 1;
		position: relative;
		text-align: center;
	}
	
	.account .name {
		font-size: .28rem;
		color: #92999D;
		margin-top: .2rem;
	}
	
	.account .num {
		font-size: .4rem;
		font-weight: bold;
	}
	
	.account .item:nth-child(1n):after {
		content: '';
		position: absolute;
		right: 0;
		top: .3rem;
		bottom: .3rem;
		width: 1px;
		background: #e5e8ea;
		transform: scaleX(0.5);
	}
</style>