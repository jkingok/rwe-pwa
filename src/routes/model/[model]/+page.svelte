<script lang="ts">
    let { data } = $props();
</script>

<h2 class="subtitle">Model</h2>

<div class="box">

<div class="field">
    <label class="label">Year</label>
    <div class="control">
        <input class="input" value="{data.model.year}" />
    </div>
</div>

<div class="field">
    <label class="label">Manufacturer</label>
    <div class="control">
        <input class="input" value="{data.model.manufacturer}" />
    </div>
</div>

<div class="field">
    <label class="label">Name</label>
    <div class="control">
        <input class="input" value="{data.model.name}" />
    </div>
</div>

</div>