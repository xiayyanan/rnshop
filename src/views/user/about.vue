<template lang="html">
	<div id="about">
		<v-header :header="header"></v-header>
		<div class="rnui-content">
			<v-about></v-about>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import about from "@/components/mySet/about.vue"
	import mock from '@/http/mock.js' //模拟数据
	export default {
		components: {
			'v-header': header,
			'v-about': about
		},
		data() {
			return {
				header: {
					title: '关于我们',
					back: {
						isBack: true
					}
				}
			}
		}
	}
</script>
<style scoped="scoped">

</style>