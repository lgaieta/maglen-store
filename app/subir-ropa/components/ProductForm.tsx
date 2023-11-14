'use client';

import { Input } from '@nextui-org/input';
import SubmitButton from '@/subir-ropa/components/SubmitButton';
import { useFormState } from 'react-dom';
import createProductServerAction from '@/subir-ropa/actions/createProductServerAction';
import ImageUploader from '@/subir-ropa/components/ImageUploader';

export type ProductFromUser = {
    name: string;
    price: number;
    image: File;
};

export type ProductFormErrors = {
    name?: string;
    price?: string;
    image?: string;
    server?: string;
};

function ProductForm() {
    const [{ errors }, formAction] = useFormState<
        { errors: ProductFormErrors },
        FormData
    >(createProductServerAction, { errors: {} });

    return (
        <form
            action={formAction}
            className='flex flex-col gap-6 w-full max-w-[500px]'
        >
            <Input
                name='name'
                label='Nombre'
                variant='bordered'
                isRequired
                validationState={errors?.name ? 'invalid' : 'valid'}
                errorMessage={errors?.name || null}
            />
            <Input
                name='price'
                label='Precio'
                type='number'
                variant='bordered'
                isRequired
                validationState={errors?.price ? 'invalid' : 'valid'}
                errorMessage={errors?.price || null}
                min={0}
            />
            <ImageUploader
                isError={errors?.image !== undefined}
                errorMessage={errors?.image || null}
            />
            <input type='checkbox' name='check' value={'salsa'} />
            <input type='checkbox' name='check' value={'y picante'} />
            <input type='checkbox' name='check' value={'y nos fuimos'} />
            <SubmitButton />
        </form>
    );
}

export default ProductForm;
