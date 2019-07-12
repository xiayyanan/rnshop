<template lang="html">
	<div id="myRetreat">
		<v-header :header="header"></v-header>
		<div class="rnui-content">
			<v-orderList :myRetreatData="myRetreatData"></v-orderList>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import orderList from "@/components/myRetreat/orderList.vue"
	import myRetreat from '@/http/mock.js' //模拟数据
	export default {
		components: {
			'v-header': header,
			'v-orderList':orderList
		},
		data() {
			return {
				header: {
					title: '退款售后',
					back: {
						isBack: true
					}
				},
				myRetreatData: []
			}
		},
		beforeCreate() {
			this.$api({
				method: 'post',
				url: '/myRetreat'
			}).then((response) => {
				let datas=response.data.myRetreat.myRetreatData;
				this.myRetreatData = datas;
			}).catch(function(error) {
				console.log(error);
			})
		}
	}
</script>
<style scoped="scoped">
	.h-set {
		width: 44px;
		height: 44px;
		line-height: 44px;
		font-size: 24px;
		text-align: center;
		display: block;
		position: absolute;
		color: #FFF;
		left: 0;
		top: 0;
		z-index: 5;
		font-family: "iconfont";
	}
	
	.h-set:before {
		content: '\e837';
	}
	
	.h-msg {
		width: 44px;
		height: 44px;
		line-height: 44px;
		font-size: 24px;
		text-align: center;
		display: block;
		position: absolute;
		color: #FFF;
		left: auto;
		right: 0;
		top: 0;
		z-index: 5;
		font-family: "iconfont";
	}
	
	.h-msg:before {
		content: '\e831';
	}
	
	.h-msg .num {
		background: #FFF;
		position: absolute;
		right: 6px;
		top: 6px;
		width: 16px;
		height: 16px;
		text-align: center;
		line-height: 16px;
		font-size: 9px;
		color: #ff1c1c;
		-webkit-border-radius: 10px;
		border-radius: 10px;
	}
</style>