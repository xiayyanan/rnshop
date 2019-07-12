<template>
	<ul class="helpList">
		<li class="item" v-for="item in helpData">
			<router-link to="/mySet/helpShow" class="tap">
				<p>{{item.name}}</p>
			</router-link>
		</li>
	</ul>
</template>

<script>
	export default {
		props: ['helpData'],
		data() {
			return {}
		}
	}
</script>

<style scoped="scoped">
	.helpList {
		background: #fff;
		margin-top: .2rem;
	}
	
	.helpList .item {
		position: relative;
	}
	
	.helpList .item:after {
		content: '';
		position: absolute;
		left: .24rem;
		right: 0;
		bottom: 0;
		height: 1px;
		background: #e5e8ea;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}
	
	.helpList .item:last-child:after {
		display: none;
	}
	
	.helpList .tap {
		padding: .24rem .1rem .24rem .24rem;
		font-size: .28rem;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	
	.helpList p {
		line-height: .48rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.helpList .tap:after {
		font-family: "iconfont";
		width: 16px;
		line-height: .48rem;
		display: block;
		font-weight: bold;
		color: #c5c8ca;
		margin-left: .16rem;
		flex-shrink: 0;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		justify-content: space-between;
		content: "\e7af";
	}
</style>