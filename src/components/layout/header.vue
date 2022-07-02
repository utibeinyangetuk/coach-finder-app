<template>
	<header>
		<nav>
			<h1>
				<router-link to="/">Find a coach</router-link>
			</h1>
			<ul>
				<li><router-link to="/coach">All coaches</router-link></li>
				<li>
					<router-link to="/requests">Requests</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<style scoped>
header {
	width: 100%;
	background: rgba(245, 245, 245, 0.429);
}

nav {
	display: flex;
	align-items: center;
	justify-content: space-evenly;
}

ul {
	display: flex;
	justify-content: space-evenly;
}

li {
	margin-left: 25px;
	list-style: none;
}
h1 a {
	text-decoration: none;
	padding: 10px;
	letter-spacing: 2px;
	text-transform: uppercase;
	cursor: default;
}
li a {
	text-decoration: none;
	border: 1px solid gray;
	padding: 10px;
	border-radius: 5px;
}

a.router-link-active {
	background-color: rgba(34, 0, 255, 0.611);
	color: #fff;
	border: none;
	font-size: 14px;
	font-weight: bold;
	text-transform: capitalize;
	font-family: sans-serif;
}
</style>
