export default {
	myOrderDetailsData: {
		logistics: {
			status: "已签收，感谢使用顺丰，期待再次为您服务",
			time: "2018-03-10 10:03:00"
		},
		address: {
			name: "周杰伦",
			phone: "18257139588",
			info: "浙江省杭州市江干区下沙经济开发新加坡科技园5幢721-724"
		},
		orderData: {
			store: "Apple Store 官方旗舰店",
			status: "待发货",
			onumber:"123310295333039251",
			creatTime:"2018-03-08 23:12:51",
			payTime:"2018-03-08 23:13:03",
			shipTime:"2018-03-09 15:33:22",
			freight:"0.00",
			offer:"20.00",
			goodsData: [{
					pagePath: "/detail",
					thumb: require("../assets/images/example/p1.jpg"),
					name: "Apple/苹果 iPhone 8 Plus 苹果8plus 64G/256G",
					attrs: '机身颜色：颜色；存储容量：256GB',
					amount: 1,
					price: "6630.00"
				},
				{
					pagePath: "/detail",
					thumb: require("../assets/images/example/p2.jpg"),
					name: "Apple/苹果 iPhone 8 Plus 苹果8plus 64G/256G",
					attrs: '机身颜色：颜色；存储容量：256GB',
					amount: 1,
					price: "6630.00"
				}
			]
		}
	}
}