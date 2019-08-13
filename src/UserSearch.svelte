<script>
    import User from './User.svelte';

    let usernameQuery = "hello";
    let user;

    function handleSubmit() {
        fetch(`https://api.github.com/users/${usernameQuery}`)
            .then(resp => resp.json())
            .then(data => (user = data))      
    };

    
</script>

<style>
    .searched-username {
        align: center;
    }
</style>

<div class="column">
    <h4><i>searching: {usernameQuery}</i></h4>
	<form on:submit|preventDefault={handleSubmit}>
		<fieldset>
			<label for="userName">Name</label>
			<input type="text" bind:value={usernameQuery} placeholder="Type a github nickname" />
            <button class="button">Search</button>
		</fieldset>
	</form>

{#if user}
    <User username={user.login} avatar={user.avatar_url} html_url={user.html_url} />
{/if}
   
</div>
