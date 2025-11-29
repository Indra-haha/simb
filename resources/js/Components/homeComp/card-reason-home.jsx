import CardReason from "@/Components/CardReason";

const cards = [
    {
        id: 1,
        title: "El Nino",
        url: "/news?id=el-nino",
        img: "/images/el-nino.png",
    },
    {
        id: 2,
        title: "Kemarau Panjang",
        url: "/news?id=kemarau-panjang",
        img: "/images/kemarau-panjang.png",
    },
    {
        id: 3,
        title: "Global Warming",
        url: "/news?id=global-warming",
        img: "/images/global-warming.png",
    },
    {
        id: 4,
        title: "Deforestasi",
        url: "/news?id=deforestasi",
        img: "/images/deforestasi.png",
    },
    {
        id: 5,
        title: "Urbanisasi",
        url: "/news?id=urbanisasi",
        img: "/images/urbanisasi.png",
    },
    {
        id: 6,
        title: "Penggunaan Air Berlebihan",
        url: "/news?id=penggunaan-air-berlebihan",
        img: "/images/penggunaan-air-berlebihan.png",
    },
    {
        id: 7,
        title: "Infrastruktur Air Buruk",
        url: "/news?id=pengelolaan-air-buruk",
        img: "/images/pengelolaan-air-buruk.png",
    },
];
export default function CardReasonHome() {
    return (
        <>
            <h2 className="text-4xl py-5 font-bold justify-center w-full flex">
                Penyebab
            </h2>
            <p className="text-center flex w-full justify-center">
                Beberapa penyebab krisis air
            </p>
            <CardReason cards={cards} />
        </>
    );
}
