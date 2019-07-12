<template lang="html">
	<div id="help">
		<v-header :header="header"></v-header>
		<div class="rnui-content">
			<v-show></v-show>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import show from "@/components/mySet/show.vue"
	export default {
		components: {
			'v-header': header,
			'v-show': show
		},
		data() {
			return {
				header: {
					title: '帮助中心',
					back: {
						isBack: true
					}
				}
			}
		},
		beforeCreate() {
			document.querySelector('body').setAttribute('style', 'background:#fff;')
		},
		beforeDestroy() {
			document.querySelector('body').removeAttribute('style')
		}
	}
</script>
<style scoped="scoped">

</style>