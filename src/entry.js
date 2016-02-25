var Vue = require('vue'),
	Router = require('vue-router');

require('./style/grid.css');
require('./style/sass/entry.scss');
require('./style/github-markdown.css');
require('./script/script.js');

Vue.use(Router);

var router = new Router();

router.map({
	'/':{
		name:'index',
		component:require('./views/index.vue')
	},
	'/page/:id':{
		name:'page',
		component:require('./views/index.vue')
	},
	'/post/:id':{
		name:'post',
		component:require('./views/post.vue')
	},
	'*':{
		component:require('./views/404.vue')
	}
});

window.route = router;

Vue.directive('fTime',function(value){
	var time = value.split('T')[0].split('-').join('/');
	this.el.innerText = time; 
});

var App = Vue.extend({});
router.start(App,'#app');