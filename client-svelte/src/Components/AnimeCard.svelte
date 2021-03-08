<script lang="ts">
  import Icon from "../Components/Icon.svelte";
  export let title: string;
  export let description: string = "No description provided.";
</script>

<div class="container">
  <div class="content-container">
    <div
      class="background"
      style="background-image: url(https://place-hold.it/400x400);"
    >
      <button>
        <Icon name="fas fa-list" />
      </button>
    </div>
    <div class="info-container">
      <strong>{title}</strong>
      <span class="anime-description"
        >{`${
          description ? description.slice(0, 100) : "No description provided"
        }...`}</span
      >
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    position: relative;
    background-color: var(--on-bg);
    width: calc(25% - 10px);
    height: 250px;
    cursor: pointer;
    margin-right: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    overflow: hidden;

    &:hover {
      .content-container .background button {
        opacity: 1;
        visibility: visible;
      }
    }

    .content-container {
      position: absolute;
      width: 100%;
      height: 100%;
      .background {
        display: flex;
        flex-direction: row-reverse;
        padding: 8px;
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 60%;
        button {
          border: 0;
          background: none;
          opacity: 0;
          visibility: hidden;
          height: fit-content;
          width: 30px;
          height: 30px;
        }
      }

      .info-container {
        padding: 10px;
        display: flex;
        flex-direction: column;
        color: var(--font-color);
        .anime-description {
          font-size: 13px;
        }
      }
    }
  }
</style>
