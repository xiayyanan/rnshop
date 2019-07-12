<template>
	<div class="box mt10 clearfix">
		<div class="feedbackTit">我的反馈</div>
		<ul class="feedbackList">
			<li class="item" v-for="item in feedbackData">
				<div class="bt">
					<span class="c5">Q：</span>
					<span>{{item.title}}</span>
				</div>
				<div class="content">
					<span class="red">平台回复：</span> {{item.content}}
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: ['feedbackData'],
		data() {
			return {

			}
		}
	}
</script>
<style scoped="scoped">
	.feedbackTit {
		padding: .24rem .24rem 0;
		font-size: .3rem;
	}
	
	.feedbackList .item {
		padding: .24rem;
		background: #FFF;
		position: relative;
	}
	
	.feedbackList .item:after {
		content: '';
		position: absolute;
		left: .24rem;
		right: .24rem;
		bottom: 0;
		height: 1px;
		background: #e5e8ea;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}
	
	.feedbackList .item:last-child:after {
		display: none;
	}
	
	.feedbackList .bt {
		line-height: .4rem;
		font-size: 0.28rem;
	}
	
	.feedbackList .content {
		font-size: .26rem;
		color: #62666d;
		line-height: .44rem;
		margin-top: .24rem;
	}
</style>