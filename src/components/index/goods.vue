<template>

	<ul class="plist">
		<li class="item" v-for="item in goodsData" :key="item.id">
			<router-link :to="item.pagePath" class="tap">
				<img v-bind:src="item.thumb" class="thumb">
				<div class="content">
					<h3 class="name">{{item.name}}</h3>
					<p class="price">
						<span class="unit red">¥</span>
						<span class="nPrice red">{{item.nPrice}}</span>
						<span class="oPrice">¥{{item.oPrice}}</span>
					</p>
					<p class="volume">月销{{item.sales}}笔</p>
				</div>
			</router-link>
		</li>
	</ul>

</template>

<script>
	export default {
		props: {
			goodsData: {
				type: Array,
				default: function() {
					return []
				}
			}
		}
	}
</script>
<style scoped="scoped">
	@import '../../assets/css/plist.css';
</style>