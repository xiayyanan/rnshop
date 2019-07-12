<template>
	<div id="address">
		<v-header :header="header">
			<span slot="rnui-opn" class="h-close" @click="$closes"></span>
		</v-header>
		<div class="rnui-footer">
			<button class="btn f-full-btn" @click="onaddAddress">新增地址</button>
		</div>
		<div class="rnui-content">
			<ul class="address-list">
				<li class="item" v-for="(item,index) in cdata">
					<p class="hd">
						<span class="name">{{item.name}}</span>
						<span class="phone">{{item.phone}}</span>
					</p>
					<p class="info">{{item.text}}{{item.address}}</p>
					<input name="addr" type="radio" :value="index" v-model="item.active" class="rcheck" @click.stop.prevent="onSelectedAddr(index)">
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import store from '@/vuex/store.js'
	import header from "@/common/header.vue"
	export default {
		components: {
			'v-header': header
		},
		props: ['cdata'],
		data() {
			return {
				header: {
					title: '选择收货地址',
					back: {
						isBack: false
					}
				}
			}
		},
		computed: {
			addressIndex: function() {
				return this.$store.state.order.addressIndex;
			}
		},
		mounted() {
			var _self = this;
			this.cdata.forEach(function(item) {
				let areas = '';
				item.areas.forEach(function(itemsub) {
					areas += itemsub.text + " ";
				})
				_self.$set(item, 'text', areas);
			})
		},
		methods: {
			onaddAddress: function() {
				this.$closes();
				this.$router.push('/addressAdd');
			},

			onSelectedAddr: function(i) {
				this.cdata.forEach(function(item) {
					delete item.active;
				})
				this.cdata[i].active = i;
				store.commit('CHANGE_ADDRESSINDEX', i);
				this.$closes();
			}
		}
	}
</script>

<style scoped="scoped">
	.address-list .item {
		padding: .24rem 1rem .24rem .24rem;
		overflow: hidden;
		background: #FFF;
		position: relative;
	}
	
	.address-list .item:after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 1px;
		background: #e5e8ea;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}
	
	.address-list .hd {
		height: .4rem;
		line-height: .4rem;
		font-size: .3rem;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	
	.address-list .rcheck {
		position: absolute;
		display: block;
		right: .3rem;
		top: 50%;
		margin: 0px;
		margin-top: -10px;
	}
	
	.address-list .info {
		line-height: .36rem;
		color: #62666d;
		font-size: .28rem;
		margin-top: .1rem;
	}
</style>