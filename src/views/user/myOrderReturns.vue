<template lang="html">
	<div id="myOrder">
		<v-header :header="header"></v-header>
		<footer class="rnui-footer">
			<button class="btn f-full-btn">提交</button>
		</footer>
		<div class="rnui-content">
			<v-goods></v-goods>
			<v-form></v-form>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import goods from "@/components/myOrderReturns/goods.vue"
	import form from "@/components/myOrderReturns/form.vue"
	export default {
		components: {
			'v-header': header,
			'v-goods': goods,
			'v-form':form
		},
		data() {
			return {
				header: {
					title: '申请退款',
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