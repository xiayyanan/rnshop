<template lang="html">
	<div id="myCollect">
		<v-header :header="header"></v-header>
		<div class="rnui-content">
			<v-collect :myCollectData="myCollectData"></v-collect>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import collect from "@/components/myCollect/collect.vue"
	import myCollect from '@/http/mock.js' //模拟数据
	export default {
		components: {
			'v-header': header,
			'v-collect':collect
		},
		data() {
			return {
				header: {
					title: '我的收藏',
					back: {
						isBack: true
					}
				},
				myCollectData: []
			}
		},
		beforeCreate() {
			this.$api({
				method: 'post',
				url: '/myCollect'
			}).then((response) => {
				let datas=response.data.myCollect.myCollectData;
				this.myCollectData = datas;
			}).catch(function(error) {
				console.log(error);
			})
		}
	}
</script>
<style scoped="scoped">
</style>