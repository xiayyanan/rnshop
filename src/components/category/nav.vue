<template>
	<div class="cat-nav">
		<vue-scroll :ops="nav" ref="nav">
			<ul class="cat-nav-list">
				<li v-bind:class="{item,'active':index==catIndex}" v-for="(item,index) in navData" @click="catChose(index)" v-bind:id="'nav' + index">
					<a class="tap">{{item.name}}</a>
				</li>
			</ul>
		</vue-scroll>
	</div>
</template>

<script>
	export default {
		props: {
			navData: {
				type: Array,
				default: function() {
					return []
				}
			}
		},
		data() {
			return {
				nav: {
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
			var that = this;
			setTimeout(() => that.$refs['nav'].scrollIntoView("#nav" + i), 300);
		},
		methods: {
			catChose(i) {
				this.$store.commit('CHANGE_CATINDEX', i);
				this.$refs['nav'].scrollIntoView("#nav" + i);
			}
		}
	}
</script>
<style scoped="scoped">
	.cat-nav {
		position: fixed;
		left: 0;
		top: 44px;
		bottom: 49px;
		width: 1.8rem;
		overflow: hidden;
		overflow-y: auto;
		background: #fff;
	}
	
	.cat-nav:after {
		content: '';
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		border-right: #e5e8ea 1px solid;
		transform: scaleX(.5);
	}
	
	.cat-nav-list {
		padding: .2rem 0;
	}
	
	.cat-nav-list .tap {
		height: .9rem;
		line-height: .9rem;
		font-size: .36rem;
		transform: scale(.75);
		transition: transform .1s linear;
		color: #35383a;
		text-align: center;
	}
	
	.cat-nav-list .active .tap {
		color: #ff2741;
		transform: scale(1);
	}
</style>