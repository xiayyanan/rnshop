export default {
	baseData: {
		avatar: require("../assets/images/example/avatar-1.jpg"),
		name: "零的知名度",
		level: "普通会员",
		counts: [{
				name: "收藏夹",
				value: "288",
				pagePath: "/myCollect"
			},
			{
				name: "关注店铺",
				value: "53",
				pagePath: "/myShop"
			},
			{
				name: "足迹",
				value: "166",
				pagePath: "/myView"
			},
			{
				name: "红包卡券",
				value: "20",
				pagePath: "/myFunds"
			}
		]
	},
	collectData: [{
			thumb: require("../assets/images/example/p1.jpg"),
			price: "8999.00",
			pagePath: "/detail"
		},
		{
			thumb: require("../assets/images/example/p2.jpg"),
			price: "2799.00",
			pagePath: "/detail"
		},
		{
			thumb: require("../assets/images/example/p3.jpg"),
			price: "6399.00",
			pagePath: "/detail"
		},
		{
			thumb: require("../assets/images/example/p4.jpg"),
			price: "4299.00",
			pagePath: "/detail"
		}
	]
}