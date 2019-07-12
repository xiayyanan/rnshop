<template>
	<ul class="orderServieList mt10">
		<li class="item">
			<router-link to="/myOrder/myOrderReturns" class="tap">
				<i class="icons icon-tuikuan"></i>
				<div class="content">
					<p class="bt">仅退款</p>
					<p class="dsp">未收到货(包含未签收)，或卖家协商同意前提下</p>
					<i class="iconfont icon-a12r"></i>
				</div>
			</router-link>
		</li>
		<li class="item">
			<router-link to="/myOrder/myOrderReturns" class="tap">
				<i class="icons icon-tuihuo"></i>
				<div class="content">
					<p class="bt">退货退款</p>
					<p class="dsp">已收到货，需要退换已收到的货物</p>
					<i class="iconfont icon-a12r"></i>
				</div>
			</router-link>
		</li>
	</ul>
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
	.orderServieList .tap {
		background: #fff;
		padding: .32rem .32rem .32rem 54px;
	}
	
	.orderServieList .tap:after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 1px;
		background: #e5e8ea;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}
	
	.orderServieList .icons {
		font-family: "iconfont";
		width: 30px;
		height: 30px;
		font-size: 30px;
		line-height: 30px;
		display: block;
		position: absolute;
		left: 10px;
		top: 50%;
		margin-top: -15px;
		color: #ff2741;
	}
	
	.orderServieList .icon-a12r {
		width: 16px;
		height: 16px;
		font-size: 16px;
		display: block;
		position: absolute;
		right: 10px;
		top: 50%;
		margin-top: -8px;
		font-weight: bold;
		color: #b5b5b5;
	}
	
	.orderServieList .bt {
		font-size: .28rem;
	}
	
	.orderServieList .dsp {
		font-size: .24rem;
		color: #92999d;
	}
</style>