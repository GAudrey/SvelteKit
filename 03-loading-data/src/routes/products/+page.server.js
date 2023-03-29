export const load = async (serverLoadEvent) => {
    console.log('load function called in page.server.js');

    const { fetch } = serverLoadEvent;
    const title = 'Liste des produits actuels';
    const response = await fetch('http://localhost:3000/products');
    const products = await response.json();

    return { title, products };
};