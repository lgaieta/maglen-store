import NextLink from 'next/link';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from '@nextui-org/navbar';
import { Button } from '@nextui-org/button';

function Header() {
    return (
        <Navbar
            classNames={{
                base: 'w-full',
                wrapper: 'w-full section-width-limits',
            }}
        >
            <NavbarBrand>
                <NextLink href='/' className='font-bold text-inherit'>
                    Maglen store
                </NextLink>
            </NavbarBrand>
            <NavbarContent justify='end'>
                <NavbarItem>
                    <Button
                        as={NextLink}
                        href='#'
                        color='primary'
                        variant='flat'
                    >
                        Crear producto
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}

export default Header;
