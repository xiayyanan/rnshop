<template lang="html">
	<div id="news">
		<v-header :header="header"></v-header>
		<div class="rnui-content">
			<v-nshow :nshowData="nshowData"></v-nshow>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import nshow from "@/components/news/nshow.vue"
	import mock from '@/http/mock.js' //模拟数据
	export default {
		components: {
			'v-header': header,
			'v-nshow': nshow
		},
		data() {
			return {
				header: {
					title: '新闻详情',
					back: {
						isBack: true
					}
				},
				nshowData: []
			}
		},

		beforeCreate() {
			this.$api({
				method: 'post',
				url: '/news'
			}).then((response) => {
				let i = this.$route.query.id;
				this.nshowData = response.data.news.newsData.filter(function(item, index) {
					return(index == i);
				})[0];
			}).catch(function(error) {
				console.log(error);
			})
		}
	}
</script>
<style scoped="scoped">

</style>