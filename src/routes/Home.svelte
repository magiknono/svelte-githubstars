<script>
    import UserSearch from '../components/UserSearch.svelte';
</script>

<style>
	#hero {
		text-align:center;
	 }
	 #subhero {
		 font-size:large;
	 }
</style>

<div class="container">
		<div class="row">
			<div class="column">
				<h1 id="hero">Find Stars from a GitHub user</h1> 
				<br />
					<blockquote>
						<h2 id="subhero"><em>Reactive frontend with svelte 3</em></h2>
					</blockquote>
			</div>
		</div>
</div>

<div class="container">
	<UserSearch />	
</div>