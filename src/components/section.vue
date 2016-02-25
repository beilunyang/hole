<template>
	<section>
		<h3>
			<a v-link="{name:'post',params:{id:post.id}}">{{post.title}}</a>
		</h3>
		<div class="pub-info" v-f-time="post.created_at"></div>
		<template v-if="identity">
			<article>
				{{post.meta_description}}
				<img :src="post.image" alt="pic" v-if="post.image">
				<div class="read"><a v-link="{name:'post',params:{id:post.id}}">阅读全文</a></div>
			</article>
			<hr>
			<div class="other-info">
				<!-- <span class="fa fa-user">&nbsp;{{post.created_by}}</span> -->
				<span class="fa fa-comment">&nbsp;<a href="#">12</a></span>
				<span class="fa fa-tag">
					<span> javascript</span>
					<span> python</span>
				</span>
			</div>
		</template>
		<template v-else>
			<article class="markdown-body">
				{{{post.html}}}
			</article>
		</template>
	</section>
</template>

<script>
	module.exports = {
		props:['post','identity']
	}
</script>