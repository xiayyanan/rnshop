<template lang="html">
	<div id="user">
		<v-header :header="header">
			<router-link to="/mySet" slot="rnui-opn" class="h-set"></router-link>
			<router-link to="/message" slot="rnui-opn" class="h-msg">
				<span class="num">1</span>
			</router-link>
		</v-header>
		<v-tabBar></v-tabBar>
		<div class="rnui-content">
			<v-base :baseData="userData.baseData"></v-base>
			<v-menu :collectData="userData.collectData"></v-menu>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import tabBar from "@/common/tabBar.vue"
	import base from "@/components/user/base.vue"
	import menu from "@/components/user/menu.vue"
	import user from '@/http/mock.js' //模拟数据
	export default {
		components: {
			'v-header': header,
			'v-tabBar': tabBar,
			'v-base': base,
			'v-menu':menu
		},
		data() {
			return {
				header: {
					title: '',
					back: {
						isBack: false
					},
					isRed: true
				},
				userData: {}
			}
		},
		computed: {
			isLogin: function() {
				return this.$store.state.login.isLogin
			}
		},
		beforeCreate() {
			this.$api({
				method: 'post',
				url: '/user'
			}).then((response) => {
				this.userData = response.data.user;
			}).catch(function(error) {
				console.log(error);
			})
		}
	}
</script>
<style scoped="scoped">
	.h-set {
		width: 44px;
		height: 44px;
		line-height: 44px;
		font-size: 24px;
		text-align: center;
		display: block;
		position: absolute;
		color: #FFF;
		left: 0;
		top: 0;
		z-index: 5;
		font-family: "iconfont";
	}
	
	.h-set:before {
		content: '\e837';
	}
	
	.h-msg {
		width: 44px;
		height: 44px;
		line-height: 44px;
		font-size: 24px;
		text-align: center;
		display: block;
		position: absolute;
		color: #FFF;
		left: auto;
		right: 0;
		top: 0;
		z-index: 5;
		font-family: "iconfont";
	}
	
	.h-msg:before {
		content: '\e831';
	}
	
	.h-msg .num {
		background: #FFF;
		position: absolute;
		right: 6px;
		top: 6px;
		width: 16px;
		height: 16px;
		text-align: center;
		line-height: 16px;
		font-size: 9px;
		color: #ff1c1c;
		-webkit-border-radius: 10px;
		border-radius: 10px;
	}
</style>