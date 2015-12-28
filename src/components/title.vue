<style scoped lang="sass">
	@import '../px2rem';
	h1{
		font-size: px2rem(60);
		color: red;
	}
</style>
<template>
	<h1 v-on:click="myevent">{{title}}</h1>
</template>
<script>
	export default {
		props: {
			title : String
		},
		methods : {
			myevent : function(){
				alert( this.title );
			}
		}
	}
</script>