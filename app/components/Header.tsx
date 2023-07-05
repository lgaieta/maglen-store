import Link from 'next/link';
import { MdMoreVert } from 'react-icons/md';

function Header() {
    return <header className='flex justify-center items-center w-full p-4 border-border border-b text-text'>
        <div className='flex justify-between items-center w-full max-w-[900px]'>
            <Link className='font-medium' href='/'>
                Maglen store
            </Link>
            <MdMoreVert size={24} />
        </div>
    </header>
}

export default Header