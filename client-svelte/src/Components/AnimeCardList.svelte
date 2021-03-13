<script>
  import { query } from "micro-graphql-svelte";
  import AnimeCard from "./AnimeCard.svelte";
  import ALL_ANIMES_QUERY from "../graphql/queries/animes";
  const { queryState, sync } = query(ALL_ANIMES_QUERY);

  let page: number = 1;

  function nextPage() {
    page += 1;
  }
  function prevPage() {
    page -= 1;
  }

  $: sync({ page });
</script>

<div class="container">
  {#if $queryState.loaded}
    {#each $queryState?.data?.animes.items ?? [] as anime (anime.id)}
      <AnimeCard title={anime.name} description={anime.description} />
    {/each}
  {/if}

  {#if $queryState.error}
    <span>Unknown Error Ocurred</span>
  {/if}
</div>
<button on:click={prevPage}>prevPage</button>
<button on:click={nextPage}>nextPAGE</button>

<style lang="scss">
  .container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;
    width: 100%;
  }
</style>
