<script>
  import { page } from "$app/state";
  import { preloadData } from "$app/navigation";

  let loadResult = $state("-");

  async function preload() {
    const result = await preloadData(`/other?now=${new Date().toISOString()}`);
    loadResult = result.data.now;
  }

  $inspect(page.data, loadResult);
</script>

<div style="border: 2px solid red; margin: 5px;">
  <button onclick={preload}>Step 2: Call preloadData</button>

  <p>Result: {loadResult}</p>

  <p>
    When you render this component from <code>pushState</code>, clicking the
    button does not rerender. In the console, you can see that
    <code>$inspect</code> always runs twice, once with the new value and then with
    the old value.
  </p>

  <p>
    If you instead go to <code>/other</code> directly (without pushState),
    <code>preloadData</code> works as expected. (And <code>$inspect</code> only runs
    once)
  </p>
</div>
