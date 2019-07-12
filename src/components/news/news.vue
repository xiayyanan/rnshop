<template>
	<ul class="newsList">
		<li class="item" v-for="(item,index) in newsData">
			<router-link :to="{ path:item.pagePath, query: {id: index}}" class="tap">
				<h4 class="name">{{item.title}}</h4>
				<div class="thumb">
					<div class="imgbox" v-for="thumb in item['thumb']">
						<img :src="thumb">
					</div>
				</div>
				<p class="info">
					<span>{{item.time}}</span>
					<span class="space">阅读：{{item.view}}万+</span>
				</p>
			</router-link>
		</li>

	</ul>
</template>

<script>
	export default {
		props: ['newsData']
	}
</script>

<style scoped="scoped">
	.newsList .item {
		padding: .24rem;
		position: relative;
		background: #fff;
	}
	
	.newsList .item:after {
		content: '';
		position: absolute;
		left: .24rem;
		right: .24rem;
		bottom: 0;
		height: 1px;
		background: #e5e8ea;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}
	
	.newsList .item:last-child:after {
		display: none;
	}
	
	.newsList .thumb {
		display: flex;
		display: -webkit-flex;
		margin-top: .2rem;
	}
	
	.newsList .thumb .imgbox {
		width: 100%;
	}
	
	.newsList .thumb .imgbox:nth-child(2) {
		margin: 0 1px;
	}
	
	.newsList .thumb .imgbox:last-child {
		margin-right: 0;
	}
	
	.newsList .name {
		line-height: .42rem;
		font-size: .3rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		display: -webkit-box;
		overflow: hidden;
		white-space: normal!important;
		text-overflow: ellipsis;
		word-wrap: break-word;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	
	.newsList .info {
		height: .36rem;
		line-height: .36rem;
		font-size: .24rem;
		color: #999;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		margin-top: .18rem;
	}
</style>