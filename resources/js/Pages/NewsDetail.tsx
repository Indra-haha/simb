import React from "react";
import { Head } from "@inertiajs/react";
import NavbarUser from "@/Components/guest/NavbarUser";

type NewsData = {
    title: string;
    img: string;
    content: string;
};

type NewsDetailProps = {
    data: NewsData;
    auth: '';
};

export default function NewsDetail({ data, auth }: NewsDetailProps) {
    return (
        <>
            <NavbarUser auth={auth} />
            <div className="max-w-3xl mx-auto p-6">
                <Head title={data.title} />

                <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
                <img
                    src={data.img}
                    alt={data.title}
                    className="w-full max-h-[10px] object-cover rounded-lg mb-6"
                />

                <p className="text-lg leading-relaxed">
                    {data.content}
                </p>
            </div>
        </>

    );
}
