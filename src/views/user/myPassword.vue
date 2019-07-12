<template lang="html">
	<div id="mySet">
		<v-header :header="header"></v-header>
		<div class="rnui-content">
			<v-pwd></v-pwd>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import pwd from "@/components/mySet/password.vue"
	export default {
		components: {
			'v-header': header,
			'v-pwd':pwd
		},
		data() {
			return {
				header: {
					title: '修改密码',
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