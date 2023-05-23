import { ButtonLink } from '@/components/Button';

function HeroSection() {
    return (
        <section className='flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center min-h-[570px] justify-center py-8 md:px-section-sides md:py-12 w-full h-[80vh]'>
            <div className='flex items-center justify-between w-full gap-8 h-full min-h-[20rem]'>
                <div className='w-1/6 md:w-1/3 h-4/5 bg-primary rounded-lg' />
                <div className='w-2/3 md:w-1/2 h-full bg-primary rounded-lg' />
                <div className='w-1/6 md:w-1/3 h-4/5 bg-primary rounded-lg' />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-5xl text-center font-bold'>
                    Elegí tu ropa preferida
                </h1>
                <p className='text-primaryLight text-md mt-5'>
                    Hacemos ropa para adolescentes
                </p>
                <ButtonLink href='#' className='mt-5'>
                    Ver ropa
                </ButtonLink>
            </div>
        </section>
    );
}

export default HeroSection;
