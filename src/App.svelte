<script>
	import UserSearch from './UserSearch.svelte';
	
</script>

<style>
	.hero {
		text-align:center;
	 }
	
	 .stars {
		 margin-left:3rem;
	 }
	
</style>

	<div class="container">
		<div class="row">
			<div class="column">
				<h1>Find Stars from a GitHub user</h1> 
					<blockquote>
						<h2><em>Reactive frontend with svelte 3</em></h2>
					</blockquote>
			</div>
		</div>
	</div>

<div class="container">
	
		<UserSearch />	

	

</div>