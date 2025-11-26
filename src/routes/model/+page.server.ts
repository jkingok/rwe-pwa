import { models } from './data.ts';

export const load = (async () => {
    return {
        models: models.map((model, index) => ({
             model: index, 
             year: model.year,
             manufacturer: model.manufacturer,
             name: model.name
        }))
    };
});