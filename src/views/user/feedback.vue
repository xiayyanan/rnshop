<template lang="html">
	<div id="mySpread">
		<v-header :header="header"></v-header>
		<div class="rnui-content">
			<v-form></v-form>
			<v-list :feedbackData="feedbackData"></v-list>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import form from "@/components/feedback/form.vue"
	import list from "@/components/feedback/list.vue"
	import mock from '@/http/mock.js' //模拟数据
	export default {
		components: {
			'v-header': header,
			'v-form': form,
			'v-list': list
		},
		data() {
			return {
				header: {
					title: '意见反馈',
					back: {
						isBack: true
					}
				},
				feedbackData:[]
			}
		},
		beforeCreate() {
			this.$api({
				method: 'post',
				url: '/feedback'
			}).then((response) => {
				let datas = response.data.feedback.feedbackData;
				this.feedbackData = datas;
			}).catch(function(error) {
				console.log(error);
			})
		}
	}
</script>
<style scoped="scoped">

</style>