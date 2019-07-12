<template>
	<ul class="form-list f-list-mt10 mt10">
		<li class="item arrow" @click.stop.prevent="onStatus">
			<span class="name">货物状态</span>
			<input type="text" class="txt tar" v-model="status" readonly="readonly" placeholder="请选择">
			<i class="iconfont icon-a12r"></i>
		</li>
		<li class="item arrow" @click.stop.prevent="onReason">
			<span class="name">退款原因</span>
			<input type="text" class="txt tar" v-model="reason" readonly="readonly" placeholder="请选择">
			<i class="iconfont icon-a12r"></i>
		</li>
		<li class="item">
			<span class="name">退款金额</span>
			<div class="tap red tar">¥ 8319.00</div>
		</li>
		<li class="item">
			<span class="name">退款说明</span>
			<input type="text" class="txt tar" placeholder="选填">
		</li>

		<li class="item up-img">
			<div class="bts">上传凭证</div>
			<ul class="upImgList">
				<li class="itemSub" v-for="item in imgList">
					<span class="del"></span>
					<div class="imgbox">
						<img :src="item.thumb">
					</div>
				</li>
				<li class="itemSub">
					<div class="imgbox">
						<img src="../../../static/images/up-img.png">
					</div>
				</li>
			</ul>
		</li>
	</ul>
</template>

<script>
	import Vue from 'vue'
	import sideslip from '@/components/rn-sideslip/rn-sideslip.js'
	Vue.use(sideslip);
	import vstatus from '@/components/myOrderReturns/status.vue'
	import vreason from '@/components/myOrderReturns/reason.vue'
	import Bus from '../../bus/bus.js'
	export default {
		data() {
			return {
				imgList: [{
						thumb: require("../../assets/images/example/p1.jpg")
					},
					{
						thumb: require("../../assets/images/example/p2.jpg")
					},
					{
						thumb: require("../../assets/images/example/p3.jpg")
					}
				],
				status:'',
				reason:'',
				statusOpt: {
					isClose: false,
					direction: 'bottom',
					domStyle: {
						bottom: "0px"
					},
					content: vstatus,
					cdata: {
						index:undefined
					}
				},
				reasonOpt: {
					isClose: false,
					direction: 'bottom',
					domStyle: {
						bottom: "0px"
					},
					content: vreason,
					cdata: {
						index:undefined
					}
				}
			}
		},
		mounted() {
			Bus.$on('status', (data) => {
				this.status = data.name;
				this.statusOpt.cdata.index=data.index;
			});
			
			Bus.$on('reason', (data) => {
				this.reason = data.name;
				this.reasonOpt.cdata.index=data.index;
			});
		},
		methods:{
			onStatus:function(){
				this.$mySideslip(this.statusOpt);
			},
			onReason:function(){
				this.$mySideslip(this.reasonOpt);
			}
		}
	}
</script>

<style scoped="scoped">
	@import "../../assets/css/form-list.css";
</style>