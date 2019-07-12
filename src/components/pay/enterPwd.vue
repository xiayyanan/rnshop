<template>
	<div class="enterPwd">
		<v-header :header="header">
			<span slot="rnui-opn" class="h-close" @click="$closes"></span>
		</v-header>
		<div class="input-box">
			<input class="pwdText" v-model="pwd.split('')[0]" type="password" readonly="readonly" />
			<input class="pwdText" v-model="pwd.split('')[1]" type="password" readonly="readonly" />
			<input class="pwdText" v-model="pwd.split('')[2]" type="password" readonly="readonly" />
			<input class="pwdText" v-model="pwd.split('')[3]" type="password" readonly="readonly" />
			<input class="pwdText" v-model="pwd.split('')[4]" type="password" readonly="readonly" />
			<input class="pwdText" v-model="pwd.split('')[5]" type="password" readonly="readonly" />
		</div>
		<div class="hide-input">
			<input class="input-txt" v-model="pwd" @keyup="onSend" v-focus ref="pwd" type="password"></input>
		</div>
		<div class="forgotPwd">
			<span class="blue" @click="onForgot">忘记密码？</span>
		</div>
	</div>
</template>
<script>
	import header from "@/common/header.vue"
	export default {
		components: {
			'v-header': header
		},
		props: ['cdata'],
		data() {
			return {
				header: {
					title: '支付密码',
					back: {
						isBack: false
					}
				},
				pwd: ''
			}
		},
		methods: {
			onForgot: function() {
				this.$router.push('/payok');
				this.$closes();
			},
			onSend:function(){
				if(this.pwd.length==6){
					this.onForgot();
				}
			}
		},
		mounted() {
			setTimeout(() => this.$refs['pwd'].focus(), 300);
		},
		directives: {
			focus: {
				inserted: function(el) {
					setTimeout(() => el.focus(), 300);
				}
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	@import '../../assets/css/reset.less';
	.enterPwd {
		padding-top: 44px;
	}
	
	.input-box {
		display: flex;
		justify-content: space-between;
		padding: .4rem;
	}
	
	.input-box .pwdText {
		width: 100%;
		height: .94rem;
		border-color: #a4a4a4;
		border-style: solid;
		.fz(border-width, 1);
		border-right-width: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		font-size: .6rem;
		border-radius:0 ;
	}
	
	.input-box .pwdText:first-child {
		border-radius: .1rem 0 0 .1rem;
	}
	
	.input-box .pwdText:last-child {
		border-radius: 0 .1rem .1rem 0;
		.fz(border-right-width, 1);
	}
	
	.forgotPwd {
		text-align: center;
		font-size: .3rem;
		line-height: .6rem;
		padding-bottom: .4rem;
	}
	.hide-input{
		width: 0;
		height: 0;
		overflow: hidden;
	}
</style>