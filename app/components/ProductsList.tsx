import Image from 'next/image';
import mysql2 from 'mysql2/promise';

type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
};

const pool = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

async function ProductsList() {
    const products = (
        await pool.query('select * from product')
    )[0] as Product[];

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
                                  className='rounded-xl'
                                  src={product.image}
                                  alt={product.name}
                                  fill
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
