<template>
	<div class="newsShow">
		<div class="newsShowHd">
			<h1 class="title">{{nshowData.title}}</h1>
			<p class="info">
				<span>{{nshowData.time}}</span>
				<span class="space">阅读：{{nshowData.view}}万+</span>
			</p>
		</div>
		<div class="newsContent" v-html="nshowData.content"></div>
	</div>
</template>

<script>
	export default {
		props: ['nshowData']
	}
</script>

<style scoped="scoped">
	.newsShow {
		padding: .3rem 0;
		background: #FFF;
	}
	
	.newsShowHd {
		padding: .24rem .24rem 0;
	}
	
	.newsShowHd .title {
		font-size: .36rem;
		line-height: 1.5;
		font-weight: bold;
	}
	
	.newsShowHd .info {
		line-height: .36rem;
		padding-top: .12rem;
		color: #92999d;
	}
	
	.newsContent {
		font-size: .3rem;
		line-height: 1.8;
		padding: .24rem .24rem 0;
	}
</style>
<style>
	.newsContent img {
		display: inline;
		max-width: 100%;
	}
</style>