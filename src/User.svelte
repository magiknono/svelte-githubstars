<script>
  export let username;
  export let avatar;
</script>

<style>
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
  }
</style>

<div class="user">
  <img src="{avatar}" alt="{username}'s Avatar" />
  <h3>{username}</h3>
</div>