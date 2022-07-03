<template>
	<base-card>
		<h2>Find your coach</h2>

		<span class="filter-option">
			<input type="checkbox" id="frontend" checked @change="setFilter" />
			<label for="frontend">Frontend</label>
		</span>

		<span class="filter-option">
			<input type="checkbox" id="backend" checked @change="setFilter" />
			<label for="backend">Backend</label>
		</span>

		<span class="filter-option">
			<input type="checkbox" id="marketing" checked @change="setFilter" />
			<label for="marketing">Marketing</label>
		</span>
	</base-card>
</template>

<script>
	export default {
		data() {
			return {
				filters: {
					frontend: true,
					backend: true,
					marketing: true,
				},
			}
		},
		methods: {
			setFilter() {},
		},
	}
</script>
