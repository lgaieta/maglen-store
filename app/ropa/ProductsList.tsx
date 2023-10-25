'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
};

function ProductsList() {
    const [products, setProducts] = useState<Product[] | null>(null);

    useEffect(() => {
        fetch('/ropa/api')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

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
