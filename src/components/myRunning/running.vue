<template>
	<ul class="myRunning">
		<li class="item" v-for="item in myRunningData">
			<div class="running-time">
				<p class="date">{{item.month}}</p>
				<p class="info">{{item.counts}}</p>
			</div>
			<ul class="running-list btline bbline">
				<li class="itemsub" v-for="itemsub in item['listData']">
					<div class="flag">
						<img :src="typeData[itemsub.type].imgicon">
					</div>
					<div class="content">
						<p class="hd">
							<span class="name">{{itemsub.name}}</span>
							<span class="value" :class="{red:itemsub.type==1}">{{itemsub.values}}</span>
						</p>
						<p class="time">{{itemsub.time}}</p>
					</div>
				</li>
			</ul>
		</li>
	</ul>
</template>

<script>
	export default {
		props: {
			myRunningData: {
				type: Array,
				default: function() {
					return []
				}
			}
		},
		data() {
			return {
				typeData: [{
						imgicon: "../../../static/images/zjmx-tixian.png"
					},
					{
						imgicon: "../../../static/images/zjmx-yongjin.png"
					},
					{
						imgicon: "../../../static/images/zjmx-gmsp.png"
					}
				]
			}
		}
	}
</script>
<style scoped="scoped">
	.running-time {
		padding: .24rem;
		background: #f6f6f6;
		position: sticky;
		top: 0;
		z-index: 10;
	}
	
	.running-time .date {
		font-size: .3rem;
		line-height: .36rem;
		margin-top: .06rem;
	}
	
	.running-time .info {
		font-size: .24rem;
		line-height: .3rem;
		color: #b2b2b2;
		margin-top: .08rem;
	}
	
	.running-list {
		background: #FFF;
		position: relative;
	}
	
	.running-list .itemsub {
		padding: .3rem;
		position: relative;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	
	.running-list .itemsub:after {
		content: '';
		position: absolute;
		left: .3rem;
		right: 0;
		bottom: 0;
		height: 1px;
		background: #e5e8ea;
		transform: scaleY(0.5);
	}
	
	.running-list .itemsub:last-child:after {
		display: none;
	}
	
	.running-list .flag {
		width: .84rem;
		margin-right: .3rem;
		flex-shrink: 0;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		justify-content: center;
	}
	
	.running-list .flag img {
		width: 100%;
		border-radius: .84rem;
	}
	
	.running-list .content {
		width: 100%;
	}
	
	.running-list .hd {
		height: .48rem;
		line-height: .48rem;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	
	.running-list .name {
		width: 100%;
		font-size: .28rem;
		overflow: hidden;
	}
	
	.running-list .value {
		font-size: .36rem;
		flex-shrink: 0;
		margin-left: .18rem;
	}
	
	.running-list .time {
		height: .4rem;
		line-height: .4rem;
		font-size: .24rem;
		margin-top: .12rem;
		color: #92999D;
	}
</style>