import { error, redirect } from '@sveltejs/kit';

export const load = async (serverLoadEvent) => {
    const { fetch, params } = serverLoadEvent;
        // console.log({params, url, route: route.id});
    const { productID } = params;

    if(productID > 3) {
        throw error(404, { message: 'Ah non ! Séb est déjà passé par là !', hint: 'Ne le touchez pas !'});
    }
    if(productID < 0) {
        throw redirect(307, '/products');
    }

    const title = 'Détail du produit'
    const response = await fetch(`http://localhost:3000/products/${productID}`);
    const product = await response.json();

    return { title, product };
}