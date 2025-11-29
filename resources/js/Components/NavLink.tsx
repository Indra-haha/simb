import { InertiaLinkProps, Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}: InertiaLinkProps & { active: boolean }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center border-b-2 px-1 pt-1 text-xl font-medium leading-9 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-white text-white focus:border-white focus:text-orange-300'
                    : 'border-transparent text-gray-500 hover:border-orange-200 hover:text-orange-200 focus:border-orange-300 focus:text-orange-300') +
                className
            }
        >
            {children}
        </Link>
    );
}
