<template>
	<div class="userHd">
		<div class="info">
			<img :src="baseData.avatar" class="avatar">
			<div class="content">
				<p class="name">{{baseData.name}}</p>
				<p class="level">
					<span>{{baseData.level}}</span>
				</p>
			</div>
			<router-link to="/mySet" class="goset">设置</router-link>
		</div>
		<ul class="counts">
			<li class="item" v-for="item in baseData.counts">
				<router-link :to="item.pagePath" class="tap">
					<p class="value">{{item.value}}</p>
					<p class="name">{{item.name}}</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: {
			baseData: {
				type: Object,
				default: function() {
					return {}
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

		}
	}
</script>
<style scoped="scoped">
	.userHd {
		background: #ff2741;
		position: relative;
	}
	
	.userHd .info {
		display: flex;
		padding: .3rem;
		position: relative;
	}
	
	.userHd .avatar {
		width: 1.6rem;
		height: 1.6rem;
		border-radius: 1.6rem;
		margin-right: .24rem;
		box-shadow: 0px 1px 10px rgba(0, 0, 0, .25);
		flex-shrink: 0;
	}
	
	.userHd .content {
		padding: .36rem 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	.userHd .info .name {
		height: .48rem;
		line-height: .48rem;
		color: #fff;
		font-size: .36rem;
	}
	
	.userHd .level {
		height: .36rem;
		font-size: 0;
	}
	
	.userHd .level span {
		height: .36rem;
		line-height: .36rem;
		padding: 0 .1rem;
		color: #f3af45;
		font-size: .24rem;
		display: inline-block;
		background: rgba(0, 0, 0, .25);
		border-radius: 2px;
		margin-top: .08rem;
	}
	
	.userHd .goset {
		height: .6rem;
		line-height: .6rem;
		position: absolute;
		right: .3rem;
		top: 50%;
		margin-top: -.3rem;
		font-size: .28rem;
		color: #39322b;
		padding: 0 .2rem 0 .3rem;
		background-image: -webkit-linear-gradient( 180deg, #ddb486 0%, #a47c54 100%);
		border-radius:.8rem;
		font-family: "iconfont";
	}
	.userHd .goset:after{
		content: '\e7af';
		font-weight: bold;
		margin-left: 2px;
	}
	.counts{
		display: flex;
		justify-content: space-between;
		padding:.2rem 0 .4rem;
	}
	.counts .item{
		width: 100%;
		text-align: center;
	}
	.counts .tap{
		color: #fff;
	}
	.counts .name{
		font-size: .28rem;
		line-height: 1;
		margin-top: .1rem;
	}
	.counts .value{
		font-size: .36rem;
		font-weight:bold ;
		line-height: 1;
	}
</style>