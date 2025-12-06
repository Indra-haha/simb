import { PageProps } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import NewsHome from '@/Components/homeComp/news-home';
import NavbarUser from '@/Components/guest/NavbarUser';
import StatisticHome from '@/Components/StatisticHome';

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {

    return (
        <>
            <Head title="Welcome | Sistem Informasi Bencana" />
            <NavbarUser auth={auth} />
            <div className="relative bg-slate-300 text-white">
                <div className="relative flex flex-col">
                    <div className="relative w-full ">



                        {/* CONTENT */}
                        <main className="z-0 mt-6 max-w-7xl mx-auto">
                            <NewsHome />
                            <StatisticHome/>
                        </main>

                        {/* FOOTER */}
                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>

                    </div>
                </div>
            </div>
        </>
    );
}
