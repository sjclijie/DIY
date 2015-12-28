<template>
	<div id="app">
        <athena-title title="标题"></athena-title>
		<athena-banner></athena-banner>
	</div>
</template>
<script>
	import athenaTitle from './components/title.vue';
	import athenaBanner from './components/banner.vue';
	export default {
		components : { athenaTitle , athenaBanner }
	}
</script>