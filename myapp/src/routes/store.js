import { writable } from 'svelte/store'
export const shinyScore = writable({ n: 0 });
export const typeScore = writable({ n: 0 });
export const cachipunScore = writable({ n: 0 });
export const shinyGames = writable({ n: 0 });
export const typeGames = writable({ n: 0 });
export const cachipunGames = writable({ n: 0 });
export const favoritePokemon = writable({ name: "none" });