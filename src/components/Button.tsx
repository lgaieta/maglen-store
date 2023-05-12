import Link from "next/link";

const buttonStyles = "";

type ButtonProps<Element extends React.ElementType<any>> = {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<Element>;

function Button({ children, className, ...rest }: ButtonProps<"button">) {
  return (
    <button className={`${buttonStyles} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;

export function ButtonLink({
  children,
  ...rest
}: ButtonProps<"a"> & React.ComponentPropsWithoutRef<typeof Link>) {
  return <Link {...rest}></Link>;
}
