<template>
	<div id="city">
		<v-header :header="header">
			<span slot="rnui-opn" class="h-close" @click="onclose"></span>
		</v-header>
		<div class="citySelected bbline" v-if="citySelected.length>0">
			<span class="item" :class="{active:item.active}" v-for="(item,index) in citySelected" @click="onmodifyCity(item.idx,index)">{{item.text}}</span>
			<span class="nextTips" v-if="citySelected.length<3">{{nextTips}}</span>
		</div>
		<div class="cityWrap">
			<vue-scroll :ops="cityscroll" ref="city">
				<ul class="cityList">
					<li class="item" :class="{active:index==activeIndex}" v-for="(item,index) in cityData" @click="onchangeCity(index)" v-bind:id="'city' + index">
						{{item.text}}
					</li>
				</ul>
			</vue-scroll>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	import city from '../../http/city.data-3.js'
	import Bus from '../../bus/bus.js'
	export default {
		components: {
			'v-header': header
		},
		props: ['cdata'],
		data() {
			return {
				header: {
					title: '请选择',
					back: {
						isBack: false
					}
				},
				cityscroll: {
					vuescroll: {
						mode: 'slide',
						scroller: {
							minZoom: 1,
							maxZoom: 1
						}
					},
					scrollPanel: {
						scrollingX: false,
					},
					rail: {
						size: '3px',
					},
					bar: {
						background: 'rgba(0,0,0,.25)',
						size: '3px'
					}
				},
				citySelected: this.cdata.citySelected,
				cityData: city.cityData3,
				activeIndex: undefined,
				nextTips: ''
			}
		},
		methods: {
			findArrayIndex: function(arr) {
				for(let n = 0; n < arr.length; n++) {
					if(arr[n].active) {
						return n;
						break;
					}
				}
			},

			onmodifyCity: function(i, l) {
				let lens = l + 1;
				this.citySelected.forEach(function(item) {
					item.active = false
				})

				switch(lens) {
					case 1:
						this.cityData = city.cityData3;
						this.citySelected[0] = {
							idx: i,
							active: true,
							text: city.cityData3[i].text
						};
						break;

					case 2:
						this.cityData = city.cityData3[this.citySelected[0].idx].children;
						this.citySelected[1] = {
							idx: i,
							active: true,
							text: city.cityData3[this.citySelected[0].idx].children[i].text
						};
						break;
					case 3:
						this.cityData = city.cityData3[this.citySelected[0].idx].children[this.citySelected[1].idx].children;
						this.citySelected[2] = {
							idx: i,
							active: true,
							text: city.cityData3[this.citySelected[0].idx].children[this.citySelected[1].idx].children[i].text
						};
						break;
				}
				let active = this.findArrayIndex(this.citySelected);
				this.activeIndex = this.citySelected[active].idx;
			},
			onchangeCity: function(i) {
				let level = this.cdata.level;
				let active = this.findArrayIndex(this.citySelected);
				if(active != undefined) {
					this.citySelected.splice(active, this.citySelected.length);
				}

				let len = this.citySelected.length;

				if(len < level) {
					switch(len) {
						case 0:
							this.citySelected.push({
								idx: i,
								text: city.cityData3[i].text
							});
							this.activeIndex = undefined;
							break;
						case 1:
							this.citySelected.push({
								idx: i,
								text: city.cityData3[this.citySelected[0].idx].children[i].text
							});
							this.activeIndex = undefined;
							break;
						case 2:
							this.citySelected.push({
								idx: i,
								text: city.cityData3[this.citySelected[0].idx].children[this.citySelected[1].idx].children[i].text
							});
							this.activeIndex = undefined;
							break;
					}
				}

				let lens = this.citySelected.length;
				switch(lens) {
					case 1:
						this.cityData = city.cityData3[i].children;
						this.citySelected[0] = {
							idx: i,
							text: city.cityData3[i].text
						};
						this.nextTips="选择城市";
						if(level == 1) {
							Bus.$emit('cityed', this.citySelected);
							this.citySelected[0].active = true;
							this.$closes();
						};
						break;

					case 2:
						this.cityData = city.cityData3[this.citySelected[0].idx].children[i].children;
						this.citySelected[1] = {
							idx: i,
							text: city.cityData3[this.citySelected[0].idx].children[i].text
						};
						this.nextTips="选择区/县";
						if(level == 2) {
							Bus.$emit('cityed', this.citySelected);
							this.citySelected[1].active = true;
							this.$closes();
						};
						break;

					case 3:
						this.cityData = city.cityData3[this.citySelected[0].idx].children[this.citySelected[1].idx].children;
						this.citySelected[2] = {
							idx: i,
							text: city.cityData3[this.citySelected[0].idx].children[this.citySelected[1].idx].children[i].text
						};
						if(level == 3) {
							Bus.$emit('cityed', this.citySelected);
							this.citySelected[2].active = true;
							this.$closes();
						};
						break;
				}

				this.$refs['city'].scrollTo({
					x: 0,
					y: 0
				}, false)
			},
			onclose:function(){
				Bus.$emit('cityed', this.citySelected);
				this.$closes();
			}
		},
		mounted() {
			let len = this.citySelected.length;
			let active = this.findArrayIndex(this.citySelected);
			if(active != undefined) {
				this.activeIndex = this.citySelected[active].idx;
			}
			if(len == 1) {
				this.cityData = city.cityData3;
				this.nextTips="选择城市";
			}
			if(len == 2) {
				this.cityData = city.cityData3[this.citySelected[0].idx].children;
				this.nextTips="选择区/县";
			}
			if(len == 3) {
				this.cityData = city.cityData3[this.citySelected[0].idx].children[this.citySelected[1].idx].children;
			}
		}
	}
</script>

<style scoped="scoped">
	.citySelected {
		height: 44px;
		padding: 8px .24rem;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 44px;
		overflow: hidden;
		display: flex;
	}
	
	.citySelected .item {
		height: 28px;
		line-height: 28px;
		padding: 0 .24rem;
		font-size: .28rem;
		background: #f5f8fa;
		margin-right: .2rem;
		border-radius: .1rem;
	}
	
	.citySelected .active {
		background: #ff2741;
		color: #fff;
	}
	
	.citySelected .nextTips {
		height: 28px;
		line-height: 28px;
		padding: 0 .24rem;
		font-size: .28rem;
		color: #ff2741;
	}
	
	.cityWrap {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 44px;
		background: #f9f9f9;
		overflow: hidden;
	}
	
	.rnui-header~.cityWrap {
		top: 44px;
	}
	
	.citySelected~.cityWrap {
		top: 88px;
	}
	
	.cityList .item {
		height: 44px;
		padding: .24rem;
		line-height: .4rem;
		font-size: .28rem;
		position: relative;
	}
	
	.cityList .item.active {
		background: #fff;
		color: #ff2741;
	}
	
	.cityList .item.active:before {
		content: "\e82f";
		font-family: "iconfont";
		width: 18px;
		height: 18px;
		font-size: 18px;
		position: absolute;
		right: .24rem;
		top: 50%;
		margin-top: -9px;
	}
</style>