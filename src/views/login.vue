<template lang="html">
	<div class="login">
		<v-header :header="header">
		</v-header>
		<ul class="login-form">
			<li class="tits">用户登录</li>
			<li class="item">
				<div class="input-box">
					<input type="text" v-model="uname" class="l-txt" placeholder="输入手机号">
					<span class="clearInput" @click="clearInput('uname')" v-if="uname.length>0"></span>
				</div>
			</li>
			<li class="item">
				<div class="input-box">
					<input type="password" autocomplete="new-password" v-model="upwd" class="l-txt" placeholder="请输入密码">
					<span class="clearInput" @click="clearInput('upwd')" v-if="upwd.length>0"></span>
				</div>
			</li>
			<li class="item opn">
				<button class="btn l-btn" @click="onLoing">登录</button>
			</li>
			<li class="text">
				<router-link to="/reg" class="c2">免费注册</router-link>
				<router-link to="/forgot" class="c2">忘记密码?</router-link>
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
				uname: '',
				upwd: ''
			}
		},
		methods: {
			onLoing: function() {
				this.$store.commit('CHANGE_LOGIN', true);
				this.$router.push('/user');
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