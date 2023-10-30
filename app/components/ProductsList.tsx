import NextImage from 'next/image';
import { Product } from '@/entities/Product';
import { getPool } from '@/services/getPool';
import { Image } from '@nextui-org/image';
import { IncomingProduct, productListAdapter } from '@/ropa/productAdapters';

async function ProductsList() {
    const products = productListAdapter(
        (await getPool().query('select * from product'))[0] as IncomingProduct[]
    );

    return (
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 section-width-limits w-full gap-10'>
            {products
                ? products.map(product => (
                      <li
                          key={product.id}
                          className='flex flex-col items-center justify-center gap-1'
                      >
                          <div className='relative w-full aspect-square rounded-xl bg-background-dark border border-border'>
                              <Image
                                  as={NextImage}
                                  className='rounded-xl'
                                  src={product.image || ''}
                                  alt={product.name}
                                  width={500}
                                  height={500}
                              />
                          </div>
                          <p className='text-xl font-bold mt-1'>
                              {product.name}
                          </p>
                          <p className='text-xl'>${product.price}</p>
                      </li>
                  ))
                : null}
        </ul>
    );
}

export default ProductsList;
