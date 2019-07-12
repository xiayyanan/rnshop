<template lang="html">
	<div class="index">
		<v-header :header="header">
			<div slot="rnui-opn">
				<router-link to="/car" class="h-car">
					<span class="carnum">1</span>
				</router-link>
			</div>
		</v-header>
		<div class="rnui-content">
			<v-evaluate :evaluateData="evaluateData"></v-evaluate>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import evaluate from "@/components/detail/evaluate.vue"
	import detail from '@/http/mock.js' //模拟数据
	export default {
		components: {
			'v-header': header,
			'v-evaluate': evaluate
		},
		data() {
			return {
				header: {
					title: '评论',
					back: {
						isBack: true
					}
				},
				evaluateData: {}
			}
		},

		beforeCreate() {
			this.$api({
				method: 'post',
				url: '/detail'
			}).then((response) => {
				this.evaluateData = response.data.detail.evaluateData;
			}).catch(function(error) {
				console.log(error);
			})
		}
	}
</script>
<style scoped="scoped">
	.h-car {
		width: 44px;
		height: 44px;
		font-size: 22px;
		line-height: 44px;
		text-align: center;
		display: block;
		position: absolute;
		color: #62666d;
		right: 0;
		top: 0;
		z-index: 5;
		font-family: "iconfont";
	}
	
	.h-car:before {
		content: "\e818";
	}
	
	.carnum {
		width: 18px;
		height: 18px;
		font-size: 12px;
		line-height: 18px;
		text-align: center;
		color: #fff;
		background: #ff2741;
		display: block;
		position: absolute;
		right: 3px;
		top: 3px;
		-webkit-border-radius: 18px;
		border-radius: 18px;
	}
</style>