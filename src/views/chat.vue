<template lang="html">
	<div id="chat">
		<v-header :header="header"></v-header>
		<footer class="chatBar" :style="chatBarStyle">
			<div class="chatInput">
				<span class="keyorvoice" :class="{active:isVoice}" @click="onKeyOrVoice"></span>
				<div class="input-box" :class="{active:isVoice}">
					<span class="voiceBtn" :class="{active:isSpeech}" @touchstart="onSpeech" @touchend="onEndSpeech">按住 说话</span>
					<textarea class="input-txt" @input="autoTxt" @focus="autoTxt" id="chatTxt" placeholder="输入聊天内容" :style="chatTxtStyle" v-model="chatTxt"></textarea>
				</div>
				<span class="faceBtn" :class="{active:isFace}" @click="onFace"></span>
				<span class="moreBtn" @click="onMore"></span>
			</div>
			<v-face :isFace="isFace" @getFace="onGetFace" :faceData="faceData"></v-face>
			<v-more :isMore="isMore"></v-more>
		</footer>
		<div class="rnui-content" :style="contentStyle">
			<ul class="chatList">
				<li :class="{'item':item.type!='time','time':item.type=='time','right':item.role=='my'}" v-for="(item,index) in chatData">
					<span v-if="item.type=='time'">{{item.content}}</span>
					<img v-if="item.type!='time'" :src="item.role=='my'?avatar.myAvatar:avatar.heAvatar" class="avatar">
					<div v-if="item.type=='text'" class="content">{{item.content}}</div>
					<div v-if="item.type=='video'" class="content chat-video" @click="onVideo(index)">
						<img :src="item.thumb" class="chat-video-thumb" />
					</div>
					<div v-if="item.type=='image'" class="content chat-img">
						<img :src="item.thumb" :preview="1" />
					</div>
					<div v-if="item.type=='voice'" @click="onVoice(index)" class="content chat-voice" :style="{'width':(item.second/60)*100+'%'}" :class="{active:item.active}">
						<span class="chat-voice-icon"></span>
						<span class="second">{{item.second}}''</span>
					</div>
				</li>
			</ul>
		</div>
		<v-speech :isSpeech="isSpeech"></v-speech>
	</div>
</template>

