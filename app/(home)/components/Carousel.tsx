import Image from 'next/image';

function Carousel() {
    return (
        <div className='w-full min-w-[150px] max-w-[300px] h-[70vh] min-h-[200px] max-h-[400px] border-divider border rounded-2xl'>
            <Image
                src='/girl.jpg'
                alt='Girl'
                priority
                width='2016'
                height='2523'
                className='w-full h-full object-cover rounded-2xl'
            />
        </div>
    );
}

export default Carousel;
