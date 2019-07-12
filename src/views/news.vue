<template lang="html">
	<div id="news">
		<v-header :header="header"></v-header>
		<div class="rnui-content">
			<v-news :newsData="newsData"></v-news>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import news from "@/components/news/news.vue"
	import mock from '@/http/mock.js' //模拟数据
	export default {
		components: {
			'v-header': header,
			'v-news': news
		},
		data() {
			return {
				header: {
					title: '活动公告',
					back: {
						isBack: true
					}
				},
				newsData: []
			}
		},

		beforeCreate() {
			this.$api({
				method: 'post',
				url: '/news'
			}).then((response) => {
				this.newsData = response.data.news.newsData;
			}).catch(function(error) {
				console.log(error);
			})
		}
	}
</script>
<style scoped="scoped">

</style>