import { Button } from '@nextui-org/button';
import { Image } from '@nextui-org/image';
import NextImage from 'next/image';

function ProductSection() {
    return (
        <section className='dark flex flex-col gap-9 w-full p-4 py-9 items-center bg-background text-foreground'>
            {/* <h2 className='text-3xl w-full font-bold section-width-limits'>
                Lo más nuevo
            </h2> */}
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 w-full justify-evenly section-width-limits'>
                <div className='flex relative items-center justify-center w-1/3 aspect-square bg-content1 rounded-xl border border-divider'>
                    <Image
                        as={NextImage}
                        src='/product-trending.jpg'
                        alt='Lo más nuevo - Maglen store'
                        className='w-full aspect-square object-cover'
                        width={1200}
                        height={1200}
                    />
                </div>
                <div className='flex flex-col w-1/3 gap-6 justify-center'>
                    <p className='font-bold md:text-2xl text-foreground'>
                        Remera grande Clean
                    </p>
                    <p className='text-xl font-bold md:text-4xl text-primary'>
                        $ 7.999
                    </p>
                    <Button
                        className='cta-gradient'
                        color='primary'
                        variant='shadow'
                        size='lg'
                    >
                        COMPRAR
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default ProductSection;
