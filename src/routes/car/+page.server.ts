import { cars } from './data.ts';

export const load = (async () => {
    return {
        cars: cars.map((car, index) => ({
             car: index, 
             registration: car.registration
        }))
    };
});