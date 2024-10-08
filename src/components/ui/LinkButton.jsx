import clsx from 'clsx';
import Link from 'next/link';

const LinkButton = ({ children, href, className }) => {
  return (
    <Link className={clsx('', className)} href={href}>
    {children}
    </Link>
  )
}

export default LinkButton