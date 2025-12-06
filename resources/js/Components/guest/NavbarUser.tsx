
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

                    <NavLink active={location.pathname === '/pengetahuan'} href="/pengetahuan" >
                        Pengetahuan
                    </NavLink>

                    <NavLink active={location.pathname === '/statistika'} href="/statistika" >
                        Statistika
                    </NavLink>
                </nav>

                
            </header>
        </>
    );
}