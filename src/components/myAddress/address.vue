<template>
	<div id="myAddress">
		<ul class="address-list">
			<li class="item" v-for="(item,index) in myAddressData">
				<p class="hd">
					<span class="name">{{item.name}}</span>
					<span class="phone">{{item.phone}}</span>
				</p>
				<p class="info">{{item.text}}{{item.address}}</p>
				<div class="opn">
					<div class="setdefault">
						<input name="addr" type="radio" class="rcheck" :value="index" :checked="item.default">
						<span>设为默认地址</span>
					</div>
					<div class="btn-box">
						<router-link :to="{ name: 'addressEdit', query: { id: index }}" class="btn bbgf">编辑</router-link>
						<button @click="onDelete(index)" class="btn bbgf">删除</button>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	export default {
		props: {
			myAddressData: {
				type: Array,
				default: function() {
					return []
				}
			}
		},
		data() {
			return {

			}
		},
		methods: {
			onDelete(i) {
				MessageBox.confirm('确定删除该收获地址吗?', '提示').then(action => {
					this.$delete(this.myAddressData, i);
				}).catch((error) => {
					console.log(error)
				});
			}
		}
	}
</script>
<style scoped="scoped">
	.address-list .item {
		margin-top: .2rem;
		padding: .3rem .3rem 0;
		overflow: hidden;
		background: #FFF;
		position: relative;
	}
	.address-list .hd {
		height: .4rem;
		line-height: .4rem;
		font-size: .3rem;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	
	.address-list .info {
		line-height: .36rem;
		font-size: .26rem;
		margin-top: .12rem;
		color: #62666D;
	}
	
	.address-list .opn {
		margin: .2rem -.3rem 0;
		padding: .2rem .3rem;
		position: relative;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	
	.address-list .opn:before {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		border-top: #d5d8da 1px dashed;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}
	
	.address-list .setdefault {
		font-size: .26rem;
		height: 28px;
		line-height: 28px;
		padding-left: 30px;
		position: relative;
		display: block;
	}
	
	.address-list .rcheck {
		position: absolute;
		display: block;
		left: 0;
		top: 50%;
		margin: 0px;
		margin-top: -10px;
	}
	
	.address-list .btn {
		height: 28px;
		line-height: 26px;
		display: inline-block;
		vertical-align: middle;
		margin-left: .18rem;
		padding: 0 8px;
		min-width: 64px;
		font-size: .26rem;
	}
	
	.address-list .btn.bbgf {
		color: #05080a;
		border: #b5b8ba 1px solid;
	}
</style>