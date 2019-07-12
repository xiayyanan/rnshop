<template lang="html">
	<div id="list">
		<v-header :header="header"></v-header>
		<v-bar @getSort="onSort" @getFilter="onFilter"></v-bar>
		<div class="rnui-content">
			<v-list :goodsData="goodsData"></v-list>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import sideslip from '@/components/rn-sideslip/rn-sideslip.js'
	Vue.use(sideslip);

	import header from "@/common/header.vue"
	import list from "@/components/list/list.vue"
	import bar from "@/components/list/bar.vue"
	import sort from '@/components/list/sort.vue'
	import filter from '@/components/list/filter.vue'
	import mock from '@/http/mock.js' //模拟数据
	import Bus from '@/bus/bus.js'
	export default {
		components: {
			'v-header': header,
			'v-bar': bar,
			'v-list': list
		},
		data() {
			return {
				header: {
					title: '商品列表',
					back: {
						isBack: true
					}
				},
				isSort: false,
				sortOpt: {
					isClose: false,
					direction: 'top',
					domStyle: {
						top: '84px',
						zIndex: 100
					},
					bgStyle: {
						zIndex: 99
					},
					content: sort,
					cdata: {
						sorted:""
					}
				},
				filterOpt: {
					isClose: false,
					direction: 'right',
					domStyle: {
						top: 0,
						width:"auto",
						left:"44px",
						zIndex: 300
					},
					bgStyle: {
						zIndex: 299
					},
					content: filter,
					cdata: {
						brandData:[],
						categoryData:[]
					}
				},
				goodsData: []
			}
		},
		mounted() {
			Bus.$on('isSort', (data) => {
				this.$set(this.$data,'isSort',data);
				this.onSort();
			});
			
			Bus.$on('sorted', (data) => {
				this.$set(this.$data.sortOpt.cdata,'sorted',data);
			});
		},
		methods: {
			onSort: function() {
				if(this.isSort) {
					this.$mySideslip(this.sortOpt);
				} else {
					this.$closes();
				}
			},
			onFilter:function(){
				this.$mySideslip(this.filterOpt);
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
			
			this.$api({
				method: 'post',
				url: '/myShop'
			}).then((response) => {
				this.$set(this.filterOpt.cdata,'brandData',response.data.myShop.myShopData);
			}).catch(function(error) {
				console.log(error);
			})
			
			this.$api({
				method: 'post',
				url: '/category'
			}).then((response) => {
				let arr=[];
				response.data.category.forEach(function(item,index){
					arr.push({'name':item.name});
				});
				this.$set(this.filterOpt.cdata,'categoryData',arr);
			}).catch(function(error) {
				console.log(error);
			})
		}
	}
</script>
<style scoped="scoped">

</style>