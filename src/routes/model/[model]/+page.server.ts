import { error } from '@sveltejs/kit';
import { models } from '../data.ts';

export function load({ params }) {
    if (params.model >= 0 && params.model < models.length) {
        const model = models[params.model];

        return {
            model
        };
    } else {
        error(404);
    }
}