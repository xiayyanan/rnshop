<template lang="html">
	<div id="mySet">
		<v-header :header="header"></v-header>
		<div class="rnui-content">
			<v-phone></v-phone>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import phone from "@/components/mySet/phone.vue"
	export default {
		components: {
			'v-header': header,
			'v-phone':phone
		},
		data() {
			return {
				header: {
					title: '手机绑定',
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