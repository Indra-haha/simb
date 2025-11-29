
import { Link } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';
export default function NavbarUser({auth}: {auth: any}) {
    return (
        <>
            <header className="z-50 top-0 sticky bg-yellow-600/80 backdrop-blur-md flex flex-row items-center justify-between w-full px-20 text-xl">
                <nav className="flex gap-8 justify-start items-center px-10">
                    <NavLink active={location.pathname === '/'} href="/">
                        Beranda
                    </NavLink>

                    <NavLink active={location.pathname === '/informasi-bencana'} href="/informasi-bencana" >
                        Informasi Bencana
                    </NavLink>

                    <NavLink active={location.pathname === '/statistika'} href="/statistika" >
                        Statistika
                    </NavLink>
                </nav>

                <nav className="gap-5 flex flex-1 justify-end px-10">
                    {auth.user ? (
                        <Link
                            href="/dashboard"
                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <Link
                            href="/login"
                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70"
                        >
                            Peduli sekarang
                        </Link>
                    )}
                </nav>
            </header>
        </>
    );
}