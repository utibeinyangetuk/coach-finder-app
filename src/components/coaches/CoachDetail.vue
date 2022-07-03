<template>
	<section>
		<base-card>
			<h2>{{ fullName }}</h2>
			<h3>${{ rate }}/hour</h3>
		</base-card>
	</section>
	<section>
		<base-card>
			<header>
				<h2>Interested? Reach out now!</h2>
				<base-button link :to="contactLink">Contact</base-button>
			</header>
			<router-view></router-view>
		</base-card>
	</section>
	<section>
		<base-card>
			<base-badge v-for="area in selectedCoach.areas" :key="area" :type="area" :title="area" />
			<p>{{ description }}</p>
		</base-card>
	</section>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		computed: {
			...mapGetters(['coaches']),
			fullName() {
				return `${this.selectedCoach.firstName} ${this.selectedCoach.lastName}`
			},
			rate() {
				return `${this.selectedCoach.hourlyRate}`
			},
			contactLink() {
				return `${this.$route.path}/contact`
			},
			description() {
				return this.selectedCoach.description
			},
		},
		props: ['id'],
		data() {
			return {
				selectedCoach: null,
			}
		},
		created() {
			this.selectedCoach = this.coaches.find((coach) => {
				return coach.id === this.id
			})
		},
	}
</script>
