export default {
	swipeData: [{
			imgs: require("../assets/images/example/show1.jpg")
		},
		{
			imgs: require("../assets/images/example/show2.jpg")
		},
		{
			imgs: require("../assets/images/example/show3.jpg")
		},
		{
			imgs: require("../assets/images/example/show4.jpg")
		},
		{
			imgs: require("../assets/images/example/show5.jpg")
		}
	], //轮播图
	baseData: {
		name: "Apple 苹果 iPhone X 64GB 移动联通电信4G手机 国内行货",
		thumb: require("../assets/images/example/p1.jpg"),
		nPrice: "8319.00",
		oPrice: "9605.00",
		vSales: "1092",
		inventory: "201",
		isColect: false,
		attrName: [{
				name: "颜色分类",
				value: ["红色", "亮黑色", "金色", "银色"],
				active: 0
			},
			{
				name: "存储容量",
				value: ["64GB", "256GB"],
				active: 0
			}
		],
		attrValue: [{
				gindex: "00",
				price: "8319.00",
				inventory: "1000",
				thumb: require("../assets/images/example/p1.jpg")
			},
			{
				gindex: "10",
				price: "8319.00",
				inventory: "1100",
				thumb: require("../assets/images/example/p2.jpg")
			},
			{
				gindex: "20",
				price: "8319.00",
				inventory: "1200",
				thumb: require("../assets/images/example/p3.jpg")
			},
			{
				gindex: "30",
				price: "8319.00",
				inventory: "1300",
				thumb: require("../assets/images/example/p4.jpg")
			},
			{
				gindex: "01",
				price: "9319.00",
				inventory: "500",
				thumb: require("../assets/images/example/p1.jpg")
			},
			{
				gindex: "11",
				price: "9319.00",
				inventory: "600",
				thumb: require("../assets/images/example/p2.jpg")
			},
			{
				gindex: "21",
				price: "9319.00",
				inventory: "700",
				thumb: require("../assets/images/example/p3.jpg")
			},
			{
				gindex: "31",
				price: "9319.00",
				inventory: "800",
				thumb: require("../assets/images/example/p4.jpg")
			}
		]
	},
	
	evaluateData: {
		evaluateNum: "14628",
		evaluateTags: [{
				name: "物流快",
				num: 1112
			},
			{
				name: "手机不错",
				num: 850
			},
			{
				name: "性能很好",
				num: 770
			},
			{
				name: "正品",
				num: 512
			},
			{
				name: "服务不错",
				num: 455
			},
			{
				name: "性能一般",
				num: 130
			}
		], //评论标签
		evaluateList: [{
				avatar: require("../assets/images/example/avatar-1.jpg"),
				name: "y***1",
				dates: "2018.11.01 20:50",
				attrs: "机身颜色：银色；存储容量：256GB",
				score:4.5,
				content: "衣服很好，穿在身上老公说好看，客服推荐的尺码穿上刚好，，还能遮肉肉",
				imgs: [{
						thumb: require("../assets/images/example/evaluate-1.jpg")
					},
					{
						thumb: require("../assets/images/example/evaluate-2.jpg")
					},
					{
						thumb: require("../assets/images/example/evaluate-3.jpg")
					},
					{
						thumb: require("../assets/images/example/evaluate-4.jpg")
					},
					{
						thumb: require("../assets/images/example/evaluate-5.jpg")
					},
					{
						thumb: require("../assets/images/example/evaluate-6.jpg")
					},
					{
						thumb: require("../assets/images/example/evaluate-7.jpg")
					}
				]
			},
			{
				avatar: require("../assets/images/example/avatar-2.jpg"),
				name: "y***泡",
				dates: "2018.11.01 20:50",
				attrs: "机身颜色：银色；存储容量：256GB",
				score:3.5,
				content: "喜欢，穿上特别仙，蓝色给人清爽的感觉",
				imgs: [{
						thumb: require("../assets/images/example/evaluate-6.jpg")
					},
					{
						thumb: require("../assets/images/example/evaluate-7.jpg")
					},
					{
						thumb: require("../assets/images/example/evaluate-8.jpg")
					}
				]
			},
			{
				avatar: require("../assets/images/example/avatar-3.jpg"),
				name: "宝***物",
				dates: "2018.11.01 20:50",
				attrs: "机身颜色：银色；存储容量：256GB",
				score:4.9,
				content: "衣服非常好 非常喜欢 客服说让我选L最后我还是选了M哈哈刚刚好不大不小 穿着也不会像运费收腰特别好看",
				imgs: []
			},
			{
				avatar: require("../assets/images/example/avatar-4.jpg"),
				name: "慧***5",
				dates: "2018.11.01 20:50",
				attrs: "机身颜色：银色；存储容量：256GB",
				score:4,
				content: "美裙收到了 穿上美美哒 好仙儿啊 质量做工都没得挑 这衣服在实体店里怎么也得三百块钱 之前朋友买了 我试穿了下 非常漂亮 所以要了链接 一下拍了两条裙子 这家的裙子都非常漂亮 我都很喜欢 还会再继续买买买",
				imgs: [{
						thumb: require("../assets/images/example/evaluate-9.jpg")
					},
					{
						thumb: require("../assets/images/example/evaluate-10.jpg")
					}
				]
			},
			{
				avatar: require("../assets/images/example/avatar-5.jpg"),
				name: "浅***默",
				dates: "2018.11.01 20:50",
				attrs: "机身颜色：银色；存储容量：256GB",
				score:4.8,
				content: "对比过其他家的同款裙裙后才深有感受：这款做工色彩均好，最喜欢的是里衬贴身很舒服垂感好，穿着舒适，没有静电。版型显瘦。款式很好看，非常满意。",
				imgs: []
			},
		] //评论列表
	},
	detailsData:`<p class="fwb">价格说明：</p>
			<p>1、划线价、参考价：商品展示的划线价或参考价可能是品牌专柜价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在考拉上曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。</p>
			<p>2、促销价：如无特殊说明，促销价是销售商在参考价基础上给予的优惠价格。如有疑问，您可以在购买前与客服联系。</p>
			<p>3、考拉价：考拉非会员用户购买的商品详情页显示的售价，是非会员用户最终决定是否购买该商品的依据。</p>
			<p>4、黑卡价：在考拉价的基础上给予黑卡会员用户的优惠价格，仅黑卡会员用户可以黑卡价购买该商品。</p>
			<p>5、价格异常：因可能存在系统缓存、页面更新延迟等不确定性情况，导致价格显示异常，商品具体售价请以订单结算页价格为准。如您发现异常情况出现，请立即联系我们补正，以便您能顺利购物。</p>
			<p><img src="${require("../assets/images/example/d1.jpg")}"></p>
			<p><img src="${require("../assets/images/example/d2.jpg")}"></p>
			<p><img src="${require("../assets/images/example/d3.jpg")}"></p>
			<p><img src="${require("../assets/images/example/d4.jpg")}"></p>
			<p><img src="${require("../assets/images/example/d5.jpg")}"></p>
			<p><img src="${require("../assets/images/example/d6.jpg")}"></p>
			<p><img src="${require("../assets/images/example/d7.jpg")}"></p>
			<p><img src="${require("../assets/images/example/d8.jpg")}"></p>`

}