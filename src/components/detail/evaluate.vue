<template>
	<div class="evaluate mt10">
		<div class="evaluateTit">产品评价({{evaluateData.evaluateNum}})</div>
		<ul class="evaluateTags">
			<li v-bind:class="{item,'active':index==tagsActive}" v-for="(item,index) in evaluateData.evaluateTags" @click="changeTags(index)">
				<a href="javascript:void(0)">{{item.name}}({{item.num}})</a>
			</li>
		</ul>

		<ul class="evaluateList">
			<li class="item" v-for="(item,index) in evaluateData.evaluateList">
				<div class="hd">
					<img :src="item.avatar" class="avatar">
					<span class="name">{{item.name}}</span>
					<div class="level icon-level">
						<i class="icon-level" v-bind:style="{'width':item.score/5*100+'%;'}"></i>
					</div>
				</div>
				<div class="content">{{item.content}}</div>
				<dl class="evaluateImgs" v-if="item['imgs'].length>0">
					<dd class="thumb" v-for="itemsub in item['imgs']">
						<img :src="itemsub.thumb" :preview="index">
					</dd>
				</dl>
				<div class="attr">
					<span>{{item.dates}}</span>
					<span class="space">{{item.attrs}}</span>
				</div>
			</li>
		</ul>
		<slot name="evaluateAll"></slot>
	</div>
</template>

<script>
	import Vue from 'vue'
	import preview from 'vue-photo-preview'
	import 'vue-photo-preview/dist/skin.css'
	Vue.use(preview)

	export default {
		props: {
			evaluateData: {
				type: Object,
				default: function() {
					return {}
				}
			}
		},
		data() {
			return {
				tagsActive: 0
			}
		},
		methods: {
			changeTags(i) {
				this.tagsActive = i;
			}
		},
		mounted() {
			this.$previewRefresh();
		}
	}
</script>
<style scoped="scoped">
	.evaluate {
		background: #fff;
	}
	
	.evaluateTit {
		height: .88rem;
		line-height: .88rem;
		font-size: .28rem;
		padding: 0 .3rem;
	}
	
	.evaluateTags {
		margin: 0 .06rem 0 .3rem;
		font-size: 0;
	}
	
	.evaluateTags .item {
		padding: 0 .24rem .2rem 0;
		display: inline-block;
	}
	
	.evaluateTags .item a {
		display: block;
		height: .6rem;
		line-height: .6rem;
		font-size: .24rem;
		color: #60646d;
		background: #faecea;
		padding: 0 .3rem;
		border-radius: .3rem;
	}
	
	.evaluateTags .active a {
		background: #ff2741;
		color: #fff;
	}
	
	.evaluateList .item {
		margin: 0 .3rem;
		padding: .3rem 0;
		position: relative;
	}
	
	.evaluateList .item:after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 1px;
		background: #e5e8ea;
		transform: scaleY(0.5);
	}
	
	.evaluateList .item:last-child:after {
		display: none;
	}
	
	.evaluateList .hd {
		position: relative;
		height: .6rem;
		line-height: .6rem;
	}
	
	.evaluateList .avatar {
		width: .6rem;
		height: .6rem;
		border-radius: .6rem;
		float: left;
	}
	
	.evaluateList .name {
		font-size: .32rem;
		float: left;
		margin-left: .18rem;
	}
	
	.evaluateList .date {
		float: right;
		font-size: .26rem;
		color: #999;
	}
	
	.icon-level {
		background: url(../../assets/images/icon-star.png);
		background-position: 0 0;
		-webkit-background-size: 80px 24px;
		background-size: 80px 24px;
		display: block;
	}
	
	.level {
		width: 80px;
		height: 12px;
		position: absolute;
		right: 0;
		top: 50%;
		margin-top: -6px;
	}
	
	.level .icon-level {
		width: 60%;
		height: 12px;
		background-position: 0 -12px;
	}
	
	.evaluateList .content {
		line-height: .42rem;
		font-size: .26rem;
		margin-top: .18rem
	}
	
	.evaluateList .attr {
		font-size: .24rem;
		color: #92999D;
		margin-top: .24rem;
	}
	
	.evaluateImgs {
		margin-top: .18rem;
		display: flex;
		display: -webkit-flex;
		flex-wrap: wrap;
	}
	
	.evaluateImgs .thumb {
		flex-shrink: 0;
		width: 1.6rem;
		height: 1.6rem;
		line-height: 1.6rem;
		overflow: hidden;
		margin: .06rem .06rem 0 0;
		text-align: center;
		font-size: 0;
	}
	
	.evaluateImgs .thumb img {
		width: 100%;
		height: 100%;
		display: inline-block;
		vertical-align: middle;
	}
	
	.evaluateAll {
		padding: 0 0 .3rem 0;
		text-align: center;
		font-size: 0;
	}
	
	.evaluateAll .btn {
		height: .48rem;
		font-size: .26rem;
		line-height: .44rem;
		border-radius: .48rem;
	}
</style>