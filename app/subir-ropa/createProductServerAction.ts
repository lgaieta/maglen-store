'use server';

import { getPool } from '@/services/getPool';
import { ProductSchema } from './ProductSchema';
import { ProductFormErrors } from '@/components/ProductForm';
import { redirect } from 'next/navigation';

const createProductServerAction = async (
    _: { errors: ProductFormErrors },
    formData: FormData
) => {
    try {
        const name = formData.get('name') as string;
        const price = parseFloat(formData.get('price') as string);
        const file = formData.get('image') as File;

        const parsedResult = ProductSchema.safeParse({
            name,
            image: file.size === 0 ? null : file,
            price,
        });

        if (parsedResult.success === false) {
            const errors: ProductFormErrors = parsedResult.error.issues.reduce(
                (errorsAccumulator, issue) => ({
                    ...errorsAccumulator,
                    [issue.path[0]]: issue.message,
                }),
                {}
            );

            return { errors };
        }

        const pool = getPool();

        await pool.query(
            'INSERT INTO product (name, price, image) VALUES (?, ?, ?)',
            [
                parsedResult.data.name,
                parsedResult.data.price,
                parsedResult.data.image !== null
                    ? Buffer.from(await parsedResult.data.image.arrayBuffer())
                    : null,
            ]
        );

        console.log(
            `Saved product with name ${name} and price ${price} successfully`
        );
    } catch (e) {
        console.log(e);

        return {
            errors: {
                server: 'Ha ocurrido un error al guardar los datos, por favor inténtelo nuevamente.',
            },
        };
    }

    redirect('/ropa');
};

export default createProductServerAction;
