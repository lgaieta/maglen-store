import Link from 'next/link';

const buttonStyles =
    'px-8 py-3 text-md font-bold rounded-full transition-colors bg-accent text-textAccent hover:bg-pink-900';

type ButtonProps<Element extends React.ElementType<any>> = {
    children: React.ReactNode;
} & React.ComponentPropsWithoutRef<Element>;

function Button({ children, className = '', ...rest }: ButtonProps<'button'>) {
    return (
        <button className={`${buttonStyles} ${className}`} {...rest}>
            {children}
        </button>
    );
}

export default Button;

export function ButtonLink({
    children,
    className = '',
    ...rest
}: ButtonProps<'a'> & React.ComponentPropsWithoutRef<typeof Link>) {
    return (
        <Link className={`${buttonStyles} ${className}`} {...rest}>
            {children}
        </Link>
    );
}
