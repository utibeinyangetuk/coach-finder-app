import { createStore } from 'vuex'

const coachesmodule = {
	state: {
		coaches: [
			{
				id: 'c1',
				firstName: 'mac',
				lastName: 'milian',
				areas: ['frontend', 'backend', 'marketing'],
				description: 'i am mac and i have worked as a freelance developer for years',
				hourlyRate: 40,
			},
			{
				id: 'c2',
				firstName: 'stephanie',
				lastName: 'dapper',
				areas: ['blogger', 'poet', 'marketer'],
				description:
					'Hello 👋🏽, i am dapper and i am an experienced marketer with over 5 years experience and good success rates',
				hourlyRate: 70,
			},
		],
	},
	getters: {
		coaches(state) {
			return state.coaches
		},
		hasCoaches(state) {
			// returns true if coaches is available else false
			return state.coaches && state.coaches.length > 0
		},
	},
	mutations: {},
	actions: {},
}
const requestsmodule = { state: {}, getters: {}, mutations: {}, actions: {} }

export default createStore({
	modules: {
		coach: coachesmodule,
		request: requestsmodule,
	},
})
