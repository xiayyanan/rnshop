<template lang="html">
	<div id="mySet">
		<v-header :header="header"></v-header>
		<div class="rnui-content">
			<v-verified></v-verified>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import verified from "@/components/mySet/verified.vue"
	export default {
		components: {
			'v-header': header,
			'v-verified':verified
		},
		data() {
			return {
				header: {
					title: '实名认证',
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