import { Spinner } from '@nextui-org/spinner';

function Loading() {
    return (
        <main className='h-screen w-full flex flex-col mt-10'>
            <Spinner size='lg' />
        </main>
    );
}

export default Loading;
