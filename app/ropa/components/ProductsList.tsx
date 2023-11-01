import NextImage from 'next/image';
import { getPool } from '@/(common)/services/getPool';
import { Image } from '@nextui-org/image';
import {
    IncomingProduct,
    productListAdapter,
} from '@/ropa/adapters/productAdapters';
import { Link } from '@nextui-org/react';
import NextLink from 'next/link';

const ARSFormat = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
});

async function ProductsList() {
    const products = productListAdapter(
        (await getPool().query('select * from product'))[0] as IncomingProduct[]
    );

    if (products.length === 0)
        return (
            <p>
                No hay productos guardados, presione en{' '}
                <Link as={NextLink} href='/subir-ropa'>
                    Subir Ropa
                </Link>{' '}
                para guardar el primero.
            </p>
        );

    return (
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 section-width-limits w-full gap-10'>
            {products
                ? products.map(product => (
                      <li
                          key={product.id}
                          className='flex flex-col items-center justify-center gap-1'
                      >
                          <div className='relative w-full aspect-square rounded-xl bg-content1 border border-divider'>
                              <Image
                                  as={NextImage}
                                  className='rounded-xl w-full aspect-square object-cover'
                                  src={product.image || ''}
                                  alt={product.name}
                                  width={500}
                                  height={500}
                              />
                          </div>
                          <p className='text-xl font-bold mt-1'>
                              {product.name}
                          </p>
                          <p className='text-xl'>
                              {ARSFormat.format(product.price).slice(0, -3)}
                          </p>
                      </li>
                  ))
                : null}
        </ul>
    );
}

export default ProductsList;
