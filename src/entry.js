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
	bind:function(){
		var d = document,
			s = d.createElement('script');
		s.id = 'disqus';
		s.src = '//bitibiti.disqus.com/embed.js';
		s.setAttribute('data-timestamp', +new Date());
		(d.head || d.body).appendChild(s);
	},
	update:function(newValue,oldValue){
		var disqus_config = function () {
		this.page.url = newValue.url;
		this.page.identifier = newValue.id;
		} 
	},
	unbind:function(){
		var dis = document.getElementById('disqus');
		dis.parentNode.removeChild(dis);
	}
});

Vue.directive('show-count',{
	/*bind:function(){
			var d = document,
				dc = d.getElementById('disqus-count');
			if(!dc){
				var s = d.createElement('script');
				s.id = 'disqus-count';
				s.src = '//bitibiti.disqus.com/count.js';
				s.async = 'async';
				(d.head || d.body).appendChild(s);
			}
	},*/
	update:function(newValue,oldValue){
		var c = document.getElementById('disqus-count');
		if(c){
			c.parentNode.removeChild(c);
		}
		var d = document,
			dc = d.getElementById('disqus-count');
		if(!dc){
			var s = d.createElement('script');
			s.id = 'disqus-count';
			s.src = '//bitibiti.disqus.com/count.js';
			s.async = 'async';
			(d.head || d.body).appendChild(s);
		}

		this.el.href = '/' + newValue.slug + '#disqus_thread';
		this.el.dataset.disqusIdentifier =  newValue.id;
		
	}/*,
	unbind:function(){
		var c = document.getElementById('disqus-count');
		if(c){
			c.parentNode.removeChild(c);
		}
	}*/
});

var App = Vue.extend({});
router.start(App,'#app');