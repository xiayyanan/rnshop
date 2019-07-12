<template>
	<div id="address">
		<v-header :header="header"></v-header>
		<div class="rnui-footer">
			<button class="btn f-full-btn" @click="$closes">关闭</button>
		</div>
		<div class="rnui-content">
			<ul class="list-tab">
				<li class="item" v-for="(item,index) in reasonData">
					<div class="tap check">
						<span class="name">{{item.name}}</span>
						<input type="radio" :value="index" v-model="item.active" class="rcheck" @click.stop.prevent="onReason(index)">
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import Bus from '../../bus/bus.js'
	export default {
		components: {
			'v-header': header
		},
		props: ['cdata'],
		data() {
			return {
				header: {
					title: '退货原因',
					back: {
						isBack: false
					}
				},
				reasonData: [{
						name: "7天无理由退货",
						id: "0"
					},
					{
						name: "包装/商品破损/污渍",
						id: "1"
					},
					{
						name: "规格/参数与商品不符",
						id: "2"
					}
				]
			}
		},
		mounted() {
			if(this.cdata.index != undefined) {
				this.$set(this.reasonData[this.cdata.index], 'active', this.cdata.index);
			}
		},
		methods: {
			onReason: function(i) {
				let _self = this;
				this.reasonData.forEach(function(item) {
					_self.$delete(item, 'active');
				})
				this.$set(this.reasonData[i], 'active', i);
				Bus.$emit('reason', {
					name: this.reasonData[i].name,
					index: i
				});
				this.$closes();
			}
		}
	}
</script>

<style scoped="scoped">
	@import "../../assets/css/list-tab.css";
</style>