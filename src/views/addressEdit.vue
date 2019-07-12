<template lang="html">
	<div class="index">
		<v-header :header="header"></v-header>
		<div class="rnui-footer">
			<button class="btn f-full-btn" @click="onSend">提交</button>
		</div>
		<div class="rnui-content">
			<v-edit :addressData="addressData"></v-edit>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import edit from "@/components/address/edit.vue"
	import address from "@/http/address.js"
	export default {
		components: {
			'v-header': header,
			'v-edit': edit
		},
		data() {
			return {
				header: {
					title: '修改地址',
					back: {
						isBack: true
					}
				},
				addressData: {}
			}
		},
		methods: {
			onSend: function() {
				this.$router.go(-1);
			}
		},
		mounted() {
			let i = this.$route.query.id;
			this.addressData = address.addressData.filter(function(item,index) {
				return(index == i);
			})[0];
		}
	}
</script>
<style scoped="scoped">

</style>