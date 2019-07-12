<template>
	<div id="payok">
		<v-header :header="header">
		</v-header>

		<div class="rnui-content">
			<div class="success">
				<p><img src="../../static/images/pay-ok.png" class="pay-ok"></p>
				<div class="text">
					<p class="tit">恭喜您！您已支付成功！</p>
					<p class="dsp">共支付：<em class="red">¥8319.00</em></p>
				</div>
				<div class="btn-box">
					<div class="tab">
						<router-link to="/list" class="btn btn-outlined">再逛逛吧</router-link>
					</div>
					<div class="tab">
						<router-link to="/" class="btn">返回首页</router-link>
					</div>
				</div>
			</div>
		</div>

	</div>

</template>

<script>
	import header from "@/common/header.vue"
	export default {
		components: {
			'v-header': header
		},
		data() {
			return {
				header: {
					title: '支付成功',
					back: {
						isBack: true
					}
				}
			}
		}
	}
</script>

<style>
	.success {
		padding: 1rem .3rem;
		text-align: center;
		overflow: hidden;
	}
	
	.success .pay-ok {
		width: 2.4rem;
		height: 2.4rem;
		display: block;
		margin: 0 auto;
	}
	
	.success .text {
		text-align: center;
		margin-top: .4rem;
	}
	
	.success .tit {
		font-size: .36rem;
		line-height: .48rem;
	}
	
	.success .dsp {
		font-size: .36rem;
		line-height: .48rem;
		color: #92999D;
		margin-top: .2rem;
	}
	
	.success .btn-box {
		margin-top: .4rem;
		font-size: 0;
		text-align: center;
		overflow: hidden;
	}
	
	.success .btn-box .tab {
		display: inline-block;
		margin: 0 10px;
	}
	
	.success .btn-box .tab .btn {
		width: 2.4rem;
		height: .68rem;
		line-height: .64rem;
		display: block;
	}
</style>