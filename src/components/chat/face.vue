<template>
	<div class="chatFace" :class="{active:isFace}">
		<mt-swipe :auto="0">
			<mt-swipe-item v-for="(item,idxA) in faces" :key="idxA">
				<div class="item" v-for="(itemsub,idxB) in item" @click="onFace(idxB+idxA*18)">
					<img :src="itemsub.src">
				</div>
			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	import { Swipe, SwipeItem } from 'mint-ui';
	export default {
		props: ['faceData','isFace'],
		data(){
			return {
				faces:[]
			}
		},
		methods: {
			faceToMulti: function() {
				let arr = [];
				let i = 0;
				this.faceData.forEach(function(item, index) {
					if(index == 0) {
						arr[i] = [];
					} else if(index % 18 == 0) {
						i++;
						arr[i] = [];
					}
					arr[i].push(item);
				})
				this.$set(this.$data, 'faces', arr);
			},
			onFace:function(i){
				this.$emit('getFace', i)
			}
		},
		mounted() {
			this.faceToMulti();
		},
	}
</script>

<style>
	.chatFace {
		width: 100%;
		bottom: 0;
		background: #f9f9f9;
		height: 0;
		height: 2.36rem;
		overflow: hidden;
		position: relative;
		display: none;
	}
	.chatFace.active{
		display: block;
	}
	.chatFace:before {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		height: 1px;
		background: #dbdbdb;
		transform: scaleY(.5);
	}
	.chatFace .item {
		width: 11.11%;
		padding: .2rem;
		float: left;
	}
	
	.chatFace .item img {
		width: .48rem;
		height: .48rem;
		margin: 0 auto;
	}
	
	.chatFace .mint-swipe {
		padding-top: .1rem;
		height: 2.36rem;
	}
	.chatFace .mint-swipe-indicator {
		opacity: 1;
		background: rgba(0,0,0,.25);
		margin: 0 6px;
	}
	
	.chatFace .mint-swipe-indicator.is-active {
		background: rgba(0,0,0,.5);
	}
</style>