<template>
	<div class="feedback-form">
		<div class="title">问题留言</div>
		<div class="input-box">
			<textarea class="input-txt" placeholder="请输入留言信息"></textarea>
		</div>
		<div class="title">联系方式</div>
		<div class="input-box">
			<input name="" type="text" class="input-txt" placeholder="请输入手机或QQ的联系方式">
		</div>

		<div class="btn-box">
			<button class="btn">提交留言</button>
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
	.feedback-form {
		padding: 0 .24rem .24rem;
		background: #fff;
	}
	
	.feedback-form .title {
		font-size: .3rem;
		padding-top: .24rem;
	}
	
	.feedback-form .input-box {
		margin-top: .24rem;
	}
	
	.feedback-form .input-txt {
		height: .9rem;
		padding: .24rem;
		-webkit-border-radius: 0;
		border-radius: 0;
	}
	
	.feedback-form textarea.input-txt {
		height: 2.4rem;
	}
	
	.feedback-form .btn-box {
		padding: .24rem 0 0 0;
	}
	
	.feedback-form .btn-box .btn {
		width: 100%;
		display: block;
		border-radius: 0;
		height: .9rem;
		border: none;
		line-height: .9rem;
		font-size: .3rem;
	}
</style>