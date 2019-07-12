<template>
	<ul class="menu-bar active">
		<li class="item" :class="{active:item.active}" v-for="item in orderNav">
			<router-link :to="item.pagePath" class="tap">{{item.name}}</router-link>
		</li>
	</ul>
</template>

<script>
	export default {
		props: {
			collectData: {
				type: Array,
				default: function() {
					return []
				}
			}
		},
		data() {
			return {
				orderNav: [{
						pagePath: "/myOrder",
						name: "全部",
						active: true
					},
					{
						pagePath: "/myOrder",
						name: "待付款"
					},
					{
						pagePath: "/myOrder",
						name: "待发货"
					},
					{
						pagePath: "/myOrder",
						name: "待收货"
					},
					{
						pagePath: "/myOrder",
						name: "待评价"
					}
				]
			}
		},
		mounted() {

		},
		methods: {

		}
	}
</script>
<style>
	@import "../../assets/css/menu-bar.css";
</style>