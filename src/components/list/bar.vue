<template>
	<div class="filter-bar">
		<ul class="fb-nav">
			<li class="tab" :class="{active:isSort}" @click="onSort">
				<span class="tap arrow">{{sorted}}</span>
			</li>
			<li class="tab">
				<span class="tap">销量</span>
			</li>
			<li class="tab" :class="[isPrice]" @click="onPrice">
				<span class="tap">价格<i class="arrows"></i></span>
			</li>
			<li class="tab" @click="onFilter">
				<span class="tap">筛选</span>
			</li>
		</ul>
	</div>
</template>

<script>
	import Bus from '@/bus/bus.js'
	export default {
		data() {
			return {
				isSort: false,
				isFilter: false,
				sorted: "综合",
				isPrice:''
			}
		},
		mounted() {
			Bus.$on('sorted', (data) => {
				this.sorted = data;
			});
		},

		methods: {
			onSort: function() {
				Bus.$emit('isSort', true);
				this.$set(this.$data, 'isSort', true);
				this.$emit('getSort', this.isSort);
			},
			onFilter: function() {
				this.$emit('getFilter', this.isFilter);
			},
			onPrice: function() {
				if(this.isPrice==''){
					this.$set(this.$data, 'isPrice', 'asc');
				}
				else if(this.isPrice=='asc'){
					this.$set(this.$data, 'isPrice', 'desc');
				}
				else{
					this.$set(this.$data, 'isPrice', '');
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.filter-bar {
		position: fixed;
		top: 44px;
		z-index: 104;
		width: 100%;
		left: 0;
		background: #fff;
		height: 40px;
		line-height: 40px;
		overflow: hidden;
	}
	
	.filter-bar:after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 1px;
		background: #e5e8ea;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}
	
	.fb-nav {
		height: 40px;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	
	.fb-nav .tab {
		width: 100%;
		height: 40px;
		line-height: 40px;
		display: block;
		position: relative;
		float: left;
		font-size: 0px;
		text-align: center;
	}
	
	.fb-nav .tap {
		height: 40px;
		color: #62666D;
		font-size: .26rem;
	}
	
	.fb-nav .tap span {
		max-width: 48px;
		height: 40px;
		font-size: .28rem;
		display: inline-block;
		vertical-align: middle;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.fb-nav .active .tap {
		color: #ff2741;
	}
	
	.fb-nav .arrow:after {
		content: '';
		width: 0;
		height: 0;
		border-left: 4px solid transparent;
		border-right: 4px solid transparent;
		border-top: 4px solid #a5a8aa;
		display: inline-block;
		vertical-align: middle;
		margin: -2px 0 0 4px;
	}
	
	.fb-nav .active .arrow:after {
		border-top: 5px solid #ff2741;
	}
	
	.fb-nav .arrows {
		width: 4px;
		height: 40px;
		margin-left: 2px;
		display: inline-block;
		vertical-align: middle;
		position: relative;
	}
	
	.fb-nav .arrows:before {
		content: '';
		width: 0;
		height: 0;
		border-left: 4px solid transparent;
		border-right: 4px solid transparent;
		border-bottom: 4px solid #a5a8aa;
		display: block;
		position: absolute;
		top: 15px;
		left: 0;
	}
	
	.fb-nav .arrows:after {
		content: '';
		width: 0;
		height: 0;
		border-left: 4px solid transparent;
		border-right: 4px solid transparent;
		border-top: 4px solid #a5a8aa;
		display: block;
		position: absolute;
		bottom: 15px;
		left: 0;
	}
	
	.fb-nav .asc .arrows:before {
		border-bottom-color: #ff2741;
	}
	
	.fb-nav .desc .arrows:after {
		border-top-color: #ff2741;
	}
	
	#oFilter .tap:before {
		content: '';
		width: 1px;
		position: absolute;
		left: 0;
		top: 11px;
		bottom: 11px;
		background: #efe8ea;
	}
</style>
<style>
	.filter-bar~.rnui-content {
		padding-top: 84px;
	}
</style>