import { Image } from '@nextui-org/image';
import NextImage from 'next/image';
import getProductFromDatabase from './services/getProductFromDatabase';
import { IncomingProduct, productAdapter } from '../adapters/productAdapters';
import { Button } from '@nextui-org/button';

async function ProductPage({ params }: { params: { id: string } }) {
    const product = productAdapter(
        (await getProductFromDatabase(+params.id)) as IncomingProduct
    );

    return (
        <main className='flex flex-col max-w-sm m-8 min-h-[70vh] sm:gap-8 sm:max-w-screen-md w-full sm:flex-row h-fit items-center'>
            <div className='relative w-full'>
                <Image
                    className='w-full'
                    src={product.image || ''}
                    alt={product.name}
                    as={NextImage}
                    width={500}
                    height={500}
                />
            </div>

            <div className='flex flex-col w-full sm:justify-center'>
                <h1 className='text-lg font-bold mt-4 sm:text-2xl'>
                    {product.name}
                </h1>
                <p className='text-2xl font-bold mt-2 text-primary sm:text-4xl sm:mt-4'>
                    ${product.price}
                </p>
                <Button
                    className='cta-gradient mt-4 sm:justify-self-end'
                    size='lg'
                >
                    COMPRAR
                </Button>
            </div>
        </main>
    );
}

export default ProductPage;
