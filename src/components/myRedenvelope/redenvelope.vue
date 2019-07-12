<template>
	<ul class="myRedenvelope">
		<li class="item" :class="{fail:item.expired}" v-for="item in myRedenvelopeData">
			<img src="../../../static/images/icon-Redenvelope.png" class="img-icon">
			<div class="content">
				<p class="title">
					<span class="stores">{{item.stores}}</span>
					<span class="money red">¥<em class="unit">{{item.values}}</em></span>
				</p>
				<p class="time">{{item.limit}}</p>
				<p class="time">{{item.time}}</p>
			</div>
		</li>
	</ul>
</template>

<script>
	export default {
		props: {
			myRedenvelopeData: {
				type: Array,
				default: function() {
					return []
				}
			}
		},
		data() {
			return {

			}
		}
	}
</script>
<style scoped="scoped">
	.myRedenvelope {
		margin: 0 .24rem .24rem .24rem;
	}
	
	.myRedenvelope .item {
		background: #fff;
		margin-top: .24rem;
		padding: .24rem;
		position: relative;
		border-radius: 8px;
		display: flex;
		justify-content: space-between;
	}
	
	.myRedenvelope .img-icon {
		width: 1.56rem;
		height: 1.32rem;
		flex-shrink: 0;
	}
	
	.myRedenvelope .content {
		width: 100%;
		margin-left: .24rem;
	}
	
	.myRedenvelope .title {
		height: .6rem;
		line-height: .6rem;
		font-size: .28rem;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}

	.myRedenvelope .money .unit {
		font-size: .36rem;
		margin-left: 2px;
	}
	
	.myRedenvelope .time {
		height: .36rem;
		line-height: .36rem;
		font-size: .24rem;
		white-space: nowrap;
		color: #92999D;
	}
	
	.myRedenvelope .fail .img-icon {
		-webkit-filter: grayscale(100%);
		filter: grayscale(100%);
		filter: gray;
		opacity: .5;
	}
</style>