<template>
	<div class="promotions mt10 active" id="promotions">
		<div class="tit">
			<span class="name">促销</span>
			<span class="name-dsp">可享受以下促销</span>
			<span class="iconfont icon-a12b"></span>
		</div>
		<ul>
			<li class="item">
				<span class="label">满送</span>
				<span class="name">满19元即赠送热销商品，赠完为止</span>
			</li>
			<li class="item">
				<span class="label">满减</span>
				<span class="name">单笔订单满200元，送10元现金券</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: {
			promotionsData: {
				type: Array,
				default: function() {
					return []
				}
			}
		}
	}
</script>
<style scoped="scoped">
	.promotions {
		background: #fff;
	}
	
	.promotions .tit,
	.promotions .item {
		height: .88rem;
		padding: 0 .3rem;
		line-height: .88rem;
		position: relative;
	}
	
	.promotions ul {
		display: none;
	}
	
	.promotions.active ul {
		display: block;
	}
	
	.promotions .item:after {
		content: '';
		position: absolute;
		left: .3rem;
		right: 0;
		top: 0;
		height: 1px;
		background: #e5e8ea;
		transform: scaleY(0.5);
	}
	
	.promotions .name {
		font-size: .28rem;
	}
	
	.promotions .name-dsp {
		font-size: .26rem;
		color: #92999d;
		margin-left: .18rem;
	}
	
	.promotions .label {
		height: 18px;
		line-height: 16px;
		border: #FF0036 1px solid;
		border-radius: 3px;
		display: inline-block;
		vertical-align: middle;
		font-size: 12px;
		color: #FF0036;
		padding: 0 4px;
		margin: -3px 5px 0 0;
	}
	
	.promotions .icon-a12b {
		width: 16px;
		height: 16px;
		line-height: 16px;
		display: block;
		position: absolute;
		right: .3rem;
		top: 50%;
		margin-top: -8px;
		color: #ccc;
		font-weight: bold;
		-webkit-transition: all 0.6s;
		transition: all 0.6s;
	}
	
	.promotions.active .icon-a12b {
		-webkit-transform: rotate(180deg);
		transform: rotate(180deg);
	}
</style>