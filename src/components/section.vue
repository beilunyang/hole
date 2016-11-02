<template>
	<div>
		<article>
			<h3>
				<a v-link="{name:'post',params:{id:post.id}}">{{post.title}}</a>
			</h3>
			<div class="pub-info" v-f-time="post.created_at"></div>
			<template v-if="identity">
				<div class="content">
					{{post.meta_description}}
					<img :src="post.image" alt="pic" v-if="post.image">
					<div class="read"><a v-link="{name:'post',params:{id:post.id}}">阅读全文</a></div>
				</div>
				<hr>
				<ul class="other-info">
					<li>
						<ul class="fa fa-tags">
							<li v-for="tag in post.tags" v-if="post.tags.length > 0">
								<a :href="'/tag/' + tag.slug">{{tag.name}}</a>
							</li>
							<li v-if="post.tags.length == 0">无标签</li>
						</ul>
					</li>

				</ul>
			</template>
			<template v-else>
				<div class="content markdown-body">
					{{{post.html}}}
				</div>
			</template>
		</article>

		<my-comment :post_info='post' v-if="!identity"></my-comment> 
	</div>
</template>

<script>
	module.exports = {
		props:['post','identity'],
		components:{
			'myComment':require('../components/comment.vue')
		}
	}
</script>