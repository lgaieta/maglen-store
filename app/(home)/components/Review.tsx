import { ReactNode } from 'react';

type ReviewProps = {
    author: string;
    content: string;
    image: ReactNode;
};

function Review(props: ReviewProps) {
    const { author, content, image } = props;

    return (
        <li className='relative hover:scale-105 select-none transition-transform flex border border-divider flex-col items-center shadow-lg text-center w-full h-fit gap-2 p-6 pt-10 rounded-lg'>
            <div className='absolute rounded-full w-14 h-14 -top-7'>
                {image}
            </div>
            <p className='text-foreground-800 font-semibold'>{content}</p>
            <p>{author}</p>
        </li>
    );
}

export default Review;
