<script lang="ts" context="module">
  export type FieldError = {
    [key: string]: {
      message: string;
    };
  };
</script>

<script lang="ts">
  import Icon from "./Icon.svelte";
  export let value: string;

  const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    value = target.value;
  };
</script>

<div class="input-wrapper">
  <Icon name="fas fa-search" />
  <input
    type="text"
    placeholder="Search animes...ʕ•ᴥ•ʔ"
    on:change={handleInput}
    class="search-input"
    on:input={handleInput}
  />
</div>

<style lang="scss">
  div {
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.2);
    width: auto;
    padding: 0 8px;
    border-radius: 5px;
    i {
      width: 20px;
      height: 20px;
      color: var(--font-color);
      border-radius: 50%;
      font-size: 12px;
    }

    input {
      width: 100%;
      background: transparent;
      border: 0;
      padding: 10px;
      color: var(--font-color);
    }
  }
  small {
    font-size: 12px;
    color: var(--error-color);
  }
</style>
