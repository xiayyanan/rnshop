<template>
	<div class="top">
		<ul class="idxNav clearfix">
			<li class="item" v-for="item in idxNavData" :key="item.id">
				<router-link :to="item.pagePath" class="tap">
					<img v-bind:src="item.icon" class="img-icon">
					<p class="name">{{item.name}}</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: {
			idxNavData: {
				type: Array,
				default: function() {
					return []
				}
			}
		}
	}
</script>
<style scoped="scoped">
	.top{
		margin-top: -44px;
		background: #ff2741;
		padding: 44px 0 1.58rem 0;
	}
	.idxNav {
		display: flex;
		flex-wrap: nowrap;
	}
	
	.idxNav .item {
		width: 25%;
		flex-shrink: 0;
	}
	
	.idxNav .img-icon {
		width: .9rem;
		height: .9rem;
		border-radius: .9rem;
		margin: 0 auto;
		box-shadow: 0px 1px .4rem rgba(0, 0, 0, .25);
	}
	
	.idxNav .tap {
		padding: .4rem 0;
		color: #fff;
	}
	
	.idxNav .name {
		line-height: 1;
		font-size: .24rem;
		text-align: center;
		margin-top: .24rem;
	}
</style>