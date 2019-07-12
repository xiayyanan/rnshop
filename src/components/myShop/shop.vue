<template>
	<div id="myShop">
		<ul class="myShop">
			<li class="item" v-for="(item,index) in myShopData">
				<router-link to="item.pagePath" class="tap">
					<div class="imgbox">
						<img :src="item.logo">
					</div>
					<div class="content">
						<p class="name">{{item.name}}</p>
						<p class="sorce">综合评分：<span class="red">{{item.score}}</span>分</p>
					</div>
				</router-link>
				<div class="opn">
					<span class="btn btn-outlined" @click="onDelete(index)">取消关注</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import { MessageBox } from 'mint-ui';
	export default {
		props: {
			myShopData: {
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
			onDelete(i) {
				MessageBox.confirm('确定取消关注该商铺吗?','提示').then(action => {
					this.$delete(this.myShopData, i);
				}).catch((error) => {
					console.log(error)
                });
			}
		}
	}
</script>
<style scoped="scoped">
	.myShop .item {
		margin-top: .2rem;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
		background: #fff;
	}
	
	.myShop .tap {
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
		padding: .3rem;
	}
	
	.myShop .imgbox {
		width: 1rem;
		height: 1rem;
		flex-shrink: 0;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		justify-content: center;
		margin-right: .24rem;
		box-shadow: 0px 1px 10px rgba(0, 0, 0, .1);
	}
	
	.myShop .content {
		width: 100%;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.myShop .name {
		height: .56rem;
		line-height: .56rem;
		font-size: .32rem;
	}
	
	.myShop .sorce {
		height: .4rem;
		line-height: .4rem;
		font-size: .24rem;
		color: #999;
	}
	
	.myShop .opn {
		width: 1.44rem;
		flex-shrink: 0;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		justify-content: center;
		margin: 0 .24rem;
	}
	
	.myShop .opn .btn {
		height: .56rem;
		line-height: .52rem;
		font-size: .24rem;
		display: block;
		border-radius: .6rem;
		padding: 0;
	}
</style>