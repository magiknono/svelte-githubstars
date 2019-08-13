<script>
    import User from './User.svelte';
    import Stars from './Stars.svelte';
    import Loading from './Loading.svelte';
    import { fade } from 'svelte/transition';

    let usernameQuery = "magiknono";
    let user;
    let stars;
    let loading = false;

    function handleSubmit() {
        loading = true;
        fetch(`https://api.github.com/users/${usernameQuery}`)
            .then(resp => resp.json())
            .then(data => (user = data)); 
        handleSubmitGetStarred();    
    };
    function handleSubmitGetStarred() {
            
        fetch(`https://api.github.com/users/${usernameQuery}/starred`)
            .then(resp => resp.json())
            .then(loading = false)
            .then(data => (stars = data));
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
{#if loading}
    <Loading />
{:else}
    {#if stars}
    <div transition:fade class="row">
            <div class="column">
                <h4>Starred repos</h4>
                <table>
                    <thead>
                        <tr>
                        <th>Repo</th>
                        <th>Language</th>
                        <th>Fork Count</th>
                        <th>Stars Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each stars as star}
                            <Stars repo={star.name} link={star.html_url} lang={star.language} totalStars={star.stargazers_count} totalForks={star.forks_count} />
                        {/each}	
                    </tbody>
                </table>
            </div>	
        </div>

    {/if}
{/if}
