<template>
	<div id="mySet">
		<ul class="form-list f-list-mt10">
			<li class="item">
				<span class="name">姓<em class="space2"></em>名</span>
				<input type="text" class="txt" value="" placeholder="请输入真实姓名">
			</li>
			<li class="item">
				<span class="name">身份证号</span>
				<input type="text" class="txt" value="" placeholder="请输入身份证号">
			</li>
		</ul>

		<div class="identity mt10">
			<div class="title">
				<span>身份证正反照片</span>
				<span class="red">待上传</span>
			</div>
			<ul class="uplist">
				<li class="item">
					<img :src="identity">
				</li>
				<li class="item" @click="onIdentity">
					<span class="upbtn"></span>
					<p class="text">上传身份证反面</p>
				</li>
			</ul>
		</div>

		<div class="btn-box">
			<button class="btn">保存</button>
		</div>
		<mt-actionsheet :actions="actions" v-model="sheetVisible">
		</mt-actionsheet>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				identity: require("../../assets/images/example/identity.png"),
				sheetVisible: false,
				actions: [{
						name: "拍照"
					},
					{
						name: "从相册选择"
					}
				]
			}
		},
		methods: {
			onIdentity: function(value) {
				this.sheetVisible = !this.sheetVisible;
			},
		}
	}
</script>

<style scoped="scoped">
	@import "../../assets/css/form-list.css";
	.identity {
		padding: .24rem;
		background: #fff;
	}
	
	.identity .title {
		font-size: 0.28rem;
		height: .48rem;
		line-height: .48rem;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	
	.identity .uplist {
		margin-top: .24rem;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	
	.identity .uplist .item {
		width: 50%;
		height: 2.4rem;
		border: #e5e8ea 1px solid;
		background: #f9f9f9;
		position: relative;
		-webkit-border-radius: 5px;
		border-radius: 5px;
	}
	
	.identity .uplist .item:first-child {
		margin-right: .2rem;
	}
	
	.identity .uplist .item:nth-child(2) {
		margin-left: .2rem;
	}
	
	.identity .uplist .item img {
		width: 100%;
		height: 100%;
	}
	
	.identity .uplist .upbtn {
		width: 40px;
		height: 40px;
		border: #dfd9df 2px solid;
		border-radius: 32px;
		position: absolute;
		top: 50%;
		left: 50%;
		margin: -30px 0 0 -20px;
	}
	
	.identity .uplist .upbtn:after {
		content: '';
		position: absolute;
		top: 7px;
		bottom: 7px;
		left: 50%;
		width: 2px;
		background: #dfd9df;
		margin-left: -1px;
	}
	
	.identity .uplist .upbtn:before {
		content: '';
		position: absolute;
		left: 7px;
		right: 7px;
		top: 50%;
		height: 2px;
		background: #dfd9df;
		margin-top: -1px;
	}
	
	.identity .uplist .text {
		position: absolute;
		left: 0;
		right: 0;
		top: 50%;
		margin-top: .4rem;
		text-align: center;
		color: #999;
		font-size: .24rem;
	}
</style>