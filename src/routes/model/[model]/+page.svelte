<script lang="ts">
    import type { PageProps } from './$types';

    let { data } : PageProps = $props();
</script>

<h2 class="subtitle">Model</h2>

<div class="box">

<div class="field">
    <label class="label">
        Year
        <div class="control">
            <input class="input" value="{data.model.year}" />
        </div>
    </label>
</div>

<div class="field">
    <label class="label">
        Manufacturer
        <div class="control">
            <input class="input" value="{data.model.manufacturer}" />
        </div>
    </label>
</div>

<div class="field">
    <label class="label">
        Name
        <div class="control">
            <input class="input" value="{data.model.name}" />
        </div>
    </label>
</div>

</div>