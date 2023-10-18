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
    {
        title: 'Prenda 3',
        price: '$9000',
        image: '/p3.jpg',
    },
    {
        title: 'Prenda 3',
        price: '$9000',
        image: '/p3.jpg',
    },
    {
        title: 'Prenda 3',
        price: '$9000',
        image: '/p3.jpg',
    },
    {
        title: 'Prenda 3',
        price: '$9000',
        image: '/p3.jpg',
    },
    {
        title: 'Prenda 3',
        price: '$9000',
        image: '/p3.jpg',
    },
];

async function ProductsPage() {
    return (
        <main className='flex flex-col md:px-0 pb-8 px-4 max-w-[360px] w-full sm:max-w-[600px] md:max-w-[650px] lg:max-w-[900px]'>
            <h1 className='text-4xl font-bold md:py-12 py-8 text-center'>
                Nuestros productos
            </h1>
            <ul className='grid grid-cols-1 sm:grid-cols-2 md:w-full gap-10 lg:grid-cols-3'>
                {data.map(product => (
                    <li
                        key={product.title}
                        className='flex flex-col items-center justify-center gap-1'
                    >
                        <div className='relative w-full aspect-square rounded-xl bg-gray-400'>
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
