export const load = async (serverLoadEvent) => {
    const { fetch } = serverLoadEvent;
    const response = await fetch('http://localhost:3000/cards');
    const cards = await response.json();

    return { cards };
}