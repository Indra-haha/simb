import { Head, Link, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import Checkbox from '@/Components/Checkbox';
import { FormEventHandler } from 'react';

export default function Login({ status, canResetPassword }: { status?: string; canResetPassword: boolean }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Masuk" />

            <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark p-4">
                <form
                    onSubmit={submit}
                    className="w-full max-w-md mt-20 sm:mt-28"
                >
                    <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-background-dark sm:p-8">
                        <h1 className="text-black dark:text-white text-[32px] font-bold pb-2 pt-4">
                            Selamat Datang Kembali
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 pb-6">
                            Masuk ke akun Anda untuk melanjutkan.
                        </p>

                        {/* EMAIL */}
                        <label className="flex flex-col w-full mb-4">
                            <p className="text-black dark:text-gray-300 font-medium pb-2">
                                Alamat Email
                            </p>
                            <div className="relative">

                                {/* MAIL ICON */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.8}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>

                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData('email', e.target.value)
                                    }
                                    className="w-full h-14 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a2937] pl-12 p-3 text-black dark:text-white focus:ring-2 focus:ring-primary/50"
                                    placeholder="contoh@email.com"
                                />
                            </div>
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </label>

                        {/* PASSWORD */}
                        <label className="flex flex-col w-full mb-4">
                            <div className="flex items-center justify-between pb-2">
                                <p className="text-black dark:text-gray-300 font-medium">
                                    Kata Sandi
                                </p>
                            </div>

                            <div className="relative">

                                {/* LOCK ICON */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.8}
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 10-8 0v4h8z"
                                    />
                                </svg>

                                <input
                                    type="password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData('password', e.target.value)
                                    }
                                    className="w-full h-14 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1a2937] pl-12 pr-12 p-3 text-black dark:text-white focus:ring-2 focus:ring-primary/50"
                                    placeholder="Masukkan kata sandi Anda"
                                />
                            </div>

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </label>

                        {/* REMEMBER ME */}
                        <label className="flex items-center mt-2">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData('remember', e.target.checked)
                                }
                            />
                            <span className="ms-2 text-sm text-gray-600">
                                Ingat saya
                            </span>
                        </label>

                        {/* SUBMIT */}
                        <button
                            disabled={processing}
                            className="w-full h-14 mt-6 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition"
                        >
                            Masuk
                        </button>

                        <p className="text-gray-500 dark:text-gray-400 text-center mt-8 text-sm">
                            Belum punya akun?{' '}
                            <Link
                                href={route('register')}
                                className="text-primary underline font-semibold"
                            >
                                Daftar di sini
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
