<template>
	<!-- disqus被墙，换萌评论 -->
	<!-- <div id="disqus_thread" v-show-comment="post_info" class="comment"></div> -->
	<div class="cm-article comment" v-show-comment="post_info"></div>
</template>
<script>
	module.exports = {
		props:['post_info']
	}
</script>