<template>
	<div id="mySet">
		<ul class="form-list f-list-mt10">
			<li class="item">
				<span class="name">昵<em class="space2"></em>称</span>
				<input type="text" class="txt" value="" placeholder="请输入昵称">
			</li>

			<li class="item">
				<span class="name">性<em class="space2"></em>别</span>
				<div class="input-box" @click="onSex">
					<input type="text" v-model="sex" class="txt" readonly="readonly" placeholder="请选择性别">
					<i class="iconfont icon-a12b"></i>
				</div>
			</li>

			<li class="item">
				<span class="name">出生年月</span>
				<div class="input-box" @click="onDate">
					<input type="text" :value="birthday" class="txt" readonly="readonly" placeholder="请选择日期">
					<i class="iconfont icon-a12b"></i>
				</div>
			</li>

			<li class="item">
				<span class="name">所在地区</span>
				<div class="input-box" @click.stop.prevent="onCity">
					<input type="text" class="txt" v-model="citySelected" readonly="readonly" placeholder="请选择所在地区">
					<i class="iconfont icon-a12b"></i>
				</div>
			</li>

			<li class="item">
				<span class="name">电子邮箱</span>
				<div class="input-box">
					<input type="text" class="txt" value="" placeholder="请输入电子邮箱">
				</div>
			</li>
		</ul>
		<div class="btn-box">
			<button class="btn">保存</button>
		</div>
		<mt-datetime-picker ref="picker" type="date" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" v-model="pickerValue" @confirm="handleConfirm">
		</mt-datetime-picker>
		<mt-actionsheet :actions="actions" v-model="sheetVisible">
		</mt-actionsheet>
	</div>
</template>

<script>
	import Vue from 'vue'
	import sideslip from '@/components/rn-sideslip/rn-sideslip.js'
	Vue.use(sideslip);
	import city from '@/components/address/city.vue'
	import Bus from '../../bus/bus.js'
	import { DatetimePicker } from 'mint-ui';
	export default {
		data() {
			return {
				isDefault: false,
				citySelected: '',
				birthday: '',
				pickerValue: new Date(),
				sheetVisible: false,
				sex: '',
				actions: [{
					name: "男",
					method: this.getSex
				}, {
					name: "女",
					method: this.getSex
				}],
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
			onDate: function() {
				this.$refs.picker.open();
			},
			handleConfirm: function(value) {
				this.birthday = value.getFullYear() + "年" + value.getMonth() + "月" + value.getDay() + "日"
			},
			onSex: function() {
				this.sheetVisible = !this.sheetVisible;
			},
			getSex: function(value) {
				this.sex = value.name;
			},
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