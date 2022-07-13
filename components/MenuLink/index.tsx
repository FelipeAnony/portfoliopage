import Link from 'next/link';

type Props = {
  activeClass: string;
  href: string;
  value: string;
};

function MenuLink({ href, value, activeClass }: Props) {
  return (
    <Link className={`menuLink`} href={`#${href}`}>
      {value}
    </Link>
  );
}

export default MenuLink;
