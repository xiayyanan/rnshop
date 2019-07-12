<template lang="html">
	<div id="mySpread">
		<v-header :header="header"></v-header>
		<div class="rnui-content">
			<v-spread></v-spread>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import spread from "@/components/mySpread/spread.vue"
	import myFunds from '@/http/mock.js' //模拟数据
	export default {
		components: {
			'v-header': header,
			'v-spread':spread
		},
		data() {
			return {
				header: {
					title: '我的分销',
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