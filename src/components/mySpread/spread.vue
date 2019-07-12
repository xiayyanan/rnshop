<template>
	<div id="mySpread">
		<div class="recruitContent">
			<div class="title c5">代理招募中，期待你的加入！</div>
			<div class="bt c2">保存下面二维码发送给朋友</div>
			<div class="ewm">
				<img src="../../../static/images/ewm.png">
			</div>
			<div class="code">我的邀请码：<b class="red">UJRXVS</b></div>
			<button class="btn btn-outlined" @click="onShare">邀请好友</button>
		</div>

		<div class="spreadItem mt10">
			<div class="title">
				<span class="name">奖励制度</span>
			</div>
			<div class="content">
				<p class="fwb">1. 推荐奖</p>
				<p>需求：按推荐关系结算，默认可拿伞下3代的奖金，可手动添加n代的奖金，每个级别对应的代数结算比例可单独设置。</p>
				<p class="fwb mt10">2. 对碰奖（管理图）</p>
				<p>需求：小区业绩按比例进行对碰（1.对碰比例可设置），适用于双轨制度（其它轨数的制度不可选择此奖金），每个级别的奖金结算比例可单独设置。</p>
				<p class="fwb mt10">3. 层碰奖（管理图）</p>
				<p>需求：每一层的奖金只能结算一次，每个级别的结算比例和可拿奖的最大层数可单独设置。结算方式分两种，供用户选择；</p>
				<p>第一种：按左右区第一单或第n单的报单业绩进行对碰；</p>
				<p>第二种：按左右区的总业绩的小区进行对碰结算。</p>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import sideslips from '@/components/rn-sideslip/rn-sideslip.js'
	Vue.use(sideslips);
	import share from '@/components/detail/share.vue'
	export default {
		data() {
			return {
				opts: {
					isClose: false,
					direction: 'bottom',
					domStyle: {
						background: "rgba(255,255,255,.9)"
					},
					content: share
				}
			}
		},
		methods:{
			onShare: function() {
				this.$mySideslip(this.opts);
			}
		}
	}
</script>
<style scoped="scoped">
	.recruitContent {
		padding: .36rem;
		background: #fff;
		text-align: center;
	}
	
	.recruitContent .title {
		font-size: .36rem;
	}
	
	.recruitContent .bt {
		font-size: .28rem;
		margin-top: .24rem;
	}
	
	.recruitContent .ewm {
		width: 3rem;
		height: 3rem;
		margin: 0 auto;
	}
	
	.recruitContent .ewm img {
		width: 100%;
	}
	
	.recruitContent .code {
		font-size: .3rem;
		margin-top: .18rem;
	}
	
	.recruitContent .spred {
		margin-top: .24rem;
		text-align: left;
		font-size: .28rem;
		word-wrap: break-word;
	}
	
	.recruitContent .btn {
		width: 4rem;
		display: block;
		height: .9rem;
		margin: .36rem auto;
		border-radius: 0;
	}
	
	.spreadItem {
		padding: .24rem;
		background: #fff;
	}
	
	.spreadItem .title {
		padding: .24rem 0;
		text-align: center;
		font-size: 0;
		position: relative;
	}
	
	.spreadItem .title .name {
		height: .48rem;
		line-height: .48rem;
		color: #666;
		font-size: .28rem;
		background: #fff;
		padding: 0 .36rem;
		display: inline-block;
		position: relative;
		z-index: 2;
	}
	
	.spreadItem .title:after {
		content: '';
		z-index: 1;
		position: absolute;
		left: 0;
		right: 0;
		top: 50%;
		height: 1px;
		background: #e5e8ea;
		transform: scaleY(.5);
	}
	
	.spreadItem .content {
		padding: .24rem .18rem;
		font-size: .26rem;
		line-height: 1.8;
		color: #62666d;
	}
</style>