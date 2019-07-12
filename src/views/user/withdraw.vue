<template lang="html">
	<div id="withdraw">
		<v-header :header="header"></v-header>
		<footer class="rnui-footer">
			<button class="btn f-full-btn">提交</button>
		</footer>
		<div class="rnui-content">
			<v-form></v-form>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import form from "@/components/withdraw/form.vue"
	export default {
		components: {
			'v-header': header,
			'v-form': form
		},
		data() {
			return {
				header: {
					title: '提现',
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