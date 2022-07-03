<template>
	<section>FILTER</section>
	<section>
		<base-card>
			<div class="controls">
				<base-button >Refresh</base-button>
				<base-button link mode='outline' to="/register">Become a coach</base-button>
			</div>
			<ul v-if="hasCoaches">
				<CoachItem
					v-for="coach in coaches"
					:key="coach.id"
					:id="coach.id"
					:firstName="coach.firstName"
					:lastName="coach.lastName"
					:areas="coach.areas"
					:rate="coach.hourlyRate"
				/>
			</ul>
			<p v-else>No coach available at the moment.</p>
		</base-card>
	</section>
</template>

<script>
import CoachItem from "../layout/coach-item";
import { mapGetters } from "vuex";

export default {
	components: { CoachItem },
	computed: {
		...mapGetters(["coaches", "hasCoaches"]),
	},
};
</script>

<style scoped>
.controls {
	display: flex;
	justify-content: space-between;
}
</style>
