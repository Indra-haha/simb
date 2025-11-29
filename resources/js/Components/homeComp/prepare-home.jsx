import ExpandingCard from "@/Components/ExpandingMitigasiCard";
export default function ManajemenBencana() {
    const cards = [
        {
            id: 1,
            title: "Sebelum",
            color: "bg-gradient-to-br from-amber-500 to-orange-600",
            subContents: [
                {
                    image: "images/save-water.png",
                    text: "Menghemat penggunaan air.",
                },
                {
                    image: "images/green-tea.png",
                    text: "Menanam pohon untuk menyimpan cadangan air.",
                },
                {
                    image: "images/plumbing-maintenance.png",
                    text: "Membangun infrastruktur pemeliharaan saluran air.",
                },
            ],
        },
        {
            id: 2,
            title: "Saat",
            color: "bg-gradient-to-br from-red-500 to-red-700",
            subContents: [
                {
                    image: "images/pump.png",
                    text: "Membangun sumur bor untuk mendapatkan air.",
                },
                {
                    image: "images/tank.png",
                    text: "Menyediakan air dari sumber lain yang mendukung.",
                },
                {
                    image: "images/clouds.png",
                    text: "Membuat hujan buatan di daerah terkena kekeringan.",
                },
            ],
        },
        {
            id: 3,
            title: "Sesudah",
            color: "bg-gradient-to-br from-green-500 to-emerald-700",
            subContents: [
                {
                    image: "images/save-water.png",
                    text: "Menghemat penggunaan air.",
                },
                {
                    image: "images/create-waduk.png",
                    text: "Menyediakan tempat penampungan air cadangan",
                },
                {
                    image: "images/discussion.png",
                    text: "Sosialisasi kepedulian lingkungan pada masyarakat",
                },
            ],
        },
    ];

    return (
        <>
            <h2 className="text-4xl py-5 font-bold justify-center w-full flex">
                Mitigasi Bencana Kekeringan
            </h2>
            <p className="text-center flex w-full justify-center ">
                Beberapa langkah mitigasi yang dapat dilakukan :
            </p>
            <ExpandingCard cards={cards} />
        </>
    );
}
