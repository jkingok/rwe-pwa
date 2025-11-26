<script lang="ts">
    let { data } = $props();
</script>

<h2 class="subtitle">All Cars</h2>

<ul>
    {#each data.cars as { car, registration }}
        <li><a href="/car/{car}">{registration}</a></li>
    {/each}
</ul>