<style scoped lang="sass">
	@import '../px2rem';
	h3{
		color: red;
	}
</style>
<template>
	<h3>{{ data.title }}</h3>
</template>
<script>
	export default{
		props : {
			data : Object
		}
	}
</script>