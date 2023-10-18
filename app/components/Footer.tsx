import Link from 'next/link';

function Footer() {
    return (
        <footer className='flex flex-col gap-4 bg-gray-600 text-white justify-center items-center py-8 w-full border-t border-gray-300'>
            <Link href='#'>@maglen.store</Link>
            <Link href='#'>Envianos un mensaje</Link>
            <Link href='#'>maglen.store</Link>
        </footer>
    );
}

export default Footer;
