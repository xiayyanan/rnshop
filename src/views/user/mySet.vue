<template lang="html">
	<div id="mySet">
		<v-header :header="header"></v-header>
		<footer class="rnui-footer">
			<button class="btn f-full-btn" @click="onExit">退出</button>
		</footer>
		<div class="rnui-content">
			<v-set></v-set>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import set from "@/components/mySet/set.vue"
	export default {
		components: {
			'v-header': header,
			'v-set':set
		},
		data() {
			return {
				header: {
					title: '设置',
					back: {
						isBack: true
					}
				}
			}
		},
		methods:{
			onExit:function(){
				this.$store.commit('CHANGE_LOGIN', false);
				this.$router.push('/');
			}
		}
	}
</script>
<style scoped="scoped">

</style>