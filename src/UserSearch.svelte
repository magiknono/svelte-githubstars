<script>
    export let usernameQuery = "hello";
    let user;

    
</script>

<style>
    .searched-username {
        align: center;
    }
</style>

<div class="column search">
    <h4><i>searching: {usernameQuery}</i></h4>
	<form>
		<fieldset>
			<label for="userName">Name</label>
			<input type="text" bind:value={usernameQuery} placeholder="Type a github nickname" />
            <button class="button">Search</button>
		</fieldset>
	</form>
    
</div>
