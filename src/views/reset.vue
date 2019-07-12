<template lang="html">
	<div class="login">
		<v-header :header="header">
		</v-header>
		<ul class="login-form">
			<li class="tits">重置密码</li>
			<li class="item">
				<div class="input-box">
					<input type="password" v-model="upwd" class="l-txt" placeholder="请输入密码">
					<span class="clearInput" @click="clearInput('upwd')" v-if="upwd.length>0"></span>
				</div>
			</li>
			<li class="item">
				<div class="input-box">
					<input type="password" v-model="upwds" class="l-txt" placeholder="重复密码">
					<span class="clearInput" @click="clearInput('upwds')" v-if="upwds.length>0"></span>
				</div>
			</li>
			<li class="item opn">
				<button class="btn l-btn" @click="onSend">提交</button>
			</li>
		</ul>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import user from '@/http/mock.js' //模拟数据
	export default {
		components: {
			'v-header': header
		},
		data() {
			return {
				header: {
					back: {
						isBack: true
					}
				},
				upwd: '',
				upwds: '',
				yzmtext: "获取验证码",
				times: 60,
			}
		},
		methods: {
			countDown: function() {
				let time;
				this.yzmtext = this.times-- + "s后重新发送";
				time = setInterval(() => {
					if(this.times > 0) {
						this.yzmtext = this.times-- + "s后重新发送";
					} else {
						clearInterval(time);
						this.yzmtext = "获取验证码";
						this.times = 60;
					}
				}, 1000)
			},

			onSend: function() {
				this.$router.push('/login');
			},
			clearInput: function(obj) {
				this.$set(this.$data, obj, '');
			}
		}
	}
</script>
<style scoped="scoped">
	@import "../assets/css/login.css";
</style>