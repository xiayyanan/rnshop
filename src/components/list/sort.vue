<template>
	<div class="sort">
		<ul class="sortList">
			<li class="item" :class="{active:item.name==cdata.sorted}" v-for="(item,index) in sortData" @click="changeSort(index)">{{item.name}}</li>
		</ul>
	</div>
</template>

<script>
	import Bus from '../../bus/bus.js'
	export default {
		props: ['cdata'],
		data() {
			return {
				sortData: [{
						name: "综合"
					},
					{
						name: "人气"
					},
					{
						name: "新品"
					}
				]
			}
		},
		methods: {
			changeSort: function(i) {
				Bus.$emit('sorted', this.sortData[i].name);
				Bus.$emit('isClose', false);
				Bus.$emit('isSort', false);
			}
		}
	}
</script>

<style scoped="scoped">
	.sortList .item {
		padding: .2rem .24rem;
		font-size: .3rem;
		position: relative;
		color: #62666D;
	}
	
	.sortList .active:before {
		font-family: "iconfont" !important;
		content: "\e82f";
		width: 18px;
		height: 18px;
		line-height: 18px;
		display: block;
		font-size: 18px;
		position: absolute;
		right: .3rem;
		top: 50%;
		margin-top: -9px;
		color: #ff2741;
	}
	
	.sortList li.active {
		color: #ff2741;
	}
	
	.sortList li:after {
		content: '';
		height: 1px;
		position: absolute;
		right: 0;
		left: 0;
		bottom: 0;
		background: #E5E8EA;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}
</style>