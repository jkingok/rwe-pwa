import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import type { Model } from '$lib/types.ts';
import { models } from '$lib/data.ts';

type ItemParams = {
    model: string | Model; // string in, Model out
}

export const load: PageServerLoad<ItemParams> = ({ params }) => {
    const modelId = Number(params.model);

    if (isNaN(modelId) || modelId < 0 || modelId >= models.length) {
        throw error(404, 'Invalid model ID.');
    }

    let model = {
        ...models[modelId]
    };

    return { model };
}
