<template lang="html">
	<div class="login">
		<v-header :header="header">
		</v-header>
		<ul class="login-form">
			<li class="tits">用户注册</li>
			<li class="item">
				<div class="input-box">
					<input type="text" v-model="uname" class="l-txt" placeholder="输入手机号">
					<span class="clearInput" @click="clearInput('uname')" v-if="uname.length>0"></span>
				</div>
			</li>
			<li class="item">
				<div class="input-box">
					<input type="number" v-model="uyzm" class="l-txt" placeholder="验证码">
					<span class="clearInput" @click="clearInput('uyzm')" v-if="uyzm.length>0"></span>
					<span class="getyzm" :class="{'fail':times<60}" @click="countDown">{{yzmtext}}</span>
				</div>
			</li>

			<li class="item">
				<div class="input-box">
					<input type="password" autocomplete="new-password" v-model="upwd" class="l-txt" placeholder="请输入密码">
					<span class="clearInput" @click="clearInput('upwd')" v-if="upwd.length>0"></span>
				</div>
			</li>
			<li class="item opn">
				<button class="btn l-btn" @click="onReg">注册</button>
			</li>
			<li class="protocol">
				<input type="checkbox" v-model="isAgree" class="scheck" />
				<span>我已阅读并同意然诺商城</span>
				<router-link to="/protocol">《用户服务协议》</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
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
				uname: '',
				uyzm: '',
				upwd: '',
				yzmtext: "获取验证码",
				times: 60,
				isAgree: false
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

			onReg: function() {
				if(this.isAgree) {
					this.$store.commit('CHANGE_LOGIN', true);
					this.$router.push('/user');
				} else {
					Toast({
						message: '请同意并阅读用服务户协议',
						position: 'bottom',
						duration: 1000
					});
				}
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