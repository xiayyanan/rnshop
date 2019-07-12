<template lang="html">
	<div id="mySet">
		<v-header :header="header"></v-header>
		<div class="rnui-content">
			<v-info></v-info>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import info from "@/components/mySet/info.vue"
	export default {
		components: {
			'v-header': header,
			'v-info':info
		},
		data() {
			return {
				header: {
					title: '基本资料',
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