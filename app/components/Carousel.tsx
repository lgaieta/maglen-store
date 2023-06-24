'use client';
import { Splide, SplideSlide } from '@splidejs/react-splide';

function Slider() {
    return (
        <Splide options={{ rewind: true, width: '100%', gap: '2rem' }}>
            <SplideSlide>
                <div className='w-[60vw] aspect-auto m-auto h-[50vh] min-h-[300px] max-h-[500px] rounded-2xl bg-background-dark border border-text' />
            </SplideSlide>
            <SplideSlide>
                <div className='w-[60vw] aspect-auto m-auto h-[50vh] min-h-[300px] max-h-[500px] rounded-2xl bg-background-dark border border-text' />
            </SplideSlide>
        </Splide>
    );
}

export default Slider;
