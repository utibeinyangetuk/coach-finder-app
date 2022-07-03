import { createRouter, createWebHistory } from "vue-router";

import coachdetail from "@/components/coaches/CoachDetail";
import coacheslist from "@/components/coaches/CoachList";
import coachregistration from "@/components/coaches/CoachRegistration";
import contactcoach from "@/components/requests/ContactCoach";
import requestreceived from "@/components/requests/RequestReceived";
import notfound from "@/components/404";

const routes = [
	{
		path: "/",
		redirect: "/coach",
	},
	{
		path: "/coach",
		component: coacheslist,
	},
	{
		path: "/coach/:id",
		component: coachdetail,
		props: true,
		children: [
			{
				path: "contact",
				component: contactcoach,
			},
		],
	},
	{ path: "/register", component: coachregistration },
	{ path: "/requests", component: requestreceived },
	{ path: "/:notfound(.*)*", component: notfound },
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
