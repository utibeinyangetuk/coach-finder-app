<template>
	<li>
		<h3>{{ fullName }}</h3>
		<h4>${{ rate }}/hr</h4>
		<div>
			<base-badge v-for="area in areas" :key="area" :type="area" :title="area" />
		</div>
		<div class="actions">
			<base-button link mode="flat" :to="contactLink">contact</base-button>
			<base-button link mode="outline" :to="coachDetails">view details</base-button>
		</div>
	</li>
</template>

<script>
	export default {
		props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
		computed: {
			fullName() {
				return `${this.firstName} ${this.lastName}`
			},
			contactLink() {
				return `${this.$route.path}/${this.id}/contact`
			},
			coachDetails() {
				return `${this.$route.path}/${this.id}`
			},
		},
	}
</script>

<style scoped>
	li {
		border: 1px solid;
		width: 500px;
		margin-bottom: 10px;
		border-radius: 5px;
		padding: 10px;
		list-style: none;
	}

	li:hover {
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	}
	.actions {
		justify-content: flex-end;
		display: flex;
	}
</style>
