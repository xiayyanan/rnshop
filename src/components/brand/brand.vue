<template>
	<ul class="brand-list">
		<li class="item" v-for="item in brandData">
			<router-link :to="item.pagePath" class="tap">
				<img v-bind:src="item.thumb" class="thumb">
				<div class="content">
					<img v-bind:src="item.logo" class="logo">
					<h2 class="title">{{item.name}}</h2>
					<span class="more">详情</span>
				</div>
			</router-link>
		</li>
	</ul>
</template>

<script>
	export default {
		props: ['brandData']
	}
</script>

<style scoped="scoped">
	.brand-list{
		padding:0 .24rem .24rem;
	}
	.brand-list .item{
		margin-top: .24rem;
		border-radius:.1rem;
		box-shadow: 0px 1px 10px rgba(0,0,0,.05);
	}
	.brand-list .thumb{
		width: 100%;
		border-radius:.1rem .1rem 0 0;
	}
	.brand-list .content{
		padding: .24rem;
		background: #fff;
		display: flex;
		border-radius: 0 0 .1rem .1rem;
	}
	.brand-list .logo{
		width: .8rem;
		height: .8rem;
		flex-shrink: 0;
		margin-right: .24rem;
		box-shadow: 0px 1px 10px rgba(0,0,0,.1);
	}
	.brand-list .title{
		height: .8rem;
		line-height: .8rem;
		width: 100%;
		font-size: .3rem;
	}
	.brand-list .more{
		height: .8rem;
		line-height: .8rem;
		flex-shrink: 0;
		font-size: .28rem;
		color: #a6a6a6;
	}
	.brand-list .more:after{
		font-family: "iconfont";
		content: "\e7af";
	}
</style>