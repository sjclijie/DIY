<style scoped lang="sass">
	@import '../px2rem';
	h2{
		margin: 0;
		padding: 0;
		font-size:px2rem(30);
		width: 100%;
		height: px2rem(90);
		line-height: px2rem(90);
		text-align: center;
		background-color: #fff;
		font-weight: normal;
	}
</style>
<template>
	<h2>{{ data.title }}</h2>
</template>
<script>
	export default{
		props : {
			data : Object
		}
	}
</script>