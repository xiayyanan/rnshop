<template>
	<div id="car">
		<div class="total-box fixed">
			<div class="texts check">
				<input type="checkbox" class="rcheck" v-model="checkCars" @touchend.stop.prevent="checkCar">
				<span>全选</span>
				<div class="torder" v-if="!isMang">
					<span>合计：</span>
					<span class="red">¥{{tmoney}}</span>
				</div>
			</div>
			<router-link to="order" class="btn gobuy" :class="{'btn-fail':tamount==0}" v-if="!isMang">结算({{tamount}})</router-link>
			<div class="mang-opn" v-if="isMang">
				<button class="btn btn-orange">移入收藏夹</button>
				<button class="btn">删除</button>
			</div>
		</div>
		<div class="cars">
			<div class="caritem" v-for="(itemA,idxA) in carData">
				<div class="carTit">
					<input type="checkbox" class="rcheck" v-model="itemA.active" @change="checkShop(idxA)">
					<span class="bts">{{itemA.store}}</span>
				</div>
				<ul class="carList">
					<li class="item" v-for="(itemB,idxB) in itemA['carGoods']">
						<mt-cell-swipe :right="[{content: '删除', style: { background: 'red', color: '#fff' }}]">
							<router-link :to="itemB.pagePath" class="tap carGoods" slot="title">
								<input type="checkbox" class="rcheck" v-model="itemB.active" @touchend.stop.prevent="checkGoods(idxA,idxB)">
								<div class="imgbox"><img :src="itemB.thumb"></div>
								<div class="content">
									<div class="hd">
										<h2 class="name">{{itemB.name}}</h2>
									</div>
									<p class="attr">{{itemB.attrs}}</p>
									<div class="pay">
										<span class="price">¥ {{itemB.price}}</span>
										<div class="amount">
											<span class="Reduce" :class="{ReduceNot:itemB.amount<2}" @click.stop.prevent="onReduce(idxA,idxB)"></span>
											<input type="number" v-model="itemB.amount" value="itemB.amount" />
											<span class="Increase" @click.stop.prevent="onIncrease(idxA,idxB)"></span>
										</div>
									</div>
								</div>
							</router-link>
						</mt-cell-swipe>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['carData'],
		data() {
			return {
				checkCars: 0,
				tamount: 0,
				tmoney: (0).toFixed(2),
				isMang: false
			}
		},
		methods: {
			onReduce(i, j) {
				this.carData[i].carGoods[j].amount > 1 ? this.carData[i].carGoods[j].amount-- : 1;
				this.counts();
			},
			onIncrease(i, j) {
				this.carData[i].carGoods[j].amount++;
				this.counts();
			},
			counts() {
				let money = 0;
				let amount = 0;
				this.carData.forEach(function(itemA, idxA, array) {
					itemA.carGoods.forEach(function(itemB, idxB, array) {
						if(itemB.active) {
							amount++;
							money += parseFloat(itemB.price) * itemB.amount;
						}
					})
				})
				this.tmoney = money.toFixed(2);
				this.tamount = amount;
			},
			isCheckGoods(i) {
				let check = this.carData[i].carGoods.every(function(elem, index, arr) {
					return elem.active == true;
				});
				this.carData[i].active = check;
				this.isCheckShop();
			},
			isCheckShop() {
				this.checkCars = this.carData.every(function(elem, index, arr) {
					return elem.active == true;
				})
			},
			checkCar() {
				this.checkCars = !this.checkCars;
				var _self = this;
				this.carData.forEach(function(itemA, idxA, array) {
					itemA.active = _self.checkCars;
					itemA.carGoods.forEach(function(itemB, idxB, array) {
						itemB.active = _self.checkCars;
					})
				})
				this.isCheckShop();
				this.counts();
				return false;
			},
			checkShop(i) {
				var _self = this;
				this.carData[i].carGoods.forEach(function(itemB, idxB, array) {
					itemB.active = _self.carData[i].active;
				})
				this.isCheckShop();
				this.counts();
			},
			checkGoods(i, j) {
				var _self = this;
				this.carData[i].carGoods[j].active = !this.carData[i].carGoods[j].active;
				this.isCheckGoods(i);
				this.counts();
			},
			onMang() {
				this.isMang = !this.isMang;
			}
		}
	}
</script>

