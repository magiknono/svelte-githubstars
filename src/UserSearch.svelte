<script>
    import User from './User.svelte';
    import Stars from './Stars.svelte';
    import Loading from './Loading.svelte';
    import { fade } from 'svelte/transition';

    let usernameQuery = "";
    let user;
    let stars;
    let loading = false;
    let hereSvelte = false;
    let hide = false;
    const handleMouseenter = () => hereSvelte = true;
    const handleMouseleave = () => hereSvelte = false;

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
            usernameQuery = "";
    };
    
</script>

<style>
    img {
		position: absolute;
		right: 0;
		top: -90px;
		transform: translate(-150%, 0);
		transform-origin: 100% 100%;
		transition: transform 0.4s;
	}
    .curious {
		transform: translate(-15%, 0) rotate(0deg);
	}

	:global(body) {
		overflow: hidden;
    }
    .hide {
        display:none;
    }
</style>
<svelte:body
	on:mouseenter={handleMouseenter}
	on:mouseleave={handleMouseleave}
/>
<img
	class:curious={hereSvelte}
	alt="Awesome tutorial on svelte.dev"
	src="favicon.png"
>
<div class="column">
	<form on:submit|preventDefault={handleSubmit}>
		<fieldset>
			<label for="userName">Name</label>
			<input type="text" style="width:20%" bind:value={usernameQuery} placeholder="Enter a github username" />
            <button class="button">Find starred repos</button>
		</fieldset>
	</form>
    <h4><i>{usernameQuery}</i></h4>
    <br />
{#if user}
    <User username={user.login} avatar={user.avatar_url} html_url={user.html_url} />
{/if}




</div>
{#if loading}
    <Loading />
{:else}
    
    
     <br />
    {#if stars}
    <input type="checkbox" bind:checked={hide}> Hide Results
    <div class:hide>
    <div transition:fade={{duration: 1000 }} class="row">
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
    </div>
    {/if}
    
{/if}
