<template>
	<div class="logisticsList mt10">
		<ul>
			<li class="item" :class="{active:item.active}" v-for="item in listData">
				<i class="line"></i>
				<i class="ico"></i>
				<div class="content">
					<p class="text">{{item.status}}</p>
					<p class="time">{{item.time}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: ['listData']
	}
</script>

<style scoped="scoped">
	.logisticsList {
		padding: .42rem .24rem .18rem;
		background: #FFF;
		margin-top: .2rem;
	}
	
	.logisticsList ul {
		position: relative;
		z-index: 4;
	}
	
	.logisticsList .line {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 5px;
		top: 5px;
		z-index: 99;
		width: 1px;
		background: #e5e8ea;
	}
	
	.logisticsList li:last-child .line {
		display: none;
	}
	
	.logisticsList li {
		color: #92999d;
		position: relative;
		padding-bottom: .24rem;
		padding-left: 30px;
	}
	
	.logisticsList .content {
		padding-bottom: .24rem;
		font-size: .24rem;
		position: relative;
	}
	
	.logisticsList .content:after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 1px;
		background: #e5e8ea;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}
	
	.logisticsList li:last-child .content {
		padding-bottom: 0;
	}
	
	.logisticsList li:last-child .content:after {
		display: none;
	}
	
	.logisticsList .ico {
		width: 11px;
		height: 11px;
		display: block;
		position: absolute;
		left: 0px;
		top: 0px;
		z-index: 101;
	}
	
	.logisticsList .ico:before {
		width: 11px;
		height: 11px;
		display: block;
		position: absolute;
		z-index: 2;
		left: 0;
		top: 0;
		background: #d5d8da;
		content: "";
		-webkit-border-radius: 15px;
		border-radius: 15px;
	}
	
	.logisticsList .active {
		color: #4ecc80;
	}
	
	.logisticsList .active .ico:before {
		width: 13px;
		height: 13px;
		left: -1px;
		top: -1px;
		background: #4ecc80;
	}
	
	.logisticsList .active .ico:after {
		width: 19px;
		height: 19px;
		display: block;
		position: absolute;
		z-index: 1;
		left: -4px;
		top: -4px;
		background: #c9f1d8;
		content: "";
		-webkit-border-radius: 19px;
		border-radius: 15px;
	}
</style>