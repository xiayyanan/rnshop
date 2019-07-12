<template lang="html">
	<div id="myOrder">
		<v-header :header="header"></v-header>
		<div class="rnui-content">
			<v-goods></v-goods>
			<v-menu></v-menu>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import goods from "@/components/myOrderService/goods.vue"
	import menu from "@/components/myOrderService/menu.vue"
	export default {
		components: {
			'v-header': header,
			'v-goods': goods,
			'v-menu':menu
		},
		data() {
			return {
				header: {
					title: '申请售后',
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