<template lang="html">
	<div id="about">
		<v-header :header="header"></v-header>
		<div class="rnui-content">
			<v-help :helpData="helpData"></v-help>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import help from "@/components/mySet/help.vue"
	import mock from '@/http/mock.js' //模拟数据
	export default {
		components: {
			'v-header': header,
			'v-help': help
		},
		data() {
			return {
				header: {
					title: '帮助中心',
					back: {
						isBack: true
					}
				},
				helpData:[]
			}
		},
		beforeCreate() {
			this.$api({
				method: 'post',
				url: '/help'
			}).then((response) => {
				let datas = response.data.help.helpData;
				this.helpData = datas;
			}).catch(function(error) {
				console.log(error);
			})
		}
	}
</script>
<style scoped="scoped">

</style>