<template>
	<button v-if="!link" :class="mode">
		<slot />
	</button>
	<router-link v-else :to="to" :class="mode">
		<slot />
	</router-link>
</template>

<script>
	export default {
		props: {
			// mode prop to control the styling
			mode: {
				type: String,
				required: false,
				default: null,
			},
			link: {
				type: Boolean,
				required: false,
				default: false,
			},
			to: {
				type: String,
				required: false,
				default: '/',
			},
		},
	}
</script>

<style scoped>
	button,
	a {
		text-decoration: none;
		padding: 0.75rem 1.5rem;
		font: inherit;
		border: 1px solid;
		cursor: pointer;
		border-radius: 30px;
		margin-right: 0.5rem;

		display: inline-block;
	}
	a:hover,
	a:active,
	button:hover,
	button:active {
		background-color: #6161006f;
	}

	.flat {
		color: #000;
		background-color: transparent;
	}
	.outline {
		background-color: #270041;
		color: #fff;
	}
</style>
