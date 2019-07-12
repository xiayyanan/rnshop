<template>
	<div id="mySet">
		<ul class="form-list f-list-mt10">
			<li class="item">
				<span class="name">手机号码</span>
				<input type="text" class="txt" value="" placeholder="请输入手机号码">
			</li>
			<li class="item">
				<span class="name">验证码</span>
				<div class="input-box">
					<input type="text" class="txt" value="" placeholder="请输入短信验证码">
				</div>
				<span class="getyzm" :class="{'fail':times<60}" @click="countDown">{{yzmtext}}</span>
			</li>
		</ul>

		<div class="btn-box">
			<button class="btn">保存</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				yzmtext: "获取验证码",
				times: 60
			}
		},
		methods: {
			countDown: function() {
				let time;
				this.yzmtext = this.times-- + "s后重新发送";
				time = setInterval(() => {
					if(this.times >0) {
						this.yzmtext = this.times-- + "s后重新发送";
					} else {
						clearInterval(time);
						this.yzmtext = "获取验证码";
						this.times = 60;
					}
				}, 1000)
			}
		}
	}
</script>

<style scoped="scoped">
	@import "../../assets/css/form-list.css";
</style>