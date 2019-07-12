<template>
	<div class="orderBox" id="orderBox">
		<div class="orderSend">
			<button class="btn buy" @click="goOrder" v-if="cdata.otype=='obuy'">确定</button>
			<!--<router-link to="order" class="btn buy" @click.stop="$closes" v-if="cdata.otype=='obuy'">确定</router-link>-->
			<a href="javascript:void(0);" class="btn" @click="onAddCar" v-if="cdata.otype=='ocar'">确定</a>
			<a href="javascript:void(0);" class="btn selectadd" style="display: none;">加入购物车</a>
			<a href="order.html" class="btn selectbuy" style="display: none;">立即购买</a>
		</div>

		<div class="hd">
			<span @click="$closes" class="close"></span>
			<div class="imgbox">
				<img v-bind:src="thumb">
			</div>
			<div class="content">
				<p class="price red">¥{{price}}</p>
				<p class="text">库存 : {{inventory}}</p>
				<p class="text">已选 : {{selected}}</p>
			</div>
		</div>

		<div id="orderScroll" class="modalScrollBox">
			<div class="mui-scroll">
				<div class="orderWrap">
					<div class="orderItem" v-for="(item,idxA) in cdata.pdata.attrName">
						<div class="orderItemTit">{{item.name}}</div>
						<ul class="orderAttrlist clearfix">
							<li :class="{'active':idxB==item.active}" v-for="(itemSub,idxB) in item['value']" @click="attrChose(idxA,idxB)">
								<a href="javascript:void(0)" class="tap">{{itemSub}}</a>
							</li>
						</ul>
					</div>

					<div class="buyamount">
						<div class="bts">购买数量</div>
						<div class="amount">
							<span class="Reduce" :class="{ReduceNot:carNum<2}" @click="onReduce"></span>
							<input type="number" v-model="carNum" value="1" />
							<span class="Increase" @click="onIncrease"></span>
						</div>
					</div>

				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	import store from '@/vuex/store.js'
	import router from '@/router'
	export default {
		props: ['cdata'],
		data() {
			return {
				num:store.state.detail.carnum,
				carNum: 1,
				price: "0.00",
				inventory: '',
				selected: '',
				thumb: ''
			}
		},
		mounted() {
			this.selecteds();
		},
		methods: {
			selecteds() {
				this.selected = '';
				let arr = this.cdata.pdata.attrName;
				let current = '';
				for(let i of arr) {
					this.selected += '"' + i.value[i.active] + '" ';
					current += (i.active).toString();
				}
				let arr2 = this.cdata.pdata.attrValue.find((element) => (element.gindex == current));
				this.inventory = arr2.inventory;
				this.price = arr2.price;
				this.thumb = arr2.thumb;
			},
			onReduce() {
				this.carNum > 1 ? this.carNum-- : 1;
			},
			onIncrease() {
				this.carNum++;
			},
			attrChose(i, j) {
				this.cdata.pdata.attrName[i].active = j;
				this.selecteds();
			},
			goOrder() {
				this.$closes();
				this.$router.push('/order');
			},
			onAddCar() {
				Toast({
					message: '加入购物车成功',
					iconClass: 'add-yes'
				});
				//console.log(this.num++);
				this.num++;
				store.commit('SET_CARNUM', this.num);
				this.$closes();
			}
		}
	}
</script>

<style scoped="scoped">
	@import "../../assets/css/amount.css";
	/*下单产品属性选择开始 */
	
	.orderBox {
		width: 100%;
		height: 100%;
		background: #FFF;
		position: relative;
		padding: 100px 0 49px;
	}
	
	.orderSend {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 49px;
		font-size: 0;
		line-height: 0;
	}
	
	.orderSend .btn {
		width: 100%;
		height: 49px;
		line-height: 50px;
		border: none;
		padding: 0;
		-webkit-border-radius: 0;
		border-radius: 0;
	}
	
	.orderSend .selectbuy,
	.orderSend .selectadd {
		width: 50%;
	}
	
	.orderSend .selectadd {
		background: #e98698;
	}
	
	.orderBox .hd {
		position: absolute;
		height: 100px;
		top: 0;
		left: 0;
		right: 0;
		padding: 0 .3rem;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	
	.orderBox .hd:after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 1px;
		background: #e5e8ea;
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
	}
	
	.orderBox .hd .imgbox {
		border: #e5e8ea 1px solid;
		width: 106px;
		height: 106px;
		padding: 2px;
		margin: -24px .3rem 0 0;
		background: #FFF;
		flex-shrink: 0;
		-webkit-border-radius: 5px;
		border-radius: 5px;
	}
	
	.orderBox .hd .content {
		width: 100%;
		height: 76px;
		padding-top: .2rem;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.orderBox .hd .price {
		height: 24px;
		line-height: 24px;
		font-size: 18px;
	}
	
	.orderBox .hd .text {
		height: 20px;
		line-height: 20px;
		font-size: .28rem;
		color: #62666D;
	}
	
	.orderBox .hd .close {
		font-family: "iconfont";
		width: 44px;
		height: 44px;
		line-height: 44px;
		text-align: center;
		font-size: 20px;
		color: #62666D;
		display: block;
		position: absolute;
		right: 0;
		top: 0px;
	}
	
	.orderBox .hd .close:before {
		content: "\e819";
	}
	
	.orderWrap {
		padding: 0 .3rem;
	}
	
	.orderItem {
		position: relative;
	}
	
	.orderItem:after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 1px;
		background: #e5e8ea;
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
	}
	
	.orderItemTit {
		padding: .24rem 0 0 0;
		line-height: .48rem;
		font-size: .28rem;
		position: relative;
	}
	
	.orderAttrlist {
		padding-bottom: .3rem;
	}
	
	.orderAttrlist li {
		padding: .2rem .2rem 0 0;
		float: left;
	}
	
	.orderAttrlist .tap {
		background: #f5f8fa;
		height: .64rem;
		line-height: .64rem;
		font-size: .24rem;
		padding: 0 .2rem;
		text-align: center;
		color: #62666d;
		-webkit-border-radius: 4px;
		border-radius: 4px;
	}
	
	.orderAttrlist .active .tap {
		color: #fff;
		background: #ff2741;
	}
	
	.buyamount {
		overflow: hidden;
		padding: .24rem 0;
		position: relative;
		display: flex;
		justify-content: space-between;
	}
	
	.buyamount .amount {
		flex-shrink: 0;
	}
	
	.buyamount .bts {
		flex-shrink: 0;
		line-height: 30px;
		font-size: .28rem;
	}
	/*下单产品属性选择结束 */
</style>
<style>
	.add-yes {
		font-family: "iconfont" !important;
		color: #ff2741;
		font-size: .48rem;
		line-height: .8rem;
		width: .8rem;
		height: .8rem;
		display: block;
		margin: 0 auto;
		border:#ff2741 1px solid;
		border-radius:.8rem ;
	}
	
	.add-yes:before {
		content: "\e82f";
	}
</style>