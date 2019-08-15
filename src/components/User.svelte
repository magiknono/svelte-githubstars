<script>
  import { fly } from 'svelte/transition';
  export let username;
  export let avatar;
  export let html_url;
</script>

<style lang="scss">
$color:red;
  .user {
    padding: 5px;
    border: 1px solid #ddd;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    text-align: center;
  }

  img {
    border-radius: 5px;
    max-width: 80px;
  }

  h3 {
    font-size: 16px;
    margin: 0;
    color: $color;
  }
</style>

<div class="user" transition:fly="{{ x: 400, duration: 2000 }}">
  <img src="{avatar}" alt="{username}'s Avatar" />
  <h3>user: <a href="{html_url}">{username}</a></h3>

</div>