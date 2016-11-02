<template>
	<div class="tags">
		<ul>
			<li v-for="tag in tags">
				<a v-link="tag.id">{{ tag.name }}</a>
			</li>
		</ul>
	</div>
	<loading v-if="showload"></loading>
	<my-section :post='post' :identity='true' v-for="post in posts" transition="bl"></my-section>
	<my-pagination :pid='pid'></my-pagination>
</template>

<script>
	module.exports = {
		data:function(){
			return {
				tags:[]
			}
		},
		route:{
			data:function(transition){
				var tmp_id = transition.to.params.id;
				$.get(ghost.url.api('tags/' + tmp_id,{fields:'id,name'}))
					.done(function(data){
						transition.next({tags:data.tags});
					})
					.fail(function(err){
						console.log(err);
					});
			}
		}
	}
</script>
