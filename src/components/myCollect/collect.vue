<template>
	<div id="myCollect">
		<ul class="myCollect">
			<li class="item" v-for="(item,index) in myCollectData">
				<router-link :to="item.pagePath" class="tap">
					<div class="imgbox">
						<img :src="item.thumb">
					</div>
					<div class="content">
						<h2 class="name">{{item.name}}</h2>
						<p class="price">
							<span class="red">¥</span>
							<span class="unit red">{{item.price}}</span>
						</p>
						<p class="info">
							<span>{{item.time}}</span>
							<span class="btn bbgf" @click.stop.prevent="onCancel(index)">取消收藏</span>
						</p>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	export default {
		props: {
			myCollectData: {
				type: Array,
				default: function() {
					return []
				}
			}
		},
		data() {
			return {

			}
		},
		mounted() {

		},
		methods: {
			onCancel(i) {
				MessageBox.confirm('确定取消收藏该商品吗?', '提示').then(action => {
					this.$delete(this.myCollectData, i);
				}).catch((error) => {
					console.log(error)
				});
			}
		}
	}
</script>
<style scoped="scoped">
	.myCollect {
		padding: 0 .24rem .24rem;
	}
	
	.myCollect .item {
		margin-top: .24rem;
	}
	
	.myCollect .tap {
		background: #fff;
		padding: .24rem;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
		border-radius: .1rem;
	}
	
	.myCollect .imgbox {
		width: 1.8rem;
		height: 1.8rem;
		flex-shrink: 0;
		margin-right: .3rem;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		justify-content: center;
	}
	
	.myCollect .content {
		width: 100%;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.myCollect .name {
		height: .72rem;
		line-height: .36rem;
		font-size: .28rem;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		word-wrap: break-word;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	
	.myCollect .price {
		height: .4rem;
		line-height: .4rem;
		color: #93999f;
	}
	
	.myCollect .price .unit {
		font-size: .3rem;
		font-weight: bold;
		margin-left: 1px;
	}
	
	.myCollect .info {
		height: .48rem;
		line-height: .48rem;
		color: #92999d;
	}
	
	.myCollect .del {
		font-family: "iconfont";
		width: .48rem;
		height: .48rem;
		text-align: center;
		line-height: .48rem;
		font-size: .36rem;
		display: block;
		float: right;
	}
	
	.myCollect .del:before {
		content: '\e821';
	}
	
	.myCollect .btn {
		height: .48rem;
		line-height: .44rem;
		font-size: .24rem;
		display: block;
		float: right;
		padding: 0 .12rem;
	}
</style>