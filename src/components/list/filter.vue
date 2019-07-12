<template>
	<div class="filterBox">
		<div class="filterScroll">
			<div class="filter-item">
				<div class="filter-item-tit">价格区间(元)</div>
				<div class="filter-price">
					<span class="input-box"><input type="text" class="input-txt" placeholder="最低价"></span>
					<span class="to">—</span>
					<span class="input-box"><input type="text" class="input-txt" placeholder="最高价"></span>
				</div>
			</div>

			<div class="filter-item">
				<div class="filter-item-tit">
					<span>品牌</span>
					<i class="iconfont icon-a12b"></i>
				</div>
				<ul class="brand-list">
					<li class="item" :class="{active:item.active}" @click="onBrand(index)" v-for="(item,index) in cdata.brandData">
						<div class="tap">
							<img :src="item.logo" class="logo">
						</div>
					</li>
				</ul>
			</div>

			<div class="filter-item">
				<div class="filter-item-tit">
					<span>类别</span>
					<i class="iconfont icon-a12b"></i>
				</div>
				<ul class="category-list">
					<li class="item" :class="{active:item.active}" @click="onCategory(index)" v-for="(item,index) in cdata.categoryData">
						<div class="tap">{{item.name}}</div>
					</li>
				</ul>
			</div>

		</div>
		<ul class="filterOpn">
			<li><button class="btn bbgf">重置</button></li>
			<li><button class="btn">确认</button></li>
		</ul>
	</div>
</template>

<script>
	import Bus from '../../bus/bus.js'
	export default {
		props: ['cdata'],
		data() {
			return {

			}
		},
		methods: {
			onBrand: function(i) {
				let _self = this;
				this.cdata.brandData.forEach(function(item) {
					_self.$set(item, 'active', false);
				})
				this.$set(this.cdata.brandData[i], 'active', true);
			},
			onCategory: function(i) {
				let _self = this;
				this.cdata.categoryData.forEach(function(item) {
					_self.$set(item, 'active', false);
				})
				this.$set(this.cdata.categoryData[i], 'active', true);
			}
		}
	}
</script>

<style scoped="scoped">
	.filterBox {
		position: relative;
		height: 100%;
		padding-bottom: 49px;
	}
	
	.filterOpn {
		width: 100%;
		height: 49px;
		position: absolute;
		left: 0;
		bottom: 0;
	}
	
	.filterOpn li {
		width: 50%;
		float: left;
	}
	
	.filterOpn li .btn {
		width: 100%;
		padding: 0;
		height: 49px;
		line-height: 48px;
		font-size: .3rem;
		-webkit-border-radius: 0;
		border-radius: 0;
	}
	
	.filterScroll {
		width: 100%;
		height: 100%;
		overflow: hidden;
		overflow-y:auto;
		-webkit-overflow-scrolling: touch;
	}
	
	.filter-item-tit {
		padding: .2rem .24rem;
		line-height: .48rem;
		font-size: .28rem;
		position: relative;
		color: #92999d;
	}
	
	.filter-item-tit:after {
		content: '';
		height: 1px;
		position: absolute;
		right: 0;
		left: 0;
		top: 0;
		background: #e5e8ea;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}
	
	.filter-item:first-child .filter-item-tit:after {
		display: none;
	}
	
	.filter-item-tit .icon-a12b {
		width: 16px;
		height: 16px;
		font-size: 16px;
		line-height: 16px;
		display: block;
		position: absolute;
		right: .2rem;
		top: 50%;
		margin-top: -8px;
		color: #999;
	}
	
	.filter-item-tit.active .icon-a12b:before {
		content: "\e7b1";
	}
	
	.filter-price {
		height: .6rem;
		position: relative;
		margin: 0 .2rem .24rem .24rem;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	
	.filter-price .to {
		height: .6rem;
		line-height: .6rem;
		color: #999;
		text-align: center;
		flex-shrink: 0;
		margin: 0 .2rem;
	}
	
	.filter-price .input-box {
		width: 50%;
	}
	
	.filter-price .input-txt {
		width: 100%;
		height: .6rem;
		padding: 0 10px;
		text-align: center;
		border: none;
		background: #f5f8fa;
		font-size: .28rem;
	}
	
	.brand-list {
		display: flex;
		flex-wrap: wrap;
		background: #FFF;
		padding: 0 0 .3rem .3rem;
	}
	
	.brand-list .item {
		width: 25%;
		background: #FFF;
		padding: 0 .24rem 0 0;
	}
	
	.brand-list .tap {
		padding: .02rem;
		border: #fff 1px solid;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		justify-content: center;
		overflow: hidden;
		border-radius: .1rem;
	}
	
	.brand-list .active .tap {
		border-color: #ff2741;
	}
	
	.brand-list .logo {
		width: 1rem;
		height: 1rem;
		margin: 0 auto;
	}
	
	.category-list {
		display: flex;
		flex-wrap: wrap;
		margin: 0 0 .24rem .24rem;
		overflow: hidden;
	}
	
	.category-list .item {
		width: 25%;
		padding: 0 .24rem .24rem 0;
	}
	
	.category-list .tap {
		border: #f5f8fa 1px solid;
		background: #f5f8fa;
		height: .6rem;
		text-align: center;
		-webkit-border-radius: 3px;
		border-radius: 3px;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		justify-content: center;
	}
	
	.category-list .active .tap {
		border-color: #ff2741;
		background: #FFF;
		color: #ff2741;
	}
</style>