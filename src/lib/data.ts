import type { Car, Model } from './types.ts';

export let models: Model[] = [
    {
        year: 2002,
        manufacturer: "Holden",
        name: "Rodeo"
    },
    {
        year: 2007,
        manufacturer: "Kia",
        name: "Sportage"
    }
];

export let cars: Car[] = [
    { 
        registration: 'AU-WA-1ABC000',
        model: 0
    },
    {
        registration: 'AU-WA-1ABC001',
        model: 1
    }
];
