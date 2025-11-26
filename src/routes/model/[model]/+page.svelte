<script lang="ts">
    let { data } = $props();
</script>

<h1>Real World Economy</h1>

<h2>Model</h2>
<h3>Year</h3>
<div>{data.model.year}</div>
<h3>Manufacturer</h3>
<div>{data.model.manufacturer}</div>
<h3>Name</h3>
<div>{data.model.name}</div>