<style lang="less">
	@import "../../assets/css/amount.css";
	@import '../../assets/css/reset.less';
	.title {
		line-height: 1;
		.rem(height, 48);
		.rem(font-size, 48)
	}
	/*购物车开始*/
	
	.caritem {
		background: #fff;
		margin: .24rem;
		border-radius: .1rem;
		overflow: hidden;
	}
	
	.carTit {
		height: .88rem;
		background: #FFF;
		line-height: .48rem;
		font-size: .3rem;
		position: relative;
		padding: .2rem .32rem .2rem .96rem;
		border-radius: .1rem .1rem 0 0;
		display: flex;
		justify-content: space-between;
	}
	
	.carTit:after {
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
	
	.carTit .rcheck {
		display: block;
		position: absolute;
		left: .3rem;
		top: 50%;
		margin-top: -10px;
	}
	
	.carList {
		position: relative;
	}
	
	.carList .item {
		position: relative;
		margin-bottom: 1px;
	}
	
	.carList .rcheck {
		display: block;
		position: absolute;
		left: .3rem;
		top: 50%;
		margin-top: -10px;
		z-index: 3;
	}
	
	.carGoods {
		padding: .24rem .24rem .24rem .96rem;
		min-height: 2.4rem;
		position: relative;
		z-index: 2;
		background: #FFF;
		overflow: hidden;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	
	.carGoods .imgbox {
		width: 1.8rem;
		height: 1.8rem;
		flex-shrink: 0;
		margin-right: .24rem;
	}
	
	.carGoods .content {
		width: 100%;
	}
	
	.carGoods .hd {
		height: .72rem;
	}
	
	.carGoods .name {
		font-weight: normal;
		line-height: .36rem;
		font-size: 0.28rem;
		display: -webkit-box;
		overflow: hidden;
		white-space: normal!important;
		text-overflow: ellipsis;
		word-wrap: break-word;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	
	.carList .edit .name {
		display: none;
	}
	
	.carGoods .attr {
		line-height: .36rem;
		font-size: .2rem;
		color: #92999D;
		margin-top: .1rem;
		padding: .1rem .4rem .1rem .16rem;
		background: #f5f5f5;
		border-radius: .1rem;
		position: relative;
	}
	
	.carGoods .attr:after {
		content: '\e7ae';
		font-family: "iconfont";
		font-size: 12px;
		width: 12px;
		height: 12px;
		display: block;
		position: absolute;
		right: .1rem;
		top: 50%;
		margin-top: -6px;
	}
	
	.carGoods .pay {
		display: flex;
		justify-content: space-between;
		height: 24px;
		line-height: 24px;
		font-size: .28rem;
		color: #92999D;
		margin-top: .1rem;
	}
	
	.carGoods .price {
		font-size: .3rem;
		font-weight: bold;
		color: #FF0036;
		flex-shrink: 0;
	}
	
	.carGoods .amount {
		height: 24px;
		flex-shrink: 1;
	}
	
	.amount .Reduce {
		width: 23px;
		height: 22px;
		position: relative;
		flex-shrink: 0;
	}
	
	.amount .Increase {
		width: 23px;
		height: 22px;
		position: relative;
		flex-shrink: 0;
	}
	
	.amount input {
		width: .8rem;
		height: 22px;
	}
	
	.total-box {
		height: 49px;
		position: relative;
		z-index: 99;
		display: flex;
	}
	
	.total-box.fixed {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 49px;
		background: #fff;
	}
	
	.total-box.fixed~.cars {
		padding-bottom: 49px;
	}
	
	.total-box.fixed:after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		height: 1px;
		background: #e5e8ea;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}
	
	.total-box .gobuy {
		height: 36px;
		border: none;
		display: block;
		text-align: center;
		line-height: 36px;
		font-size: .3rem;
		padding: 0 .3rem;
		border-radius: 36px;
		flex-shrink: 0;
		margin: 7px 10px 0 0;
	}
	
	.total-box .texts {
		width: 100%;
		height: 49px;
		line-height: 50px;
		padding-left: .3rem;
		font-size: .28rem;
		display: flex;
	}
	
	.total-box .texts .unit {
		font-size: .36rem;
	}
	
	.torder {
		padding-left: .2rem;
	}
	
	.total-box .check {
		padding-left: .9rem;
	}
	
	.total-box .rcheck {
		display: block;
		position: absolute;
		left: .3rem;
		top: 50%;
		margin-top: -10px;
	}
	
	.mang-opn {
		display: flex;
		padding: 10px;
		flex-shrink: 0;
	}
	
	.mang-opn .btn {
		height: 30px;
		border: none;
		line-height: 30px;
		border-radius: 30px;
	}
	
	.mang-opn .btn-orange {
		margin-right: 10px;
	}
	/*购物车结束*/
</style>
<style>
	.mint-cell-wrapper {
		padding: 0;
	}
	
	.mint-cell-swipe-button {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0 20px;
	}
</style>