<script lang="ts" context="module">
  export type FieldError = {
    [key: string]: {
      message: string;
    };
  };
</script>

<script lang="ts">
  import Icon from "./Icon.svelte";
  import Tooltip from "../Components/Tooltip.svelte";

  export let value: string;
  export let label: string;
  export let name: string;
  export let errors = {} as FieldError;
  export let leftIcon: string;

  $: hasErrors = errors && errors[name];
  $: classes = hasErrors ? "input with-error" : "input";
  const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    value = target.value;
  };
</script>

<div class="input-wrapper">
  <Icon name={leftIcon} />
  <input
    type="text"
    placeholder={label}
    on:change={handleInput}
    {name}
    class={classes}
    on:input={handleInput}
  />
  {#if hasErrors}
    <Tooltip message={errors[name].message}>
      <Icon name="fas fa-exclamation-circle" color="#dc3545" />
    </Tooltip>
  {/if}
</div>

<style lang="scss">
  div {
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.2);
    width: auto;
    padding: 0 8px;
    border-radius: 5px;
    margin: 15px 0;
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
