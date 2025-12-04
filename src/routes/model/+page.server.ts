import type { PageServerLoad } from './$types';

import type { Model } from '$lib/types.ts';
import { models } from '$lib/data.ts';

type ItemParams = {
    models: Model[]; // Models out
}

export const load: PageServerLoad<ItemParams> = ({}) => {
    return {
        models: models.map((model, index) => ({
             id: index, 
             ...model
        }))
    };
};