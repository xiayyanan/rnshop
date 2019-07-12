<template>
	<div id="address">
		<ul class="form-list bbline">
			<li class="item">
				<span class="name">收货人</span>
				<input type="text" class="txt" value="" placeholder="请输入收货人姓名">
			</li>

			<li class="item">
				<span class="name">省/市/区</span>
				<div class="input-box" @click.stop.prevent="onCity">
					<input type="text" class="txt" v-model="citySelected" readonly="readonly" placeholder="请选择省/市/区">
					<i class="iconfont icon-a12b"></i>
				</div>
			</li>

			<li class="item">
				<span class="name">详细地址</span>
				<input type="text" class="txt" value="" placeholder="请输入街道门牌信息">
			</li>

			<li class="item">
				<span class="name">联系电话</span>
				<input type="text" class="txt" value="" placeholder="请输入手机号或座机号码">
			</li>

			<li class="item">
				<span class="name">设为默认地址</span>
				<mt-switch v-model="isDefault"></mt-switch>
			</li>
		</ul>
	</div>
</template>

<script>
	import Vue from 'vue'
	import sideslip from '@/components/rn-sideslip/rn-sideslip.js'
	Vue.use(sideslip);
	import city from './city.vue'
	import Bus from '../../bus/bus.js'
	export default {
		data() {
			return {
				isDefault: false,
				citySelected: '',
				opts: {
					isClose: false,
					direction: 'bottom',
					domStyle: {
						top: '2rem',
						bottom: "0px",
					},
					content: city,
					cdata: {
						level: 3,
						citySelected: []
					}
				}
			}
		},
		mounted() {
			Bus.$on('cityed', (data) => {
				this.opts.cdata.citySelected = data;
				let _slef = this;
				let arr = [];
				data.forEach(function(item, index, array) {
					this.push(item.text)
				}, arr);
				_slef.citySelected = arr.join();
			});
		},
		methods: {
			onCity: function() {
				this.$mySideslip(this.opts);
			}
		}
	}
</script>

<style scoped="scoped">
	@import "../../assets/css/form-list.css";
	.mint-switch {
		position: absolute;
		right: .24rem;
		top: 50%;
		margin-top: -16px;
	}
</style>