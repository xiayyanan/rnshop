<template lang="html">
	<div class="login">
		<v-header :header="header">
		</v-header>
		<ul class="login-form">
			<li class="tits">找回密码</li>
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
			<li class="item opn">
				<button class="btn l-btn" @click="onNext">下一步</button>
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
				uyzm: '',
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

			onNext: function() {
				this.$router.push('/reset');
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