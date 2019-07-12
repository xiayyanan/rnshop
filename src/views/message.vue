<template lang="html">
	<div class="index">
		<v-header :header="header"></v-header>
		<div class="rnui-content">
			<v-message :messageData="messageData"></v-message>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import message from "@/components/message/message.vue"
	import mock from '@/http/mock.js' //模拟数据
	export default {
		components: {
			'v-header': header,
			'v-message':message
		},
		data() {
			return {
				header: {
					title:"消息通知",
					back: {
						isBack: true
					}
				},
				messageData:[]
			}
		},
		beforeCreate(){
			this.$api({
				method: 'post',
				url: '/message'
			}).then((response) => {
				this.messageData = response.data.message.messageData;
			}).catch(function(error) {
				console.log(error);
			})
		}
	}
</script>
<style scoped="scoped">
</style>