<script>
	import Vue from 'vue'
	import preview from 'vue-photo-preview'
	import 'vue-photo-preview/dist/skin.css'
	Vue.use(preview)

	import header from "@/common/header.vue"
	import tabBar from "@/common/tabBar.vue"
	import face from "@/components/chat/face.vue"
	import more from "@/components/chat/more.vue"
	import speech from "@/components/chat/speech.vue"
	export default {
		components: {
			'v-header': header,
			'v-tabBar': tabBar,
			'v-face': face,
			'v-more': more,
			'v-speech': speech
		},
		data() {
			return {
				header: {
					title: "客服咨询",
					back: {
						isBack: true
					}
				},
				avatar: {
					myAvatar: require("../assets/images/example/avatar-8.jpg"),
					heAvatar: require("../assets/images/example/avatar-9.jpg")
				},
				chatData: [{
						type: "time",
						content: "2018年12月09日 10:12"
					},
					{
						type: "text",
						role: "my",
						content: "您好！在吗？"
					},
					{
						type: "text",
						role: "he",
						content: "亲亲您好！客服思睿很荣幸为您服务，老板发话了，年底购买电脑，每天前10下单就送水冷散热器，偷偷告诉您，这个数量真的有限哦~~"
					},
					{
						type: "text",
						role: "my",
						content: "这款电脑配置怎么样？"
					},
					{
						type: "text",
						role: "he",
						content: "您看中哪个套餐呢？"
					},
					{
						type: "text",
						role: "my",
						content: "套餐二？"
					},
					{
						type: "text",
						role: "he",
						content: "i5-2.3GHz处理器、 内存256GB、显卡GTX9602G"
					},
					{
						type: "text",
						role: "he",
						content: "您还有什么问题吗？"
					},
					{
						type: "video",
						role: "my",
						src: "../../static/images/chat/video.mp4",
						thumb: "../../static/images/chat/video-thumb.jpg"
					},
					{
						type: "image",
						role: "he",
						thumb: require("../assets/images/example/p1.jpg")
					},
					{
						type: "image",
						role: "my",
						thumb: require("../assets/images/example/p2.jpg")
					},
					{
						type: "voice",
						role: "my",
						second: 5
					},
					{
						type: "voice",
						role: "he",
						second: 45
					}
				],
				faceData: [{
						src: "../../static/images/chat/face/face_01.png",
						name: "[开心]",
					},
					{
						src: "../../static/images/chat/face/face_02.png",
						name: "[恋爱]",
					},
					{
						src: "../../static/images/chat/face/face_03.png",
						name: "[憨笑]",
					},
					{
						src: "../../static/images/chat/face/face_04.png",
						name: "[微笑]",
					},
					{
						src: "../../static/images/chat/face/face_05.png",
						name: "[伤心]",
					},
					{
						src: "../../static/images/chat/face/face_06.png",
						name: "[呲牙]",
					},
					{
						src: "../../static/images/chat/face/face_07.png",
						name: "[困惑]",
					},
					{
						src: "../../static/images/chat/face/face_08.png",
						name: "[悲伤]",
					},
					{
						src: "../../static/images/chat/face/face_09.png",
						name: "[高兴]",
					},
					{
						src: "../../static/images/chat/face/face_10.png",
						name: "[愤怒]",
					},
					{
						src: "../../static/images/chat/face/face_11.png",
						name: "[生气]",
					},
					{
						src: "../../static/images/chat/face/face_12.png",
						name: "[眉眼]",
					},
					{
						src: "../../static/images/chat/face/face_13.png",
						name: "[吐舌]",
					},
					{
						src: "../../static/images/chat/face/face_14.png",
						name: "[疑惑]",
					},
					{
						src: "../../static/images/chat/face/face_15.png",
						name: "[撇嘴]",
					},
					{
						src: "../../static/images/chat/face/face_16.png",
						name: "[闭嘴]",
					},
					{
						src: "../../static/images/chat/face/face_17.png",
						name: "[亲吻]",
					},
					{
						src: "../../static/images/chat/face/face_18.png",
						name: "[困惑]",
					},
					{
						src: "../../static/images/chat/face/face_19.png",
						name: "[生气]",
					},
					{
						src: "../../static/images/chat/face/face_20.png",
						name: "[惊恐]",
					},
					{
						src: "../../static/images/chat/face/face_21.png",
						name: "[发呆]",
					},
					{
						src: "../../static/images/chat/face/face_22.png",
						name: "[机智]",
					},
					{
						src: "../../static/images/chat/face/face_23.png",
						name: "[惊讶]",
					},
					{
						src: "../../static/images/chat/face/face_24.png",
						name: "[大哭]",
					},
					{
						src: "../../static/images/chat/face/face_25.png",
						name: "[生病]",
					},
					{
						src: "../../static/images/chat/face/face_26.png",
						name: "[可疑]",
					},
					{
						src: "../../static/images/chat/face/face_27.png",
						name: "[流泪]",
					},
					{
						src: "../../static/images/chat/face/face_28.png",
						name: "[忍者]",
					},
					{
						src: "../../static/images/chat/face/face_29.png",
						name: "[无聊]",
					},
					{
						src: "../../static/images/chat/face/face_30.png",
						name: "[苦闷]",
					},
					{
						src: "../../static/images/chat/face/face_31.png",
						name: "[表情]",
					},
					{
						src: "../../static/images/chat/face/face_32.png",
						name: "[尴尬]",
					},
					{
						src: "../../static/images/chat/face/face_33.png",
						name: "[厌烦]",
					},
					{
						src: "../../static/images/chat/face/face_34.png",
						name: "[秘密]",
					},
					{
						src: "../../static/images/chat/face/face_35.png",
						name: "[可爱]",
					},
					{
						src: "../../static/images/chat/face/face_36.png",
						name: "[愉快]",
					}
				],
				chatTxt: '',
				pageW: document.body.clientWidth,
				chatBarStyle: '',
				contentStyle: '',
				chatTxtStyle: '',
				isVoice: false,
				isFace: false,
				isMore: false,
				isSpeech: false,
				isFull: document.fullscreenEnabled
			}
		},

		methods: {
			insertText: function(obj, str) {
				if(document.selection) {
					var sel = document.selection.createRange();
					sel.text = str;
				} else if(typeof obj.selectionStart === 'number' && typeof obj.selectionEnd === 'number') {
					var startPos = obj.selectionStart,
						endPos = obj.selectionEnd,
						cursorPos = startPos,
						tmpStr = obj.value;
					obj.value = tmpStr.substring(0, startPos) + str + tmpStr.substring(endPos, tmpStr.length);
					cursorPos += str.length;
					obj.selectionStart = obj.selectionEnd = cursorPos;
					this.$set(this.$data, 'chatTxt', obj.value);
				} else {
					//obj.value += str;
					this.$set(this.$data, 'chatTxt', str);
				}
			},

			setChatH: function(h) {
				this.$set(this.$data, 'chatBarStyle', {
					"height": h + "px"
				});
				this.$set(this.$data, 'contentStyle', {
					"paddingBottom": h + "px"
				});
				setTimeout(() => {
					window.scrollTo({
						top: document.body.scrollHeight,
						behavior: 'smooth'
					});
				}, 300)
			},
			getBytes: function(str) {
				let bytesCount = 0;
				for(let i = 0; i < str.length; i++) {
					let c = str.charAt(i);
					if(/^[\u0000-\u00ff]$/.test(c)) //匹配双字节
					{
						bytesCount += 1;
					} else {
						bytesCount += 2;
					}
				}
				return bytesCount;
			},

			autoTxt: function() {
				let obj = document.getElementById("chatTxt");
				let tW = 0.3 * 5 * this.pageW / 37.5;
				let bW = obj.offsetWidth - 10;
				let cW = this.getBytes(this.chatTxt) * 0.5;
				let row = Math.ceil(cW * tW / bW);
				row = row > 0 ? row : 1;
				let h = row * 20 + 16;
				let by = h < 76 ? h : 76;
				let _self = this;
				this.setChatH(by + 13);
				setTimeout(() => {
					_self.$set(_self.$data, 'chatTxtStyle', {
						"height": h + "px"
					});
				}, 10)
			},
			onKeyOrVoice: function() {
				let _self = this;
				if(this.isVoice) {
					this.$set(this.$data, 'isVoice', false);
				} else {
					this.$set(this.$data, 'isVoice', true);
					this.setChatH(49);
					this.$set(this.$data, 'chatTxtStyle', {
						"height": 36 + "px"
					});
					setTimeout(() => {
						_self.$set(_self.$data, 'isFace', false);
					}, 300)
				}
			},
			onFace: function() {
				let _self = this;
				this.$set(this.$data, 'chatTxtStyle', {
					"height": 36 + "px"
				});
				if(this.isFace) {
					this.setChatH(49);
					setTimeout(() => {
						_self.$set(_self.$data, 'isFace', false);
					}, 300)
				} else {
					this.$set(this.$data, 'isFace', true);
					this.$set(this.$data, 'isVoice', false);
					this.$set(this.$data, 'isMore', false);
					this.setChatH(2.36 * 5 * this.pageW / 37.5 + 49);
				}
			},
			onMore: function() {
				let _self = this;
				this.$set(this.$data, 'chatTxtStyle', {
					"height": 36 + "px"
				});
				if(this.isMore) {
					this.setChatH(49);
					setTimeout(() => {
						_self.$set(_self.$data, 'isMore', false);
					}, 300)
				} else {
					this.$set(this.$data, 'isMore', true);
					this.$set(this.$data, 'isVoice', false);
					this.$set(this.$data, 'isFace', false);
					this.setChatH(2.28 * 5 * this.pageW / 37.5 + 49);
				}
			},
			onGetFace: function(i) {
				let obj = document.getElementById("chatTxt");
				this.insertText(obj, this.faceData[i].name);
			},
			onSpeech: function() {
				let _self = this;
				this.timer = setTimeout(() => {
					_self.$set(_self.$data, 'isSpeech', true);
				}, 100)
			},
			onEndSpeech: function() {
				let _self = this;
				_self.$set(_self.$data, 'isSpeech', false);
				clearTimeout(this.timer);
			},
			launchFullScreen: function(element) {
				if(element.requestFullscreen) {
					element.requestFullscreen();
				} else if(element.mozRequestFullScreen) {
					element.mozRequestFullScreen();
				} else if(element.msRequestFullscreen) {
					element.msRequestFullscreen();
				} else if(element.oRequestFullscreen) {
					element.oRequestFullscreen();
				} else if(element.webkitRequestFullscreen) {
					element.webkitRequestFullScreen();
				}
			},
			exitFullScreen: function(obj) {
				let video = document.getElementById(obj);
				video.addEventListener('ended', () => {
					video.remove();
				})
			},
			onVideo: function(i) {
				let video = document.createElement("video");
				video.setAttribute('src', this.chatData[i].src);
				video.setAttribute('id', 'myVideo-' + i);
				video.style.width = "0px";
				video.style.height = "0px";
				document.body.append(video);
				this.launchFullScreen(video);
				video.play();
				this.exitFullScreen('myVideo-' + i);
			},
			onVoice: function(i) {
				let _self = this;
				if(_self.chatData[i].active == false||_self.chatData[i].active == undefined) {
					_self.chatData.forEach(function(item) {
						if(item.type == "voice") {
							_self.$set(item, 'active', false);
						}
					})
					_self.$set(_self.chatData[i], 'active', true);
					this.timer = setTimeout(() => {
						_self.$set(_self.chatData[i], 'active', false);
					}, _self.chatData[i].second * 1000);
				} else {
					clearTimeout(this.timer);
					_self.$set(_self.chatData[i], 'active', false);
				}
			}
		},
		mounted() {
			this.$previewRefresh();
		},
		beforeCreate() {
			document.querySelector('body').setAttribute('style', 'background:#f2f2f2;')
		},
		beforeDestroy() {
			document.querySelector('body').removeAttribute('style')
		}
	}
