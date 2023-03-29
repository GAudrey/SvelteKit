import Card from './card.svelte';

export const load = async (loadEvent) => {
    const { data } = loadEvent;

    return { ...data, Component: Card };
}