<script lang="ts">
  export let message: string = "";
</script>

<div class="tooltip-wrapper">
  <span>
    {message}
  </span>
  <slot />
</div>

<style lang="scss">
  .tooltip-wrapper {
    position: relative;
    max-width: 200px;
    &:hover span {
      visibility: visible;
      opacity: 1;
    }

    span {
      transition: opacity 0.5s;
      opacity: 0;
      visibility: hidden;
      font-size: 12px;
      color: white;
      padding: 8px;
      background: var(--primary-color);
      width: 200px;
      position: absolute;
      left: 50%;
      bottom: 0;
      margin-bottom: 48px;
      transform: translate(-50%, 50%);
      border-radius: 5px;
      &::before {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0;
        margin-bottom: 24px;

        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid var(--primary-color);
        transform: translateX(-50%);
        top: 100%;
      }
    }
  }
</style>
