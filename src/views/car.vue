<template lang="html">
	<div class="index">
		<v-header :header="header">
			<span slot="rnui-opn" class="edit-text" @click="onMang">{{etext}}</span>
		</v-header>
		<v-tabBar></v-tabBar>
		<div class="rnui-content">
			<v-cars :carData="carData" ref="mang" v-if="carData.length!=0"></v-cars>
			<v-carnone v-if="carData.length==0"></v-carnone>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import tabBar from "@/common/tabBar.vue"
	import cars from "@/components/car/car.vue"
	import carnone from "@/components/car/carnone.vue"
	import car from '@/http/mock.js' //模拟数据
	export default {
		components: {
			'v-header': header,
			'v-tabBar': tabBar,
			'v-cars': cars,
			'v-carnone': carnone
		},
		data() {
			return {
				header: {
					title: '购物车',
					back: {
						isBack: true
					}
				},
				etext: "管理",
				carData: []
			}
		},
		methods: {
			onMang() {
				this.etext = (this.etext == "管理") ? "完成" : "管理";
				this.$refs.mang.onMang();
			}
		},
		beforeCreate() {
			this.$api({
				method: 'post',
				url: '/car'
			}).then((response) => {
				this.carData = response.data.car.carData;
			}).catch(function(error) {
				console.log(error);
			})
		}
	}
</script>
<style scoped="scoped">

</style>