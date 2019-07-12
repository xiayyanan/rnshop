<template>
	<div id="address">
		<v-header :header="header"></v-header>
		<div class="rnui-footer">
			<button class="btn f-full-btn" @click="$closes">关闭</button>
		</div>
		<div class="rnui-content">
			<ul class="list-tab">
				<li class="item" v-for="(item,index) in statusData">
					<div class="tap check">
						<span class="name">{{item.name}}</span>
						<input type="radio" :value="index" v-model="item.active" class="rcheck" @click.stop.prevent="onStatus(index)">
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import store from '@/vuex/store.js'
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
					title: '货物状态',
					back: {
						isBack: false
					}
				},
				statusData: [{
						name: "未收到货",
						id: "0"
					},
					{
						name: "已收到货",
						id: "1"
					}
				]
			}
		},
		mounted() {
			if(this.cdata.index != undefined) {
				this.$set(this.statusData[this.cdata.index], 'active', this.cdata.index);
			}
		},
		methods: {
			onStatus: function(i) {
				let _self = this;
				this.statusData.forEach(function(item) {
					_self.$delete(item, 'active');
				})
				this.$set(this.statusData[i], 'active', i);
				Bus.$emit('status', {
					name: this.statusData[i].name,
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