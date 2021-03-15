<script lang="typescript">
  import { Router, Route, navigate } from "svelte-routing";

  import PrivateRoute from "./Routes/PrivateRoute.svelte";
  import Login from "./Pages/Login/index.svelte";
  import Home from "./Pages/Home/index.svelte";
  import { onMount } from "svelte";
  import { token } from "./Stores/User";
  import { Client, setClient, query } from './graphql/client'
  import animes from "./graphql/queries/animes";

  export let url = "";

  const client = new Client({ uri: 'http://localhost:4000/graphql' })
  setClient(client);

  onMount(() => {
    if ($token) {
      navigate("/home");
    }
  });

  query(animes, { page: 1 }).then(console.log);
</script>

<Router {url}>
  <PrivateRoute path="/home" component={Home} />
  <Route path="/" component={Login} />
</Router>

<!-- Global Styles  -->
<style>
  :global(:root) {
    --bg-color: #121212;
    --on-bg: rgba(32, 32, 36);
    --font-color: #8b949e;
    --error-color: #dc3545;
    --primary-color: #bb86fc;
    --on-primary: #121212;
  }

  :global(html, body) {
    width: 100%;
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
  }

  :global(*, *::after, *::before) {
    outline: none;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :global(button) {
    cursor: pointer;
  }
</style>
