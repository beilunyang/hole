<template>
	<ul class="pagination">
		<li v-show="canPrev"><a href="#" @click.stop.prevent="forward">&laquo;</a></li>
		<li v-show="canNext"><a href="#" @click.stop.prevent="backward">&raquo;</a></li>
	</ul>
</template>

<script>
	module.exports = {
		data:function(){
				return {
					pages:pages,
				}
		},
		props:['pid'],
		methods:{
			forward:function(e){
				route.go({
					name:'page',
					params:{
						id:this.pid-1
					}
				});
			},
			backward:function(e){
				route.go({
					name:'page',
					params:{
						id:this.pid+1
					}
				});
			}
		},
		computed:{
			canNext:function(){
				if(this.pid<this.pages){
					return true;
				}else{
					return false;
				}
			},
			canPrev:function(){
				if(this.pid>1){
					return true;
				}else{
					return false;
				}
			}
		}
	}
</script>