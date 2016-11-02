<template>
	<div id="disqus_thread" v-show-comment="post_info" class="comment"></div>
</template>
<script>
	module.exports = {
		props:['post_info']
	}
</script>