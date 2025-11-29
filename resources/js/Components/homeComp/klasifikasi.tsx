import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faDroplet } from '@fortawesome/free-solid-svg-icons'
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import ExpandingCards from '@/Components/ExpandingCard';
library.add(faCloud, faDroplet, faSeedling, faPeopleGroup);

const cards = [
    {
        id: 1,
        title: "Meteorologi",
        image: "images/hot-wheater.webp",
        description: "Bencana yang berkaitan dengan kondisi cuaca dan atmosfer, seperti badai, angin kencang, dan hujan lebat.",
        icon: <FontAwesomeIcon icon="cloud" />,
    },
    {
        id: 2,
        title: "Hidrologi",
        image: "images/dry-lake.jpg",
        description: "Bencana yang berkaitan dengan air, seperti banjir, tanah longsor, dan kekeringan.",
        icon: <FontAwesomeIcon icon="droplet" />,
    },
    {
        id: 3,
        title: "Sosial Ekonomi",
        image: "images/not-balance.png",
        description: "Bencana yang disebabkan oleh organisme hidup, seperti wabah penyakit, serangan hama, dan invasi spesies asing.",
        icon: <FontAwesomeIcon icon="people-group" />,
    },
    {
        id: 4,
        title: "Agrikultur",
        image: "images/kesuburan-tanah-rendah.jpg",
        description: "Bencana yang berkaitan dengan kerusakan lingkungan dan ekosistem, seperti deforestasi, polusi, dan perubahan iklim.",
        icon: <FontAwesomeIcon icon="seedling" />,
    },
];
export default function Klasifikasi() {
    return (
        <div className="text-xl">
            <h2 className="text-4xl py-5 font-bold justify-center w-full flex">
                Dampak
            </h2>
            <p className="text-center flex w-full justify-center pb-10">
                Dampak bencana dapat dilakukan berdasarkan beberapa kriteria, antara lain:
            </p>
            <ExpandingCards cards={cards} />
        </div>
    );
};
