<template lang="html">
	<div id="myRetreat">
		<v-header :header="header"></v-header>
		<div class="rnui-content">
			<v-details></v-details>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import details from "@/components/myRetreatDetails/details.vue"
	export default {
		components: {
			'v-header': header,
			'v-details':details
		},
		data() {
			return {
				header: {
					title: '退款详情',
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