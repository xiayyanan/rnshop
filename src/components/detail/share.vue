<template lang="html">
	<div>
		<ul class="share-list">
			<li class="item" v-for="(item,index) in shareData" :key="index">
				<a href="#" class="tap">
					<img :src="item.thumb" class="imgbox">
					<p>{{item.name}}</p>
				</a>
			</li>
		</ul>
		<a href="javascript:void(0)" class="share-cancel" @click="$closes">取消</a>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				shareData: [{
						thumb: require("../../assets/images/share-qq.png"),
						name: "QQ"
					},
					{
						thumb: require("../../assets/images/share-weixin.png"),
						name: "微信"
					},
					{
						thumb: require("../../assets/images/share-weibo.png"),
						name: "微博"
					}
				]
			}
		}
	}
</script>

<style scoped="scoped">
	.share-list {
		padding: .2rem .24rem .48rem;
		display: flex;
		justify-content: space-between;
	}
	
	.share-list .item {
		width: 100%;
		max-width: 25%;
		margin-top: .2rem;
		text-align: center;
	}
	
	.share-list .imgbox {
		display: block;
		width: .8rem;
		margin: 0 auto;
	}
	
	.share-list p {
		font-size: .24rem;
		line-height: 1;
		margin-top: .2rem;
		color: #62666d;
	}
	
	.share-cancel {
		width: 100%;
		height: 44px;
		line-height: 44px;
		background: #FFF;
		display: block;
		text-align: center;
		font-size: .32rem;
	}
</style>