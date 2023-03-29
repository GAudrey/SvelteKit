import Product from './product.svelte'
;
export const load = async (loadEvent) => {
    console.log('load function called in page.js');
    const { data } = loadEvent;
    // const parentData = await parent();

    return { ...data, Component: Product };
}