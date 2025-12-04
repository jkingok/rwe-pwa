import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import type { Car } from '$lib/types.ts';
import { cars, models } from '$lib/data.ts';

type ItemParams = {
    car: string | Car; // string in, Car out
}

export const load: PageServerLoad<ItemParams> = ({ params }) => {
    const carId = Number(params.car);

    if (isNaN(carId) || carId < 0 || carId >= cars.length) {
        throw error(404, 'Invalid car ID.');
    }

    let car = {
        ...cars[carId]
    };

    if (typeof(car.model) === "number" && car.model >= 0 && car.model < models.length) {
        const modelId = car.model;
        car.model = { ...models[modelId] };
        car.model.id = modelId;
    } else if (car.model) {
        delete car.model;
    }

    return { car };
}