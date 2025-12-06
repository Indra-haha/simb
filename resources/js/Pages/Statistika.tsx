
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import NavbarUser from "@/Components/guest/NavbarUser";
import { faCloud, faDroplet, faPeopleGroup, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Heatmap from "@/Components/heatmap";

library.add(faCloud, faDroplet, faSeedling, faPeopleGroup);

export default function Statistika({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {

    return (
        <div>
            <Head title="Welcome | Sistem Informasi Bencana" />

            <div className="relative bg-slate-300 text-black">
                <div className="relative flex flex-col">
                    <div className="relative w-full ">

                       <NavbarUser auth={auth} />

                        {/* CONTENT */}
                        <main className="z-0 mt-6 max-w-7xl mx-auto">
                            <Heatmap />
                        </main>

                        {/* FOOTER */}
                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
};
