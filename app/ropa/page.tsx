import { Suspense } from 'react';
import ProductsList from '@/ropa/components/ProductsList';
import { Spinner } from '@nextui-org/spinner';

export const metadata = {
    title: 'Nuestra ropa - MAGLEN STORE',
};

async function ProductsPage() {
    return (
        <main className='flex flex-col min-h-screen items-center md:px-0 pb-8 bg-background text-text w-full'>
            <h1 className='text-4xl font-bold md:py-12 py-8 text-center text-text-highlight'>
                Nuestros productos
            </h1>
            <Suspense fallback={<Spinner />}>
                <ProductsList />
            </Suspense>
        </main>
    );
}

export default ProductsPage;
