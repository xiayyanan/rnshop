<template>
	<div class="logisticsInfo">
		<div class="imgbox">
			<img :src="logisticsData.thumb">
		</div>
		<div class="content">
			<p class="status">
				<span>物流状态</span>
				<span class="red">{{logisticsData.status}}</span>
			</p>
			<p>运单编号：{{logisticsData.numbers}}</p>
			<p>信息来源：{{logisticsData.name}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['logisticsData']
	}
</script>

<style scoped="scoped">
	.logisticsInfo {
		padding: .24rem;
		height: 1.8rem;
		background: #FFF;
		position: relative;
		font-size: .24rem;
		color: #92999d;
		line-height: .4rem;
		position: relative;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	
	.logisticsInfo .imgbox {
		width: 1.28rem;
		height: 1.28rem;
		border: #e5e8ea 1px solid;
		flex-shrink: 0;
		margin-right: .24rem;
	}
	
	.logisticsInfo .content {
		width: 100%;
	}
	
	.logisticsInfo .status {
		line-height: .48rem;
		font-size: .28rem;
		color: #25282a;
	}
</style>