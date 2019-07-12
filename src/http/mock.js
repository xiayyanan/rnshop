var Mock = require('mockjs')
var Random = Mock.Random
import categoryData from "@/http/category.js"
import indexData from "@/http/index.js"
import listData from "@/http/list.js"
import detailData from "@/http/detail.js"
import carData from "@/http/car.js"
import addressData from "@/http/address.js"
import orderData from "@/http/order.js"
import couponData from "@/http/coupon.js"
import userData from "@/http/user.js"
import myOrderData from "@/http/myOrder.js"
import myOrderDetailsData from "@/http/myOrderDetails.js"
import myOrderLogisticsData from "@/http/myOrderLogistics.js"
import myRetreatData from "@/http/myRetreat.js"
import myCollectData from "@/http/myCollect.js"
import myViewData from "@/http/myView.js"
import myShopData from "@/http/myShop.js"
import myFundsData from "@/http/myFunds.js"
import myRedenvelopeData from "@/http/myRedenvelope.js"
import myRunningData from "@/http/myRunning.js"
import feedbackData from "@/http/feedback.js"
import helpData from "@/http/help.js"
import messageData from "@/http/message.js"
import newsData from "@/http/news.js"

var index = Mock.mock('http://api.com/index', {
	"index": indexData
});
var category = Mock.mock('http://api.com/category', {
	"category": categoryData
});

var list = Mock.mock('http://api.com/list', {
	"list": listData
});

var detail = Mock.mock('http://api.com/detail', {
	"detail": detailData
});

var car = Mock.mock('http://api.com/car', {
	"car": carData
});

var address = Mock.mock('http://api.com/address', {
	"address": addressData
});

var order = Mock.mock('http://api.com/order', {
	"order": orderData
});

var coupon = Mock.mock('http://api.com/coupon', {
	"coupon": couponData
});

var user = Mock.mock('http://api.com/user', {
	"user": userData
});

var myOrder = Mock.mock('http://api.com/myOrder', {
	"myOrder": myOrderData
});

var myOrderDetails = Mock.mock('http://api.com/myOrderDetails', {
	"myOrderDetails": myOrderDetailsData
});

var myOrderLogistics = Mock.mock('http://api.com/myOrderLogistics', {
	"myOrderLogistics": myOrderLogisticsData
});

var myRetreat = Mock.mock('http://api.com/myRetreat', {
	"myRetreat": myRetreatData
});

var myCollect = Mock.mock('http://api.com/myCollect', {
	"myCollect": myCollectData
});

var myView = Mock.mock('http://api.com/myView', {
	"myView": myViewData
});

var myShop = Mock.mock('http://api.com/myShop', {
	"myShop": myShopData
});

var myFunds = Mock.mock('http://api.com/myFunds', {
	"myFunds": myFundsData
});

var myRedenvelope = Mock.mock('http://api.com/myRedenvelope', {
	"myRedenvelope": myRedenvelopeData
});

var myRunning = Mock.mock('http://api.com/myRunning', {
	"myRunning": myRunningData
});

var feedback = Mock.mock('http://api.com/feedback', {
	"feedback": feedbackData
});

var help = Mock.mock('http://api.com/help', {
	"help": helpData
});

var message = Mock.mock('http://api.com/message', {
	"message": messageData
});

var news = Mock.mock('http://api.com/news', {
	"news": newsData
});


export {
	index,
	category,
	list,
	detail,
	car,
	address,
	order,
	coupon,
	user,
	myOrder,
	myOrderDetails,
	myOrderLogistics,
	myRetreat,
	myCollect,
	myView,
	myShop,
	myFunds,
	myRedenvelope,
	myRunning,
	feedback,
	help,
	message,
	news
}