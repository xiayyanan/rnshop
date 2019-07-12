<template lang="html">
	<div class="index">
		<v-header :header="header"></v-header>
		<div class="rnui-footer">
			<button class="btn f-full-btn" @click="onSend">提交</button>
		</div>
		<div class="rnui-content">
			<v-addressAdd></v-addressAdd>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import addressAdd from "@/components/address/addressAdd.vue"
	export default {
		components: {
			'v-header': header,
			'v-addressAdd': addressAdd
		},
		data() {
			return {
				header: {
					title: '新增地址',
					back: {
						isBack: true
					}
				}
			}
		},
		methods: {
			onSend:function(){
				this.$router.go(-1);
			}
		}
	}
</script>
<style scoped="scoped">

</style>