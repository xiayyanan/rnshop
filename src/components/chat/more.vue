<template>
	<div class="chatMore" :class="{active:isMore}">
		<div class="item" v-for="item in moreData">
			<span class="img-icon"><img :src="item.icon"></span>
			<p class="name">{{item.name}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		props:['isMore'],
		data() {
			return {
				moreData: [{
						icon: "../../static/images/chat/chat-photo.png",
						name: "相册"
					},
					{
						icon: "../../static/images/chat/chat-film.png",
						name: "拍摄"
					},
					{
						icon: "../../static/images/chat/chat-video.png",
						name: "视频"
					},
					{
						icon: "../../static/images/chat/chat-photo.png",
						name: "位置"
					}
				]
			}
		}
	}
</script>

<style>
	.chatMore {
		width: 100%;
		background: #f9f9f9;
		height: 0;
		height: 2.48rem;
		overflow: hidden;
		position: relative;
		display: none;
		padding: .3rem 0;
	}
	
	.chatMore.active {
		display: block;
	}
	
	.chatMore:before {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		height: 1px;
		background: #dbdbdb;
		transform: scaleY(.5);
	}
	
	.chatMore .item {
		width: 25%;
		float: left;
		text-align: center;
	}
	
	.chatMore .img-icon {
		width: 1.28rem;
		height: 1.28rem;
		line-height: 1.28rem;
		font-size: 0;
		background: #fff;
		text-align: center;
		border-radius: .2rem;
		display: block;
		margin: 0 auto;
	}
	
	.chatMore img {
		display: inline-block;
		vertical-align: middle;
		width: .6rem;
		height: .6rem;
	}
	
	.chatMore .name {
		margin-top: .2rem;
		height: .36rem;
		line-height: .36rem;
		font-size: .24rem;
		color: #9d9d9d;
	}
</style>