import { error } from '@sveltejs/kit';
import { cars } from '../data.ts';
import { models } from '../../model/data.ts';

export function load({ params }) {
    if (params.car >= 0 && params.car < cars.length) {
        let car = { ...cars[params.car] };
        if (car.model >=0 && car.model < models.length) {
            const index = car.model;
            car.model = { ...models[index] };
            car.model.index = index;
        } else {
            delete car.model;
        }

        return {
            car
        };
    } else {
        error(404);
    }
}