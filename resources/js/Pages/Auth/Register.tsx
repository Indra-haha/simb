import { Head, Link, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import type { FormEvent } from 'react';
import { User, Mail, Lock } from 'lucide-react'; // ⬅️ ICON BARU

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark p-4">

                <form onSubmit={submit} className="w-full max-w-md mt-20 sm:mt-28">
                    <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-background-dark sm:p-8">
                        <h1 className="text-[#111418] dark:text-white text-[32px] font-bold leading-tight pb-2 pt-4">
                            Buat Akun Baru
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 pb-6">
                            Isi formulir di bawah ini untuk memulai.
                        </p>

                        {/* NAMA */}
                        <label className="flex flex-col w-full mb-4">
                            <p className="text-[#111418] dark:text-gray-300 font-medium pb-2">
                                Nama Pengguna
                            </p>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400" />
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="w-full h-14 rounded-lg border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#1a2937] pl-12 p-3 text-black dark:text-white focus:ring-2 focus:ring-primary/50"
                                    placeholder="Masukkan nama pengguna Anda"
                                />
                            </div>
                            <InputError message={errors.name} className="mt-2" />
                        </label>

                        {/* EMAIL */}
                        <label className="flex flex-col w-full mb-4">
                            <p className="text-[#111418] dark:text-gray-300 font-medium pb-2">
                                Alamat Email
                            </p>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400" />
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="w-full h-14 rounded-lg border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#1a2937] pl-12 p-3 text-black dark:text-white focus:ring-2 focus:ring-primary/50"
                                    placeholder="contoh@email.com"
                                />
                            </div>
                            <InputError message={errors.email} className="mt-2" />
                        </label>

                        {/* PASSWORD */}
                        <label className="flex flex-col w-full mb-4">
                            <p className="text-[#111418] dark:text-gray-300 font-medium pb-2">
                                Kata Sandi
                            </p>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400" />
                                <input
                                    type="password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    className="w-full h-14 rounded-lg border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#1a2937] pl-12 pr-12 p-3 text-black dark:text-white focus:ring-2 focus:ring-primary/50"
                                    placeholder="Buat kata sandi"
                                />
                            </div>
                            <InputError message={errors.password} className="mt-2" />
                        </label>

                        {/* CONFIRM PASSWORD */}
                        <label className="flex flex-col w-full mb-4">
                            <p className="text-[#111418] dark:text-gray-300 font-medium pb-2">
                                Konfirmasi Kata Sandi
                            </p>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400" />
                                <input
                                    type="password"
                                    value={data.password_confirmation}
                                    onChange={(e) =>
                                        setData('password_confirmation', e.target.value)
                                    }
                                    className="w-full h-14 rounded-lg border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-[#1a2937] pl-12 pr-12 p-3 text-black dark:text-white focus:ring-2 focus:ring-primary/50"
                                    placeholder="Ulangi kata sandi"
                                />
                            </div>
                            <InputError message={errors.password_confirmation} className="mt-2" />
                        </label>

                        {/* SUBMIT */}
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full h-14 rounded-lg bg-primary text-white font-semibold mt-6 hover:bg-primary/90 transition"
                        >
                            Daftar
                        </button>

                        {/* LOGIN LINK */}
                        <p className="text-gray-500 dark:text-gray-400 text-center mt-8 text-sm">
                            Sudah punya akun?{' '}
                            <Link
                                href={route('login')}
                                className="font-semibold text-primary underline"
                            >
                                Masuk di sini
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
