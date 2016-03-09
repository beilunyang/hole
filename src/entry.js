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

router.beforeEach(function(){
	window.scrollTo(0, 0);
});

window.route = router;

Vue.directive('f-time',function(value){
	if(typeof value === 'string'){
		var time = value.split('T')[0].split('-').join('/');
		this.el.innerText = time; 
	}
});

Vue.directive('show-comment',{
	update:function(newValue,oldValue){
		if(newValue.id){
			DISQUS.reset({
			  reload: true,
			  config: function () {  
			    this.page.identifier = newValue.id;  
			    this.page.url = location.href;
			  }
			});
		}
	}
});

Vue.directive('show-count',{
	update:function(newValue,oldValue){
		if(newValue.id){
			this.el.href = location.href + 'post/' + newValue.id + '#disqus_thread';
			this.el.dataset.disqusIdentifier = newValue.id;
			DISQUSWIDGETS.getCount({reset:true});
			//disqus count 还是不行。。。
		}
	}

});

var App = Vue.extend({});
router.start(App,'#app');