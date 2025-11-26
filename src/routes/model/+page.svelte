<script lang="ts">
    let { data } = $props();
</script>

<h2 class="subtitle">All Models</h2>

<ul>
    {#each data.models as { model, year, manufacturer, name }}
        <li><a href="/model/{model}">{year} {manufacturer} {name}</a></li>
    {/each}
</ul>