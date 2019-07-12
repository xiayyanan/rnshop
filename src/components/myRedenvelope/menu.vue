<template>
	<ul class="menu-bar active">
		<li class="item" :class="{active:item.active}" v-for="item in couponNav">
			<router-link :to="item.pagePath" class="tap">{{item.name}}</router-link>
		</li>
	</ul>
</template>

<script>
	export default {
		data() {
			return {
				couponNav: [{
						pagePath: "/myFunds/myRedenvelope",
						name: "未使用",
						active: true
					},
					{
						pagePath: "/myFunds/myRedenvelope",
						name: "已使用"
					},
					{
						pagePath: "/myFunds/myRedenvelope",
						name: "已过期"
					}
				]
			}
		}
	}
</script>
<style>
	@import "../../assets/css/menu-bar.css";
</style>