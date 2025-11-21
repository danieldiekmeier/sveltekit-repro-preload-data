<script>
  import { pushState } from "$app/navigation";
  import { page } from "$app/state";

  import Other from "./other/+page.svelte";

  function showOther() {
    pushState("/other", {
      showOther: true,
    });
  }
</script>

{#if page.state.showOther}
  <Other />
{/if}

<hr />

<button onclick={showOther}>
  Step 1: Use pushState to show other page component inline
</button>
