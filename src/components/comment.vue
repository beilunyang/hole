<template>
	<!-- disqus被墙，只能滚回多说了╮(╯▽╰)╭ -->
	<!-- <div id="disqus_thread" v-show-comment="post_info" class="comment"></div> -->
	<div class="ds-thread comment" v-show-comment="post_info"></div>
</template>
<script>
	module.exports = {
		props:['post_info']
	}
</script>