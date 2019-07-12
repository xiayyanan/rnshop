<template>
	<div id="mySet">
		<ul class="set-nav bbline">
			<li class="item">
				<div class="avatar tap" @click="onAvatar">
					<span class="name">头像</span>
					<img :src="avatar">
					<i class="iconfont icon-a12r"></i>
				</div>
			</li>

			<li class="item">
				<router-link to="/mySet/myInfo" class="tap">
					<span class="name">基本资料</span>
					<span class="dsp">设置</span>
					<i class="iconfont icon-a12r"></i>
				</router-link>
			</li>
			<li class="item">
				<router-link to="/mySet/myVerified" class="tap">
					<span class="name">实名认证</span>
					<span class="dsp green">已认证</span>
					<i class="iconfont icon-a12r"></i>
				</router-link>
			</li>
			<li class="item">
				<router-link to="/mySet/myPhone" class="tap">
					<span class="name">手机绑定</span>
					<span class="dsp">182****9808</span>
					<i class="iconfont icon-a12r"></i>
				</router-link>
			</li>
			<li class="item">
				<router-link to="/mySet/myPassword" class="tap">
					<span class="name">修改密码</span>
					<span class="dsp">修改</span>
					<i class="iconfont icon-a12r"></i>
				</router-link>
			</li>
		</ul>

		<ul class="set-nav btline bbline mt10">
			<li class="item">
				<div class="tap">
					<span class="name">清除应用缓存</span>
					<span class="dsp">10.22MB</span>
					<i class="iconfont icon-a12r"></i>
				</div>
			</li>
			<li class="item">
				<div class="tap">
					<span class="name">消息推送</span>
					<mt-switch v-model="isDefault"></mt-switch>
				</div>
			</li>
		</ul>

		<ul class="set-nav btline bbline mt10">
			<li class="item">
				<router-link to="/mySet/about" class="tap">
					<span class="name">关于我们</span>
					<i class="iconfont icon-a12r"></i>
				</router-link>
			</li>
			<li class="item">
				<router-link to="/mySet/help" class="tap">
					<span class="name">帮助中心</span>
					<i class="iconfont icon-a12r"></i>
				</router-link>
			</li>
			<li class="item">
				<div class="tap">
					<span class="name">当前版本</span>
					<span class="dsp">V1.0</span>
					<i class="iconfont icon-a12r"></i>
				</div>
			</li>
		</ul>

		<mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>

	</div>
</template>

<script>
	import { Actionsheet } from 'mint-ui';
	export default {
		data() {
			return {
				isDefault: false,
				avatar: "../../../static/images/avatar.gif",
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
			onAvatar: function() {
				this.sheetVisible = !this.sheetVisible;
			}
		}
	}
</script>
<style scoped="scoped">
	@import '../../assets/css/set-nav.css';
	.mint-switch {
		position: absolute;
		right: .24rem;
		top: 50%;
		margin-top: -16px;
	}
</style>