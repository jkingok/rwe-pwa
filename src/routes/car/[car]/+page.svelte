<script lang="ts">
    import type { PageProps } from './$types';

    let { data } : PageProps = $props();
</script>

<h2 class="subtitle">Car</h2>

<div class="box">

<div class="field">
    <label class="label">
        Registration
        <div class="control">
            <input class="input" value="{data.car.registration}" />
        </div>
    </label>
</div>

{#if typeof(data.car.model) === 'object' }
    <div class="field">
        <div class="label">
            Model
            <div class="control">
                <a class="button is-link" href="/model/{data.car.model.id}">{data.car.model.year} {data.car.model.manufacturer} {data.car.model.name}</a>
            </div>
        </div>
    </div>
{/if}

</div>