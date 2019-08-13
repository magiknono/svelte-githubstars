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

	<div class="row">
		<div class="column stars">
			<h4>Starred repos</h4>
			<table>
				<thead>
					<tr>
					<th>Repo</th>
					<th>Language</th>
					<th>Last update</th>
					<th>Stars</th>
					</tr>
				</thead>
				<tbody>
					<tr>
					<td>Milligram</td>
					<td>css</td>
					<td>yesterday</td>
					<td>8263</td>
					</tr>
					<tr>
					<td>sveltejs/svelte</td>
					<td>javascript</td>
					<td>yesterday</td>
					<td>22171</td>
					</tr>
				</tbody>
			</table>
		</div>	
	</div>

</div>