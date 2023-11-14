import { SIZES_KEYS, SIZE_KEY_PREFIX } from '@/(common)/utils/constants';

const getSizes = (formData: FormData) => {
    type Sizes = {
        [key in `${typeof SIZE_KEY_PREFIX}${(typeof SIZES_KEYS)[number]}`]?: number;
    };

    const result: Sizes = {};

    for (const [key, value] of formData) {
        if (!key.startsWith(SIZE_KEY_PREFIX)) console.log('not', key);
        else result[key.slice(3)] = value;
    }
};

export const getDataFromFormData = (formData: FormData) => {
    const name = formData.get('name');
    const price = formData.get('price');
    const file = formData.get('image');
    const sizes = getSizes(formData);

    return { name, price, file, sizes };
};