</script>
<style scoped="scoped">
	.rnui-content {
		background: #f2f2f2;
	}
	
	.chatBar {
		height: 49px;
		overflow: hidden;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 100;
		background: #f9f9f9;
		transition: all 0.3s;
	}
	
	.chatBar~.rnui-content {
		padding-bottom: 49px;
	}
	
	.chatBar:before {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		height: 1px;
		background: #dbdbdb;
		transform: scaleY(.5);
	}
	
	.rnui-header:after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 1px;
		background: #dbdbdb;
		transform: scaleY(.5);
	}
	
	.chatList {
		padding-bottom: .3rem;
	}
	
	.chatList .item {
		margin: .3rem .3rem 0;
		position: relative;
		font-size: 0;
		display: flex;
		display: -webkit-flex;
	}
	
	.chatList .avatar {
		width: .8rem;
		height: .8rem;
		margin-right: .3rem;
		-webkit-border-radius: 3px;
		border-radius: 3px;
		flex-shrink: 0;
	}
	
	.chatList .content {
		padding: .2rem;
		background: #FFF;
		line-height: .4rem;
		font-size: .32rem;
		color: #282828;
		-webkit-border-radius: .1rem;
		border-radius: .1rem;
		display: inline-block;
		position: relative;
		word-wrap: break-word;
		word-break: break-all;
		margin-right: 1.1rem;
	}
	
	.chatList .content .face-img {
		display: inline-block;
		vertical-align: middle;
		width: .36rem;
		height: .36rem;
		margin: -2px 2px 0;
	}
	
	.chatList .content:before {
		content: '';
		position: absolute;
		left: -6px;
		top: 14px;
		width: 0;
		height: 0;
		border-top: 6px solid transparent;
		border-bottom: 6px solid transparent;
		border-right: 6px solid #fff;
	}
	
	.chatList .item.right {
		text-align: right;
		justify-content: flex-end;
	}
	
	.chatList .item.right .avatar {
		order: 1;
		margin: 0 0 0 .3rem;
	}
	
	.chatList .item.right .content {
		order: 0;
		text-align: left;
		background: #0aaff0;
		color: #FFF;
		margin-left: 1.1rem;
		margin-right: 0;
	}
	
	.chatList .item.right .content:before {
		left: auto;
		right: -6px;
		border: none;
		border-top: 6px solid transparent;
		border-bottom: 6px solid transparent;
		border-left: 6px solid #0aaff0;
	}
	
	.chatList .time {
		text-align: center;
		font-size: 0;
		margin-top: 15px;
	}
	
	.chatList .time span {
		background: #c3c4c8;
		font-size: 10px;
		color: #FFF;
		height: 18px;
		line-height: 18px;
		padding: 0 5px;
		display: inline-block;
		-webkit-border-radius: 4px;
		border-radius: 4px;
	}
	
	.chatList .chat-img {
		padding: 0;
		border-radius: .1rem;
	}
	
	.chatList .chat-img:before {
		display: none;
	}
	
	.chatList .chat-img img {
		height: 2.82rem;
		border-radius: .1rem;
	}
	
	.chatList .chat-voice {
		min-width: 1.4rem;
		font-size: 0;
	}
	
	.chatList .chat-voice-icon {
		width: 20px;
		height: 20px;
		display: inline-block;
		vertical-align: middle;
		opacity: .8;
		background: url(../../static/images/chat/chatVoice.png);
		background-size: 20px 20px;
	}
	
	.chatList .chat-voice.active .chat-voice-icon {
		background-image: url(../../static/images/chat/chatVoice.gif);
	}
	
	.chatList .chat-voice .second {
		font-size: .24rem;
		color: #92999D;
		position: absolute;
		right: -10px;
		top: 0;
		bottom: 0;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		justify-content: center;
		transform: translateX(100%);
	}
	
	.chatList .item.right .chat-voice-icon {
		background-image: url(../../static/images/chat/chatVoice-right.png);
	}
	
	.chatList .item.right .chat-voice.active .chat-voice-icon {
		background-image: url(../../static/images/chat/chatVoice-right.gif);
	}
	
	.chatList .item.right .chat-voice {
		text-align: right;
	}
	
	.chatList .item.right .chat-voice .second {
		right: auto;
		left: -10px;
		transform: translateX(-100%);
	}
	
	.chatList .chat-video {
		padding: 0;
		border-radius: .1rem;
		font-size: 0;
		background: none !important;
	}
	
	.chatList .chat-video:before {
		border: none !important;
		width: 100%;
		height: 100%;
		left: 0 !important;
		right: 0 !important;
		bottom: 0;
		top: 0;
		z-index: 3;
		background: rgba(0, 0, 0, .5);
		border-radius: .1rem;
		text-align: center;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		justify-content: center;
		font-family: "iconfont";
		content: '\e82c';
		font-size: .6rem;
		color: rgba(255, 255, 255, .75);
	}
	
	.chatList .chat-video-thumb {
		height: 2.8rem;
		border-radius: .1rem;
	}
	
	.chatList .chat-video video {
		width: 0;
		height: 0;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 1;
	}
	
	.chatInput {
		display: flex;
		display: -webkit-flex;
	}
	
	.chatInput:before {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		border-top: #d5d8da 1px solid;
		transform: scaleY(.5);
	}
	
	.keyorvoice {
		width: 44px;
		height: 49px;
		padding: 10px 8px;
		margin-right: -10px;
		display: block;
		flex-shrink: 0;
		background: url(../../static/images/chat/chat-voice.png) center no-repeat;
		background-size: 30px 30px;
	}
	
	.keyorvoice.active {
		background-image: url(../../static/images/chat/chat-keyboard.png);
	}
	
	.faceBtn {
		width: 38px;
		height: 49px;
		display: block;
		flex-shrink: 0;
		background: url(../../static/images/chat/chat-face.png) left center no-repeat;
		background-size: 30px 30px;
	}
	
	.faceBtn.active {
		background-image: url(../../static/images/chat/chat-keyboard.png);
	}
	
	.moreBtn {
		width: 38px;
		height: 49px;
		display: block;
		flex-shrink: 0;
		background: url(../../static/images/chat/chat-more.png) left center no-repeat;
		background-size: 30px 30px;
	}
	
	.chatBtn {
		width: 48px;
		padding: 0;
		height: 28px;
		border: none;
		line-height: 1;
		display: block;
		margin: 10px 7px 10px 0;
		flex-shrink: 0;
	}
	
	.chatInput .input-box {
		width: 100%;
		padding: 7px 0 6px;
		margin: 0 10px;
	}
	
	.chatInput .input-txt {
		width: 100%;
		height: 36px;
		font-size: .3rem;
		background: #fff;
		border: none;
		line-height: 20px;
		padding: 8px 5px;
		-webkit-border-radius: 5px;
		border-radius: 5px;
		display: block;
		max-height: 80px;
		overflow-y: auto;
		-webkit-appearance: none;
		max-height: 76px;
	}
	
	.chatInput .voiceBtn {
		width: 100%;
		height: 36px;
		font-size: 15px;
		background: #fff;
		line-height: 20px;
		padding: 7px 9px;
		-webkit-border-radius: 5px;
		border-radius: 5px;
		display: none;
		text-align: center;
		transition: all .5s;
		-webkit-user-select: none;
	}
	
	.chatInput .input-box.active .voiceBtn {
		display: block;
	}
	
	.chatInput .input-box.active .input-txt {
		display: none;
	}
	
	.chatInput .voiceBtn.active {
		background: #d5d8da;
	}
</style>