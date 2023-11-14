'use server';

import { pool } from '@/(common)/services/pool';
import { ProductSchema } from '../ProductSchema';
import { ProductFormErrors } from '@/subir-ropa/components/ProductForm';
import { redirect } from 'next/navigation';
import { getDataFromFormData } from '../utils/getDataFromFormData';

const createProductServerAction = async (
    _: { errors: ProductFormErrors },
    formData: FormData
) => {
    try {
        const { name, price, file, sizes } = getDataFromFormData(formData);

        const parsedResult = ProductSchema.safeParse({
            name,
            image: file instanceof File && file.size === 0 ? null : file,
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

        // await pool.query(
        //     'INSERT INTO product (name, price, image) VALUES (?, ?, ?)',
        //     [
        //         parsedResult.data.name,
        //         parsedResult.data.price,
        //         parsedResult.data.image !== null
        //             ? Buffer.from(await parsedResult.data.image.arrayBuffer())
        //             : null,
        //     ]
        // );

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
