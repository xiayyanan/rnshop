<template lang="html">
	<div id="about">
		<v-header :header="header"></v-header>
		<div class="rnui-content">
			<v-protocol></v-protocol>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import protocol from "@/components/mySet/protocol.vue"
	import mock from '@/http/mock.js' //模拟数据
	export default {
		components: {
			'v-header': header,
			'v-protocol': protocol
		},
		data() {
			return {
				header: {
					title: '用户协议',
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