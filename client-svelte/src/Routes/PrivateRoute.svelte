<script lang="ts">
  import type { SvelteComponent } from "svelte";

  import { Route } from "svelte-routing";
  import { token } from "../Stores/User";
  import AccessDenied from "../Pages/AccessDenied/index.svelte";
  import Header from "../Components/Header.svelte";
  export let path: string;
  export let component: SvelteComponent;

  $: isAuthenticated = $token;
</script>

{#if isAuthenticated}
  <Header />
  <div class="route-wrapper">
    <Route {path} {component} />
  </div>
{:else}
  <Route {path} component={AccessDenied} />
{/if}

<style lang="scss">
  .route-wrapper {
    min-height: calc(100vh);
    width: 100%;
    background: #121212;
    padding-top: 72px;
  }
</style>
