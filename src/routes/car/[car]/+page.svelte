<script lang="ts">
    let { data } = $props();
</script>

<h2 class="subtitle">Car</h2>

<div class="box">

<div class="field">
    <label class="label">Registration</label>
    <div class="control">
        <input class="input" value="{data.car.registration}" />
    </div>
</div>

{#if data.car.model}
    <div class="field">
        <label class="label">Model</label>
        <div class="control">
            <a class="button is-link" href="/model/{data.car.model.index}">{data.car.model.year} {data.car.model.manufacturer} {data.car.model.name}</a>
        </div>
    </div>
{/if}

</div>