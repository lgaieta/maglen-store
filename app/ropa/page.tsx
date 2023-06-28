import Image from 'next/image';

export const metadata = {
    title: 'Nuestra ropa - MAGLEN STORE',
};

const data = [
    {
        title: 'Prenda 1',
        price: '$9000',
        image: '/p1.jpg',
    },
    {
        title: 'Prenda 2',
        price: '$9000',
        image: '/p2.jpg',
    },
    {
        title: 'Prenda 3',
        price: '$9000',
        image: '/p3.jpg',
    },
];

function ProductsPage() {
    return (
        <main className='flex flex-col my-6'>
            <h1 className='text-4xl font-bold mb-8'>Nuestros productos</h1>
            <ul className='flex flex-col gap-10'>
                {data.map(product => (
                    <li
                        key={product.title}
                        className='flex flex-col items-center justify-center gap-2'
                    >
                        <div className='relative w-full aspect-square rounded-xl bg-slate-700'>
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                            />
                        </div>
                        <p className='text-xl font-bold'>{product.title}</p>
                        <p className='text-xl'>{product.price}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default ProductsPage;
