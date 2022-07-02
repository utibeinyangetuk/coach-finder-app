<template>
	<li>
		<h3>{{ fullName }}</h3>
		<h4>${{ rate }}/hr</h4>
		<div>
			<span v-for="area in areas" :key="area"> {{ area }} </span>
		</div>
		<div class="actions">
			<router-link :to="contactLink">contact</router-link> |
			<router-link :to="coachDetails">view details</router-link>
		</div>
	</li>
</template>

<script>
export default {
	props: ["id", "firstName", "lastName", "rate", "areas"],
	computed: {
		fullName() {
			return `${this.firstName} ${this.lastName}`;
		},
		contactLink() {
			return `${this.$route.path}/${this.id}/contact`;
		},
		coachDetails() {
			return `${this.$route.path}/${this.id}`;
		},
	},
};
</script>

<style scoped>
li {
	border: 1px solid;
	width: 500px;
	margin-bottom: 10px;
	border-radius: 5px;
	padding: 10px;
	list-style: decimal;
}
.actions {
	justify-content: flex-end;
	display: flex;
}
</style>
