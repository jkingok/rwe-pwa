import type { PageServerLoad } from './$types';

import type { Car } from '$lib/types.ts';
import { cars } from '$lib/data.ts';

type ItemParams = {
    cars: Car[]; // Cars out
}

export const load: PageServerLoad<ItemParams> = ({}) => {
    return {
        cars: cars.map((car, index) => ({
             id: index, 
             ...car
        }))
    };
};