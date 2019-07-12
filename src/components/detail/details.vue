<template>
	<div class="details box mt10 clearfix">
		<div class="idx-tit bbline">
			<span class="name">图文详情</span>
		</div>
		<div class="content" v-html="detailsData"></div>
	</div>
</template>

<script>
	export default {
		props: {
			detailsData: String
		}
	}
</script>
<style>
	.details .content {
		padding: .3rem;
		font-size: .28rem;
		line-height: 2
	}
	
	.details .content img {
		max-width: 100%;
	}
</style>