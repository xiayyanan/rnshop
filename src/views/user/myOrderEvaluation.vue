<template lang="html">
	<div id="myOrder">
		<v-header :header="header"></v-header>
		<footer class="rnui-footer">
			<button class="btn f-full-btn">发表评价</button>
		</footer>
		<div class="rnui-content">
			<div class="Review">
				<div class="input-box bbline">
					<textarea name="" class="tra" placeholder="宝贝满足你的期待吗？说说它的优点和美中不足吧~"></textarea>
				</div>
				<ul class="up-sun bbline">
					<li class="item" v-for="item in evaluate">
						<span class="del"></span>
						<div class="imgbox">
							<img :src="item.thumb">
						</div>
					</li>
					<li class="item">
						<div class="imgbox">
							<img src="../../../static/images/up-sun.png">
						</div>
					</li>
				</ul>

				<div class="score mt10">
					<div class="score-item" v-for="(itemA,idxA) in scoreData">
						<span class="bt">{{itemA.name}}</span>
						<div class="score-opn">
							<span class="tab" :class="[idxB<=itemA.tIdx?itemA.tName:'']" @click='score(idxA,idxB)' v-for="(itemB,idxB) in scoreTips">
								<a href="javascript:void(0)"></a>
							</span>
						</div>
						<div class="score-tips" :class="[itemA.cName!=undefined?'active':'',itemA.cName]">{{itemA.text}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import header from "@/common/header.vue"
	export default {
		components: {
			'v-header': header
		},
		data() {
			return {
				header: {
					title: '订单评价',
					back: {
						isBack: true
					}
				},
				evaluate: [{
						thumb: require("../../assets/images/example/evaluate-1.jpg")
					},
					{
						thumb: require("../../assets/images/example/evaluate-2.jpg")
					},
					{
						thumb: require("../../assets/images/example/evaluate-3.jpg")
					},
					{
						thumb: require("../../assets/images/example/evaluate-4.jpg")
					}
				],
				scoreData: [{
						name: '发货速度'
					},
					{
						name: '服务态度'
					},
					{
						name: '描述相符'
					}
				],
				scoreTips: [{
						text: '1分 失望',
						cname: 'score-tips-1',
						tname: 'tab-1'
					},
					{
						text: '2分 不满',
						cname: 'score-tips-1',
						tname: 'tab-1'
					},
					{
						text: '3分 一般',
						cname: 'score-tips-2',
						tname: 'tab-2'
					},
					{
						text: '4分 满意',
						cname: 'score-tips-2',
						tname: 'tab-2'
					},
					{
						text: '5分 惊喜',
						cname: 'score-tips-3',
						tname: 'tab-3'
					}
				]
			}
		},
		methods: {
			score (idxA,idxB) {
				this.$set(this.scoreData[idxA],'tIdx',idxB);
				this.$set(this.scoreData[idxA],'tName', this.scoreTips[idxB].tname);
				this.$set(this.scoreData[idxA],'cName', this.scoreTips[idxB].cname);
				this.$set(this.scoreData[idxA],'text', this.scoreTips[idxB].text);
			}
		}
	}
</script>
<style scoped="scoped">
	.rnui-header:after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 1px;
		background: #d5d8da;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}
	
	.Review .input-box {
		background: #fff;
		position: relative;
	}
	
	.Review .tra {
		display: block;
		width: 100%;
		padding: .24rem;
		height: 3rem;
		font-size: .28rem;
	}
	
	.up-sun {
		padding: .04rem .04rem .24rem .24rem;
		background: #fff;
		display: flex;
		display: -webkit-flex;
		flex-wrap: wrap;
		position: relative;
	}
	
	.up-sun .item {
		margin: .2rem .2rem 0 0;
		position: relative;
	}
	
	.up-sun .del {
		font-family: "iconfont";
		width: 18px;
		height: 18px;
		font-size: 18px;
		display: block;
		position: absolute;
		right: -9px;
		top: -9px;
		color: #ff2741;
	}
	
	.up-sun .del:before {
		content: '\e820';
	}
	
	.up-sun .imgbox {
		width: 1.24rem;
		height: 1.24rem;
		overflow: hidden;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		justify-content: center;
	}
	
	.score {
		position: relative;
		background: #fff;
		padding: .24rem;
	}
	
	.score-item {
		position: relative;
		padding: .1rem 0;
		display: flex;
		display: -webkit-flex;
	}
	
	.score-item .bt {
		line-height: .48rem;
		font-size: .28rem;
		color: #62666d;
		margin-right: .2rem;
	}
	
	.score-opn {
		width: 3rem;
		height: .48rem;
		font-size: 0;
	}
	
	.score-opn .tab {
		width: .6rem;
		height: .48rem;
		text-align: center;
		display: inline-block;
	}
	
	.score-opn .tab a {
		width: .48rem;
		height: .48rem;
		font-size: 18px;
		text-align: center;
		line-height: .48rem;
		font-family: "iconfont" !important;
		color: #d5d8da;
	}
	
	.score-opn .tab a:before {
		content: "\e815";
	}
	
	.score-opn .tab-1 a {
		color: #95989a;
	}
	
	.score-opn .tab-2 a {
		color: #fab54d;
	}
	
	.score-opn .tab-3 a {
		color: #ff2741;
	}
	
	.score-opn .tab-1 a:before,
	.score-opn .tab-2 a:before,
	.score-opn .tab-3 a:before {
		content: "\e810";
	}
	
	.score-tips {
		height: 20px;
		line-height: 18px;
		font-size: 12px;
		padding: 0 5px;
		text-align: center;
		color: #999;
		border: #9aa0ac 1px solid;
		background: #FFF;
		-webkit-border-radius: 2px;
		border-radius: 2px;
		position: absolute;
		right: 0;
		top: 50%;
		margin-top: -9px;
		display: none;
	}
	
	.score-tips.active {
		display: block;
	}
	
	.score-tips:after {
		content: '';
		width: 0;
		height: 0;
		display: block;
		position: absolute;
		left: -6px;
		top: 50%;
		margin-top: -5px;
		border-top: 5px solid transparent;
		border-bottom: 5px solid transparent;
		border-right: 5px solid #9aa0ac;
		z-index: 1;
	}
	
	.score-tips:before {
		content: '';
		width: 0;
		height: 0;
		display: block;
		position: absolute;
		left: -5px;
		top: 50%;
		margin-top: -4px;
		border-top: 4px solid transparent;
		border-bottom: 4px solid transparent;
		border-right: 5px solid #ffffff;
		z-index: 2;
	}
	
	.score-tips-2 {
		border-color: #fab54d;
		background: #fff6e9;
		color: #fab54d;
	}
	
	.score-tips-3 {
		border-color: #ff2741;
		background: #fbe9e9;
		color: #ff2741;
	}
	
	.score-tips-2:after {
		border-right-color: #fab54d;
	}
	
	.score-tips-3:after {
		border-right-color: #ff2741;
	}
	
	.score-tips-2:before {
		border-right-color: #fff6e9;
	}
	
	.score-tips-3:before {
		border-right-color: #fbe9e9;
	}
</style>