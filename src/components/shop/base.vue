<template>
	<div class="shopHd">
		<div class="imgbox">
			<img :src="baseData.logo" class="thumb">
		</div>
		<div class="content">
			<p class="name">{{baseData.name}}</p>
			<p class="sorce">综合评分：{{baseData.sorce}}分</p>
		</div>
		<div class="fans">
			<p class="num">{{baseData.fans}}万</p>
			<p class="text">关注人数</p>
		</div>
		<div class="atten" :class="{active:isAtten}" @click="onAtten">
			<span v-if="isAtten">已关注</span>
			<span v-else>关注</span>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				baseData: {
					logo: require("../../assets/images/example/l1.jpg"),
					name: "Apple Store 官方旗舰店",
					sorce: "4.9",
					fans: "273.2"
				},
				isAtten:false
			}
		},
		methods:{
			onAtten:function(){
				this.$set(this.$data,'isAtten',!this.isAtten);
			}
		}
	}
</script>

<style scoped="scoped">
	.shopHd {
		padding: .24rem;
		background: #ff2741;
		display: flex;
		display: -webkit-flex;
		color: #fff;
	}
	
	.shopHd .imgbox {
		width: .8rem;
		height: .8rem;
		flex-shrink: 0;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		justify-content: center;
		margin-right: .2rem;
		box-shadow: 0px 1px 10px rgba(0, 0, 0, .1);
	}
	
	.shopHd .content {
		width: 100%;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.shopHd .name {
		height: .4rem;
		line-height: .4rem;
		font-size: .26rem;
	}
	
	.shopHd .sorce {
		height: .36rem;
		line-height: .36rem;
		font-size: .24rem;
		color: rgba(255, 255, 255, .75);
	}
	
	.shopHd .fans {
		height: .8rem;
		padding: .1rem 0;
		flex-shrink: 0;
		text-align: center;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.shopHd .fans .bt {
		font-size: .2rem;
	}
	
	.shopHd .atten {
		height: .52rem;
		line-height: .52rem;
		flex-shrink: 0;
		text-align: center;
		border: #fff 1px solid;
		border-radius: .6rem;
		margin: .14rem 0 .14rem .2rem;
		padding: 0 .16rem;
		font-size: .24rem;
	}
	
	.shopHd .atten:before {
		font-family: "iconfont";
		font-size: .24rem;
		line-height: 12px;
		content: "\e839";
	}
	
	.shopHd .atten.active:before {
		content: "\e82f";
	}
</style>