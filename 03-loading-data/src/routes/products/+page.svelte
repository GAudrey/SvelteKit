<script>
    export let data;
    const products = data.products;
    const Component = data.Component;
</script>

<h1>{data.title}</h1>

{#each products as product}
    <Component {product}/>
        <!-- <h2>{product.title}</h2>
        <p>{product.description}</p> -->
{/each}