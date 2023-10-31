import Image from 'next/image';

function Carousel() {
    return (
        <div className='w-full min-w-[150px] max-w-[300px] h-[70vh] min-h-[200px] max-h-[400px] rounded-xl bg-background-light border-border border'>
            <Image
                src='/girl.jpg'
                alt='Girl'
                width='2016'
                height='2523'
                className='w-full h-full rounded-xl object-cover'
            />
        </div>
    );
}

export default Carousel;