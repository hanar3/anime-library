<script lang="ts">
  export let name: string;
  export let color: string = "#FFFFFF";
</script>

<i class={name} style={`color: ${color}`} />

<style>
  i {
    font-family: "Font Awesome 5 Free";
  }
</style>
