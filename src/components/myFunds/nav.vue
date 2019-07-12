<template>
	<div id="myFunds">
		<ul class="set-nav bbline btline mt10">
			<li class="item">
				<router-link to="/myFunds/myCoupon" class="tap">
					<span class="name">我的优惠券</span>
					<span class="dsp" v-if="navData.coupon>0">{{navData.coupon}}张优惠券</span>
					<span class="dsp" v-if="navData.coupon==0">暂无优惠券</span>
					<i class="iconfont icon-a12r"></i>
				</router-link>
			</li>

			<li class="item">
				<router-link to="/myFunds/myRedenvelope" class="tap">
					<span class="name">我的红包</span>
					<span class="dsp" v-if="navData.redpacket>0">{{navData.redpacket}}个红包</span>
					<span class="dsp" v-if="navData.redpacket==0">暂无红包</span>
					<i class="iconfont icon-a12r"></i>
				</router-link>
			</li>
		</ul>

		<ul class="set-nav bbline btline mt10">
			<li class="item">
				<router-link to="/myFunds/myRunning" class="tap">
					<span class="name">支出记录</span>
					<span class="dsp">查看</span>
					<i class="iconfont icon-a12r"></i>
				</router-link>
			</li>

			<li class="item">
				<router-link to="/myFunds/myRunning" class="tap">
					<span class="name">收入记录</span>
					<span class="dsp">查看</span>
					<i class="iconfont icon-a12r"></i>
				</router-link>
			</li>
		</ul>

	</div>
</template>

<script>
	export default {
		props: {
			navData: {
				type: Object
			}
		},
		data() {
			return {

			}
		}
	}
</script>
<style scoped="scoped">
	@import '../../assets/css/set-nav.css';
</style>