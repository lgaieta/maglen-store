import { Button } from '@nextui-org/button';

function ProductSection() {
    return (
        <section className='dark flex flex-col gap-9 w-full p-4 py-9 items-center bg-background text-foreground'>
            <h2 className='text-3xl w-full font-bold section-width-limits'>
                Lo más nuevo
            </h2>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 w-full section-width-limits'>
                <div className='flex items-center justify-center w-full aspect-[4/3] bg-content1 rounded-xl border border-divider'>
                    Imagen
                </div>
                <div className='flex flex-col w-full gap-1 sm:justify-evenly'>
                    <p className='font-bold md:text-2xl'>
                        Pantalón vaquero B&L
                    </p>
                    <p className='text-xl font-bold md:text-3xl'>9500$</p>
                    <div className=''>
                        <p className='text-sm md:text-md'>Talles</p>
                        <p className='text-sm'>S M L XL XXL</p>
                    </div>
                    <Button
                        className='cta-gradient'
                        color='primary'
                        variant='shadow'
                    >
                        COMPRAR
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default ProductSection;
