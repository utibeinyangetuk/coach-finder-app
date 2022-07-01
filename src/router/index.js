import { createRouter, createWebHistory } from "vue-router";

// import all needed components
import coachdetail from "@/components/coaches/CoachesDetail";
import coacheslist from "@/components/coaches/CoachesList";
import coachregistration from "@/components/coaches/CoachRegistration";
import contactcoach from "@/components/requests/ContactCoach";
import requestreceived from "@/components/requests/RequestReceived";
import notfound from "@/components/404";

const routes = [
	{
		path: "/",
		redirect: "/coaches",
	},
	{
		path: "/coaches",
		component: coacheslist,
	},
	{
		path: "/coaches/:id",
		component: coachdetail,
		// nested routes
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
