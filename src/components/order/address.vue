<template>
	<div id="address">
		<div class="order-addr bbline" v-if="defaultAddrees" @click="onSelectAddr">
			<i class="icon-p-shdz iconfont"></i>
			<div class="hd">
				<span class="name">{{defaultAddrees.name}}</span>
				<span class="phone">{{defaultAddrees.phone}}</span>
			</div>
			<div class="info">{{defaultAddrees.text}}{{defaultAddrees.address}}</div>
		</div>
		<div class="order-addr bbline" v-if="!defaultAddrees" @click="onSelectAddr">
			<i class="icon-p-shdz iconfont"></i>
			<div class="add-text">新增收货地址</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import sideslip from '@/components/rn-sideslip/rn-sideslip.js'
	Vue.use(sideslip);
	import addressList from '@/components/address/addressList.vue'
	export default {
		props: ['defaultAddrees','addressData'],
		data() {
			return {
				index: this.$store.state.order.addressIndex,
				opts: {
					isClose: false,
					direction: 'bottom',
					domStyle: {
						top: '2rem',
						bottom: "0px",
						background: '#f5f8fa'
					},
					content: addressList,
					cdata: {}
				}
			}
		},
		methods: {
			onSelectAddr: function() {
				this.$mySideslip(this.opts);
			}
		},
		computed: {
			addressIndex: function() {
				return this.$store.state.order.addressIndex
			}
		},
		mounted(){
			//console.log(this.defaultAddrees)
		},
		watch: {
			addressData: function(newVal, oldVal) {
//				let i = this.$store.state.order.addressIndex;
//				this.defaultAddrees = newVal[i];
//				let areas = '';
//				this.defaultAddrees.areas.forEach(function(item) {
//					areas += item.text + " ";
//				})
//				this.$set(this.defaultAddrees, 'text', areas);
				this.opts.cdata = newVal;
			}
		}
	}
</script>

<style scoped="scoped">
	.order-addr {
		padding: .24rem .24rem .24rem .96rem;
		background: #fff;
		position: relative;
		display: block;
	}
	
	.order-addr .icon-p-shdz {
		width: .48rem;
		height: .48rem;
		line-height: .48rem;
		font-size: .48rem;
		display: block;
		position: absolute;
		left: .24rem;
		top: 50%;
		margin-top: -.24rem;
		color: #61646c;
	}
	
	.order-addr .hd {
		height: .48rem;
		line-height: .48rem;
		font-size: .3rem;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	
	.order-addr .info {
		line-height: .36rem;
		color: #62666d;
		padding-right: .3rem;
		position: relative;
		font-size: .26rem;
		margin-top: .08rem;
	}
	
	.order-addr .info:before {
		content: '\e7af';
		font-family: "iconfont";
		display: block;
		position: absolute;
		right: -5px;
		top: 3px;
		width: 16px;
		height: 16px;
		line-height: 16px;
		font-size: 16px;
		color: #aaa;
	}
	
	.add-text {
		width: 100%;
		height: .48rem;
		font-size: .3rem;
		position: relative;
	}
	
	.add-text:before {
		font-family: "iconfont";
		width: 16px;
		height: 16px;
		position: absolute;
		right: -5px;
		top: 50%;
		margin-top: -8px;
		color: #c2cccd;
		font-weight: bold;
		content: "\e7af";
	}
</style>