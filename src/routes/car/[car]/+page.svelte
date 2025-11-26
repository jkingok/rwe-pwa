<script lang="ts">
    let { data } = $props();
</script>

<h2>Car</h2>
<h3>Registration</h3>
<div>{data.car.registration}</div>
{#if data.car.model}
    <h3>Model</h3>
    <div><a href="/model/{data.car.model.index}">{data.car.model.year} {data.car.model.manufacturer} {data.car.model.name}</a></div>
{/if}