<template lang="html">
	<footer class="rnui-footer">
		<ul class="tabBar">
			<li v-bind:class="{item,'active':index==selected}" v-for="(item,index) in tabBar">
				<router-link :to="item.pagePath" class="tap">
					<img v-bind:src="index==selected?item.selectedIconPath:item.iconPath" class="iconPath">
					<p class="name">{{item.name}}</p>
				</router-link>
			</li>
		</ul>
	</footer>
</template>

<script>
	export default {

		data() {
			return {
				tabBar: [{
						"pagePath": "/",
						"iconPath": require("../assets/images/tabBar-1.png"),
						"selectedIconPath": require("../assets/images/tabBar-1-active.png"),
						"name": "首页"
					},
					{
						"pagePath": "/category",
						"iconPath": require("../assets/images/tabBar-2.png"),
						"selectedIconPath": require("../assets/images/tabBar-2-active.png"),
						"name": "分类"
					},
					{
						"pagePath": "/car",
						"iconPath": require("../assets/images/tabBar-3.png"),
						"selectedIconPath": require("../assets/images/tabBar-3-active.png"),
						"name": "购物车",
					},
					{
						"pagePath": "/user",
						"iconPath": require("../assets/images/tabBar-4.png"),
						"selectedIconPath": require("../assets/images/tabBar-4-active.png"),
						"name": "我的"
					}
				],
				selected: 0
			}
		},
		mounted() {

			//获取当前路由名称，根据该名称给当前footer添加selected
			let Rname = this.$route.name;
			switch(Rname) {
				case 'index':
					this.selected = 0;
					break;
				case 'category':
					this.selected = 1;
					break;
				case 'car':
					this.selected = 2;

					break;
				case 'user':
					this.selected = 3;
					break;
			}
		}
	}
</script>

<style lang="less" scoped>
	.tabBar {
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	
	.tabBar .item {
		width: 25%;
		height: 49px;
	}
	
	.tabBar .tap {
		height: 49px;
		color: #62666d;
	}
	
	.tabBar .iconPath {
		width: 30px;
		height: 30px;
		margin: 1px auto 0;
	}
	
	.tabBar .name {
		line-height: 1;
		margin-top: 2px;
		font-size: .24rem;
		white-space: nowrap;
		text-align: center;
	}
	
	.tabBar .active .tap {
		color: #ff2741;
	}
</style>