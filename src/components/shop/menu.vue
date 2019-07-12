<template>
	<ul class="menu">
		<li class="item" :class="{active:item.active}" v-for="item in menuData">
			<router-link :to="item.pagePath" class="tap">{{item.name}}</router-link>
		</li>
	</ul>
</template>

<script>
	export default {
		data() {
			return {
				menuData: [{
						name: "首页",
						pagePath: "/shop",
						active:true
					},
					{
						name: "商品",
						pagePath: "/list"
					},
					{
						name: "上新",
						pagePath: "/list"
					},
					{
						name: "活动",
						pagePath: "/list"
					}
				]
			}
		}
	}
</script>

<style scoped="scoped">
	.menu {
		height: 44px;
		display: flex;
		background: #fff;
	}
	
	.menu .item {
		width: 25%;
		padding: 0 .6rem;
		display: flex;
		justify-content: center;
	}
	
	.menu .tap {
		height: 44px;
		line-height: 44px;
		font-size: .3rem;
	}
	.menu .active .tap{
		color: #ff2741;
	}
	.menu .active .tap:after{
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 6px;
		height: 3px;
		background: #ff2741;
	}
</style>