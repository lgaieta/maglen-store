import ProductForm from '@/components/ProductForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Subir ropa - Maglen store',
};

function CreateProductPage() {
    return (
        <main className='flex flex-col items-center section-width-limits w-full border min-h-[90vh]'>
            <h1 className='text-3xl font-bold text-center py-10'>Subir ropa</h1>
            <ProductForm />
        </main>
    );
}

export default CreateProductPage;
