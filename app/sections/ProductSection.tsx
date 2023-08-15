import Button from '@/components/Button';

function ProductSection() {
    return (
        <section className='flex flex-col gap-9 w-full bg-text text-background p-4 py-9 items-center'>
            <h2 className='text-3xl w-full font-bold max-w-[350px] sm:max-w-[575px] md:max-w-[700px] lg:max-w-[900px]'>
                Lo más nuevo
            </h2>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-[350px] sm:max-w-[575px] md:max-w-[700px] lg:max-w-[900px]'>
                <div className='flex items-center justify-center w-full aspect-[4/3] bg-gray-200 rounded-xl text-text'>
                    Imagen
                </div>
                <div className='flex flex-col w-full gap-1 sm:justify-evenly'>
                    <p className='font-bold md:text-2xl md:font-normal'>
                        Pantalón vaquero B&L
                    </p>
                    <p className='text-xl font-bold md:text-3xl'>9500$</p>
                    <div>
                        <p className='text-sm md:text-md'>Talles</p>
                        <p className='text-sm'>S M L XL XXL</p>
                    </div>
                    <Button className='bg-background text-text mt-2 hover:bg-background-dark hover:text-text'>
                        COMPRAR
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default ProductSection;
