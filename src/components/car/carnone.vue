<template>
	<div id="car">
		<div class="car-none">
			<div class="car-none-inner">
				<img src="../../../static/images/car-none.png" class="imgbox">
				<div class="dsp">亲，购物车空空的耶~赶紧挑宝贝吧！</div>
				<div class="opn">
					<router-link to="list" class="btn btn-outlined">去逛逛</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style scoped="scoped">
	.car-none {
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: fixed;
		left: 0;
		right: 0;
		top: 44px;
		bottom: 49px;
	}
	
	.car-none .imgbox {
		width: 72px;
		height: 72px;
		margin: 0 auto;
	}
	
	.car-none .dsp {
		font-size: .3rem;
		color: #a3a4a8;
		line-height: 24px;
		margin-top: 20px;
		text-align: center;
	}
	
	.car-none .opn {
		margin-top: .4rem;
	}
	
	.car-none .btn {
		width: 3rem;
		height: 36px;
		line-height: 34px;
		border: #737478 1px solid;
		display: block;
		margin: 0 auto;
		color: #737478;
		text-align: center;
		background: none;
		border-radius:0 ;
	}
</style>