import { Button } from '@nextui-org/button';
import NextLink from 'next/link';
import Carousel from '@/components/Carousel';

function HeroSection() {
    return (
        <section className='flex flex-col sm:flex-row-reverse items-center justify-center section-width-limits w-full gap-6'>
            <div className='flex items-center justify-center w-full'>
                <Carousel />
            </div>
            <div className='flex flex-col gap-6 items-center justify-center w-full sm:items-start'>
                <h1 className='text-[52px] text-center sm:text-left font-bold leading-tight'>
                    Elegí tu ropa preferida
                </h1>
                <p className='text-center sm:text-left'>
                    Te ofrecemos ropa buena, bonita y barata.
                </p>
                <Button
                    as={NextLink}
                    href='/ropa'
                    className='cta-gradient'
                    color='primary'
                    variant='shadow'
                    size='lg'
                >
                    Ver ropa
                </Button>
            </div>
        </section>
    );
}

export default HeroSection;
