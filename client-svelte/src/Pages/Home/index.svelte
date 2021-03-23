<script>
  import ProfileBox from "../../Components/ProfileBox.svelte";
  import SearchInput from "../../Components/SearchInput.svelte";
  import AnimeCardList from "../../Components/AnimeCardList.svelte";
  let searchValue = "";
</script>

<div class="page">
  <ProfileBox />
  <div class="input-container">
    <SearchInput bind:value={searchValue} />
    <div class="anime-card-wrapper">
      <AnimeCardList />
    </div>
  </div>
</div>

<style lang="scss">
  div.page {
    display: flex;
    justify-content: space-between;
    padding: 20px 80px;
    div.input-container {
      display: flex;
      flex-direction: column;

      flex: 1;
      padding: 0 40px;
      input {
        width: 100%;
        height: 50px;
      }
    }
  }
</style>
