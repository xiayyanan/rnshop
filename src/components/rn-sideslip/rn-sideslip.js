import sideslipComponent from '../rn-sideslip/rn-sideslip.vue'
import router from '@/router'
let $vm
var sideslip = {};
sideslip.install = function(Vue, options) {
	let opt = {
		isShow: false,
		isActive: false,
		isClose: true,
		aniDelay: 350,
		direction: 'right'
	}

	const sideslipPlugin = Vue.extend(sideslipComponent);

	let setClass = (isOpen) => {
		var cname = '';
		switch(opt.direction) {
			case 'left':
				cname = 'sideslipLeft';
				break;
			case 'right':
				cname = 'sideslipRight';
				break;
			case 'bottom':
				cname = 'sideslipBottom';
				break;
			default:
				cname = 'sideslipTop';
		}
		return isOpen ? cname += ' active' : cname;
	}

	let setStyle = (objStyle) => {
		for(let k in objStyle) {
			obj[k] = obj[k];
		}
	}

	Vue.prototype.$mySideslip = (opts) => {
		if(opts) {
			for(let property in opts) {
				opt[property] = opts[property];
			}
		}
		if(!$vm) {
			$vm = new sideslipPlugin({
				router,
				el: document.createElement('div')
			});
		}

		$vm.cdata = opt.cdata;
		//insComponent = Vue.extend(opt.content);
		Vue.component('v-content', Vue.extend(opt.content));
		$vm.className = setClass(false);
		$vm.isClose = opt.isClose;
		$vm.domStyle = opt.domStyle;
		$vm.bgStyle = opt.bgStyle;
		document.getElementById("app").appendChild($vm.$el);
		//document.body.appendChild($vm.$el);
		document.body.style.overflow = "hidden";
		document.body.style.height = "100%";
		$vm.isShow = true;
		setTimeout(() => {
			$vm.className = setClass(true);
			$vm.isActive = true;
		}, 100);
	}

	Vue.prototype.$opens = function() {
		//document.body.appendChild($vm.$el);
		document.body.style.overflow = "hidden";
		document.body.style.height = "100%";
		$vm.isShow = true;
		setTimeout(() => {
			$vm.className = setClass(true);
			$vm.isActive = true;
		}, 100);
		Vue.nextTick(function() {
			//new insComponent().$mount('content');
		})
	}

	Vue.prototype.$closes = function() {
		document.body.style.overflow = "auto";
		document.body.style.height = "auto";
		$vm.isActive = false;
		$vm.className = setClass(false);
		setTimeout(() => {
			$vm.isShow = false;
			document.getElementById("app").removeChild($vm.$el);
			//document.body.removeChild($vm.$el);
		}, opt.aniDelay);
	}
}
export default sideslip;

if(typeof window !== 'undefined' && !window.sideslip) {
	window.sideslip = sideslip;
}