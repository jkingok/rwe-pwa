<script lang="ts">
    let input = $state(0);
    let units = [
        {
            id: 1,
            text: 'mpg'
        },
        {
            id: 2,
            text: "L/100km"
        },
        {
            id: 3,
            text: "km/L"
        }
    ];
    let ratios = [
        // from -- to
        //  mpg, L/100km,  km/L
              1, 282.481, 0.354, // mpg
        282.481,       1,   100, // L/100km
          2.825,     100,     1, // km/L

    ];
    const multiply =  true;
    const divide   = false;
    let directions = [
        // from -- to
        //    mpg,  L/100km,     km/L
         multiply,   divide, multiply, // mpg
           divide, multiply,   divide, // L/100km
         multiply,   divide, multiply, // km/L
        
    ];
    let unitin = $state(units[0]);
    let unitout = $state(units[0]);
    let unitmapped = $state(0);
</script>

<!-- Intent of this page is to make a live updating fuel economy converter -->

<h2 class="subtitle">Fuel Economy Unit Convertor</h2>

<form onsubmit={(e) => e.preventDefault()}>

<div class="box">

<div class="field">
    <label class="label">
        Value to convert:&nbsp;
        <div class="control">
            <input class="input" type="number" bind:value={input} />
        </div>
    </label>
</div>

<div class="field">
    <label class="label">
        From unit:&nbsp;
        <div class="control">
            <select bind:value={unitin} onchange={() => unitmapped = (unitin.id - 1) * 3 + unitout.id - 1}>
                {#each units as unit}
                    <option value={unit}>{unit.text}</option>
                {/each}
            </select>
        </div>
    </label>
</div>

</div>

<div class="box">

<div class="field">
    <label class="label">
        To unit:&nbsp;
        <div class="control">
            <select bind:value={unitout} onchange={() => unitmapped = (unitin.id - 1) * 3 + unitout.id - 1}>
                {#each units as unit}
                    <option value={unit}>{unit.text}</option>
                {/each}
            </select>
        </div>
    </label>
</div>

<div class="field">
    <label class="label">
        Converted value:&nbsp;
        <div class="control">
            <input class="input" type="number" value={
                directions[unitmapped] === multiply 
                    ? input * ratios[(unitin.id - 1) * 3 + unitout.id - 1]
                    : ratios[(unitin.id - 1) * 3 + unitout.id - 1] / input
            } readonly />
        </div>
    </label>
</div>

</div>

</form>