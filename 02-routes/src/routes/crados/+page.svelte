<script>
    export let cradosID = 100;
    let myIDs = [4, 5, 6, 7, 25];
</script>

<h1>Vrh was here</h1>
<a href="/">home</a>

<h2><a href="/crados/1">Crados 1</a></h2>
<h2><a href="/crados/2">Crados 2</a></h2>
<h2><a href="/crados/3">Crados 3</a></h2>

<h2><a href={`/crados/${cradosID}`}>Crados {cradosID}</a></h2>

{#each myIDs as myID}
<h2><a href={`/crados/${myID}`}>Crados {myID}</a></h2>
{/each}