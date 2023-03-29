<script>
    export let data;
    const cards = data.cards;
    const Component = data.Component;
</script>

{#each cards as card}
    <Component {card} />
{/each}