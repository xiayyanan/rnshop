<template>
	<div class="cat-main">
		<vue-scroll :ops="main" ref="main">
			<div class="item" v-for="(item,index) in mainData" v-bind:id="'main' + index">
				<div class="ads-box">
					<router-link to="/list" class="tap">
						<img v-bind:src="item.adsImg" />
					</router-link>
				</div>
				<div class="cat-title">
					<span class="name">{{item.name}}</span>
				</div>
				<ul class="cat-list">
					<li class="itemsub" v-for="itemsub in item['list']">
						<router-link to="list" class="tap">
							<img v-bind:src="itemsub.thumb" class="thumb" />
							<p class="name">{{itemsub.name}}</p>
						</router-link>
					</li>
				</ul>
			</div>
		</vue-scroll>
	</div>
</template>
<script>
	export default {
		props: {
			mainData: {
				type: Array,
				default: function() {
					return []
				}
			}
		},
		data() {
			return {
				main: {
					vuescroll: {
						mode: 'slide',
						scroller: {
							/** Minimum zoom level */
							minZoom: 1,
							/** Maximum zoom level */
							maxZoom: 1
						}
					},
					scrollPanel: {
						scrollingX: false,
					},
					rail: {},
					bar: {
						background: 'rgba(0,0,0,.25)'
					}
				}
			}
		},
		computed: {
			catIndex: function() {
				var i = this.$store.state.category.catIndex;
				return this.$store.state.category.catIndex;
			}
		},
		mounted() {
			var i = this.$store.state.category.catIndex;
			var that=this;
			setTimeout(() => that.$refs['main'].scrollIntoView("#main" + i),200);
		},
		watch: {
			catIndex: function(i) {
				//console.log(i)
				this.$refs['main'].scrollIntoView("#main" + i);
			}
		}
	}
</script>
<style scoped="scoped">
	.cat-main {
		position: fixed;
		left: 1.8rem;
		right: 0;
		top: 44px;
		bottom: 49px;
		overflow: hidden;
		overflow-y: auto;
		background: #fff;
	}
	
	.ads-box {
		padding: .2rem .2rem 0;
	}
	
	.ads-box img {
		width: 100%;
	}
	
	.cat-title {
		height: 1.3rem;
		display: flex;
		justify-content: center;
	}
	
	.cat-title .name {
		height: 1.3rem;
		line-height: 1.3rem;
		font-size: .3rem;
		background: #fff;
		padding: 0 .4rem;
		position: relative;
	}
	
	.cat-title .name:before {
		content: '';
		position: absolute;
		top: 50%;
		width: .48rem;
		border-bottom: #e5e8ea 1px solid;
		transform: scaleY(.5);
		left: -.48rem;
	}
	
	.cat-title .name:after {
		content: '';
		position: absolute;
		top: 50%;
		width: .48rem;
		border-bottom: #e5e8ea 1px solid;
		transform: scaleY(.5);
		right: -.48rem;
	}
	
	.cat-list {
		margin: 0 .2rem .2rem;
		display: flex;
		flex-wrap: wrap;
	}
	
	.cat-list .itemsub {
		width: 33.33%;
		margin-bottom: .4rem;
		display: flex;
		justify-content: center;
	}
	
	.cat-list .thumb {
		width: 1.04rem;
		height: 1.04rem;
	}
	
	.cat-list .name {
		height: .36rem;
		line-height: .36rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #92999d;
		font-size: .24rem;
		text-align: center;
		margin-top: .2rem;
	}
</style>