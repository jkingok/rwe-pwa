<script lang="ts">
    import type { PageProps } from './$types';

    let { data } : PageProps = $props();
</script>

<h2 class="subtitle">All Cars</h2>

<ul>
    {#each data.cars as { id, registration }}
        <li><a href="/car/{id}">{registration}</a></li>
    {/each}
</ul>