<script lang="ts">
    let { data } = $props();
</script>

<h1>Real World Economy</h1>

<h2>All Cars</h2>

<ul>
    {#each data.cars as { car, registration }}
        <li><a href="/car/{car}">{registration}</a></li>
    {/each}
</ul>