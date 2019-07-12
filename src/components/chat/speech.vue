<template>
	<div class="chatSpeech" :class="{active:isSpeech}">
		<div class="item">
			<div class="time">
				<div class="track">
					<i class="line"></i>
					<i class="line"></i>
					<i class="line"></i>
				</div>
				<div class="text">00:00</div>
				<div class="track">
					<i class="line"></i>
					<i class="line"></i>
					<i class="line"></i>
				</div>
			</div>
			<span class="microphone"></span>
			<div class="ctips">手指上滑 取消发送</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['isSpeech'],
		data() {
			return {
			}
		},
		methods: {
			onFace: function(i) {
				this.$emit('getFace', i)
			}
		},
	}
</script>

<style>
	.chatSpeech {
		width: 2.4rem;
		height: 2.4rem;
		position: fixed;
		z-index: 100;
		border-radius: 5px;
		background: rgba(0, 0, 0, .75);
		left: 50%;
		top: 50%;
		margin: -1.2rem 0 0 -1.2rem;
		display: none;
	}
	
	.chatSpeech.active {
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		justify-content: center;
	}
	
	.chatSpeech .time {
		display: block;
		height: 12px;
		line-height: 12px;
		color: #fff;
		text-align: center;
		display: flex;
		display: -webkit-flex;
		justify-content: center;
	}
	
	.chatSpeech .text {
		display: block;
		margin: 0 7px;
	}
	
	.chatSpeech .microphone {
		display: block;
		width: .96rem;
		height: .96rem;
		background: url(../../../static/images/chat/microphone.png);
		background-size: .96rem;
		margin: .2rem auto 0;
	}
	
	.chatSpeech .track {
		width: 14px;
		height: 12px;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
	}
	
	.chatSpeech .track .line {
		display: block;
		width: 2px;
		background: #fff;
	}
	
	.chatSpeech .track .line:nth-child(1) {
		animation: linear track_ani1 1s infinite;
	}
	
	.chatSpeech .track .line:nth-child(2) {
		animation: linear track_ani2 1s infinite;
	}
	
	.chatSpeech .track .line:nth-child(3) {
		animation: linear track_ani3 1s infinite;
	}
	
	@keyframes track_ani1 {
		0% {
			transform: scaleY(1);
		}
		12% {
			transform: scaleY(.8);
		}
		24% {
			transform: scaleY(.6);
		}
		36% {
			transform: scaleY(.4);
		}
		50% {
			transform: scaleY(.2);
		}
		64% {
			transform: scaleY(.4);
		}
		76% {
			transform: scaleY(.6);
		}
		88% {
			transform: scaleY(.8);
		}
		100% {
			transform: scaleY(1);
		}
	}
	
	@keyframes track_ani2 {
		0% {
			transform: scaleY(.2);
		}
		12% {
			transform: scaleY(.4);
		}
		24% {
			transform: scaleY(.6);
		}
		36% {
			transform: scaleY(.8);
		}
		50% {
			transform: scaleY(1);
		}
		64% {
			transform: scaleY(.8);
		}
		76% {
			transform: scaleY(.6);
		}
		88% {
			transform: scaleY(.4);
		}
		100% {
			transform: scaleY(.2);
		}
	}
	
	@keyframes track_ani3 {
		0% {
			transform: scaleY(.6);
		}
		12% {
			transform: scaleY(.8);
		}
		24% {
			transform: scaleY(1);
		}
		36% {
			transform: scaleY(.8);
		}
		50% {
			transform: scaleY(.6);
		}
		64% {
			transform: scaleY(.4);
		}
		76% {
			transform: scaleY(.2);
		}
		88% {
			transform: scaleY(.4);
		}
		100% {
			transform: scaleY(.6);
		}
	}
</style>