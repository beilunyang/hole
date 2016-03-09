<template>
	<loading v-if="showload"></loading>
	<my-section :post='post' :identity='true' v-for="post in posts" transition="bl"></my-section>
	<my-pagination :pid='pid'></my-pagination>
</template>

<script>
	module.exports = {
		data:function(){
			return{
				pid:'',
				posts:'',
				showload:true
			}
		},
		components:{
			'mySection':require('../components/section.vue'),
			'myPagination':require('../components/pagination.vue'),
			'loading':require('../components/loading.vue')
		},
		route:{
			data:function(transition){
				var tmp_id = transition.to.params.id?transition.to.params.id:1;
				//limit 大小应该与你后台设置的每页显示文章数一致
				$.get(ghost.url.api('posts',{fields:'title,image,id,meta_description,created_at,slug,url',limit:'5',page:tmp_id,include:'tags'}))
					.done(function(data){
						transition.next({pid:parseInt(tmp_id,10),posts:data.posts,showload:false});
					})
					.fail(function(err){
						console.log(err);
					});

			}
		}
	}
</script>