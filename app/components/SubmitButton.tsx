'use client';

import { Button } from '@nextui-org/button';
import { useFormStatus } from 'react-dom';

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button
            type='submit'
            color='primary'
            size='lg'
            className='font-semibold'
            isLoading={pending}
        >
            {pending ? 'Cargando...' : 'Subir ropa'}
        </Button>
    );
}

export default SubmitButton;
