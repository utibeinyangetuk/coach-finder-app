<template>
	<navigation />
	<router-view />
</template>

<script>
import navigation from "./components/layout/header.vue";
export default {
	components: {
		navigation,
	},
	name: "app",
};
</script>

<style>
* {
	box-sizing: border-box;
	font-family: sans-serif;
}
body {
	margin: 0;
}
</style>
