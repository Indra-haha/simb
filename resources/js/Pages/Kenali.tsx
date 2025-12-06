import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import PrepareHome from '@/Components/homeComp/prepare-home';
import CardReasonHome from '@/Components/homeComp/card-reason-home';
import Klasifikasi from '@/Components/homeComp/klasifikasi';
import NavbarUser from '@/Components/guest/NavbarUser';

export default function Kenali({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome | Sistem Informasi Bencana" />
            <div className="relative bg-slate-300 text-black">
                <div className="relative flex flex-col">
                    <div className="relative w-full ">
                        <NavbarUser auth={auth} />

                        <main className="z-0 mt-6 max-w-7xl mx-auto">
                            <div className="flex flex-row flex-wrap justify-between items-center px-20">
                                <img
                                    src="/images/kekeringanlogo.jpeg"
                                    alt="Logo ilustrasi kekeringan"
                                    width={300}
                                />
                                <div className="flex flex-col items-center justify-between">
                                    <h2 className="text-4xl pb-9 pt-2 font-bold justify-start w-full flex">
                                        Bencana Kekeringan
                                    </h2>
                                    <p className="text-justify text-lg max-w-3xl mx-auto">
                                        suatu kondisi alam di mana terjadi <span className="font-bold">kekurangan air dalam jangka waktu tertentu</span> sehingga mengganggu kehidupan manusia, hewan, tumbuhan, dan aktivitas sosial-ekonomi masyarakat. Kekeringan biasanya terjadi karena <span className="font-bold">curah hujan yang rendah atau tidak merata</span> meningkatnya suhu udara, atau kombinasi faktor alam dan manusia seperti penggunaan air yang berlebihan.
                                    </p>
                                </div>
                            </div>

                            <CardReasonHome />
                            <PrepareHome />
                            <Klasifikasi />
                        </main>

                        <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
