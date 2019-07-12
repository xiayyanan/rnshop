<template lang="html">
	<div class="index">
		<v-header :header="header">
			<div slot="rnui-opn" class="search">
				<div class="input-box">
					<i class="i-sousuo"></i>
					<i class="clearInput" v-if="svalue.length>0" @click="clearInput('svalue')"></i>
					<input type="search" v-model="svalue" class="txt" placeholder="搜索店内商品">
				</div>
			</div>
			<router-link slot="rnui-opn" to="/category" class="h-menu"></router-link>
		</v-header>
		<div class="rnui-content">
			<v-base></v-base>
			<v-menu></v-menu>
			<v-list :goodsData="goodsData"></v-list>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import base from "@/components/shop/base.vue"
	import menu from "@/components/shop/menu.vue"
	import list from "@/components/list/list.vue"
	import mock from '@/http/mock.js' //模拟数据
	export default {
		components: {
			'v-header': header,
			'v-list': list,
			'v-base':base,
			'v-menu':menu
		},
		data() {
			return {
				header: {
					back: {
						isBack: true
					},
					isRed: true
				},
				svalue:'',
				goodsData: []
			}
		},
		methods:{
			clearInput:function(obj){
				this.$set(this.$data, obj, '');
			}
		},
		beforeCreate() {
			this.$api({
				method: 'post',
				url: '/list'
			}).then((response) => {
				this.goodsData = response.data.list.goodsData;
			}).catch(function(error) {
				console.log(error);
			})
		}
	}
</script>
<style scoped="scoped">
	@import '../assets/css/search.css';
</style>