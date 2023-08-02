import { ReactNode } from 'react';

type ReviewProps = {
    author: string;
    content: string;
    image: ReactNode;
};

function Review(props: ReviewProps) {
    const { author, content, image } = props;

    return (
        <li className='relative flex border border-border flex-col items-center text-center w-full h-fit gap-2 p-6 pt-10 rounded-lg'>
            <div className='absolute rounded-full w-14 h-14 -top-7'>
                {image}
            </div>
            <p>{content}</p>
            <p>{author}</p>
        </li>
    );
}

export default Review;
