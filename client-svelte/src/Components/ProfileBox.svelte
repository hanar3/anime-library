<script lang="ts">
  import { query } from "micro-graphql-svelte";
  import { token } from "../Stores/User";
  import Icon from "../Components/Icon.svelte";
  import { PROFILE_QUERY } from "../graphql/queries/user";
  import { navigate } from "svelte-routing";
  const { queryState, sync } = query(PROFILE_QUERY);

  $: sync({});
  function handleLogout() {
    localStorage.setItem("authToken", "");
    token.set(localStorage.getItem("authToken"));
    navigate("/");
  }
</script>

<div class="container">
  {#if $queryState.loaded}
    <img src="https://place-hold.it/200x200" alt="profile" class="thumbnail" />
    <span class="username">{$queryState?.data?.profile?.username}</span>
    <span class="status-quote">{$queryState?.data?.profile?.statusMessage}</span
    >
  {/if}
  <button class="logout-btn" on:click={handleLogout}>
    Logout
    <Icon name="fas fa-sign-out-alt" color="var(--font-color)" />
  </button>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 310px;
    width: 290px;
    background: var(--on-bg);
    padding: 20px;
    border-radius: 8px;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-bottom: 15px;
    }
    span.username {
      color: var(--font-color);
      font-weight: bold;
    }
    span.status-quote {
      color: var(--font-color);
      font-size: 13px;
    }

    button.logout-btn {
      margin-top: 8px;
      background: none;
      border: 0;
      font-weight: bold;
      color: var(--font-color);

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
