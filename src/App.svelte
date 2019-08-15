<script>
	import { Router, Link, Route } from "svelte-routing";
	import Home from './routes/Home.svelte';
	import About from './routes/About.svelte';
	
	export let url = "";
</script>

<style>
.navbar {
  margin-bottom: 10px;
}

.navbar ul {
    list-style-type: none;
    margin: 5px;
    padding: 0;
    overflow: hidden;
}

.navbar li {
    float: left;
	margin-bottom: 0;
	margin-left:20px;
	font-size:x-large;
}
</style>

<Router url="{url}">
	<div class='container'>
      	<div class='navbar'>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="about">About</Link></li>
			</ul>
		</div>
	</div>
	
			<!-- component -->
			<Route path="/"><Home /></Route>
			<!-- component -->
			<Route path="about" component="{About}" />
</Router>

	