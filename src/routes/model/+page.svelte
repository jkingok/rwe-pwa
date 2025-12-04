<script lang="ts">
    import type { PageProps } from './$types';

    let { data } : PageProps = $props();
</script>

<h2 class="subtitle">All Models</h2>

<ul>
    {#each data.models as { id, year, manufacturer, name }}
        <li><a href="/model/{id}">{year} {manufacturer} {name}</a></li>
    {/each}
</ul>