<template lang="html">
	<div id="myCollect">
		<v-header :header="header"></v-header>
		<div class="rnui-content">
			<v-view :myViewData="myViewData"></v-view>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import view from "@/components/myView/view.vue"
	import myView from '@/http/mock.js' //模拟数据
	export default {
		components: {
			'v-header': header,
			'v-view':view
		},
		data() {
			return {
				header: {
					title: '我的足迹',
					back: {
						isBack: true
					}
				},
				myViewData: []
			}
		},
		beforeCreate() {
			this.$api({
				method: 'post',
				url: '/myView'
			}).then((response) => {
				let datas=response.data.myView.myViewData;
				this.myViewData = datas;
			}).catch(function(error) {
				console.log(error);
			})
		}
	}
</script>
<style scoped="scoped">
</style>