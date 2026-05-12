import { Link } from '@inertiajs/react';
import {
    Instagram,
    Facebook,
    Twitter,
    Youtube,
    Mail,
    MapPin,
    Phone,
    ArrowRight,
} from 'lucide-react';
import React from 'react';

export default function Footer() {
    return (
        <footer className="border-t border-[#e7e2de] bg-[#f9f9f9] pt-14 pb-8 text-[#232323] md:pt-20">
            {/* Top Section: Newsletter & Brand */}
            <div className="mx-auto mb-16 max-w-[1500px] px-6 md:px-10">
                <div className="grid grid-cols-1 items-center gap-12 border-b border-[#e7e2de] pb-12 lg:grid-cols-2">
                    <div className="flex flex-col">
                        <div className="mb-4 flex items-center gap-4">
                            <img
                                src="/logo-shay/anemi-black.webp"
                                alt="Anemi"
                                className="h-16 w-auto object-contain md:h-20"
                            />
                            <span className="text-xl font-semibold tracking-[0.3em] text-[#151515] uppercase md:text-2xl">
                                Anemi Official
                            </span>
                        </div>
                        <p className="max-w-md text-xs leading-relaxed text-[#6f6f6f] md:text-sm">
                            Menghadirkan modest fashion dengan elegansi dan
                            kelembutan. Temukan identitas terbaikmu lewat
                            koleksi eksklusif kami.
                        </p>
                    </div>

                    <div className="flex flex-col lg:items-end">
                        <h3 className="mb-4 text-xs font-semibold tracking-[0.2em] text-[#151515] uppercase">
                            Berlangganan
                        </h3>
                        <p className="mb-5 max-w-md text-sm leading-6 text-[#6f6f6f] lg:text-right">
                            Untuk menerima pembaruan, akses ke penawaran
                            eksklusif dan lebih.
                        </p>
                        <div className="group flex w-full max-w-md border-b border-[#151515] pb-2 transition-colors focus-within:border-[#a55353]">
                            <input
                                type="email"
                                placeholder="Masukkan alamat email"
                                className="flex-1 bg-transparent text-xs tracking-wider text-[#151515] placeholder-[#8b827c] outline-none md:text-sm"
                            />
                            <button className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#151515] uppercase transition-colors hover:text-[#a55353]">
                                Berlangganan <ArrowRight size={14} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle Section: Links */}
            <div className="mx-auto max-w-[1500px] px-6 md:px-10">
                <div className="mb-16 grid grid-cols-1 gap-12 text-[11px] font-medium tracking-[0.12em] md:grid-cols-2 lg:grid-cols-4">
                    {/* Contact Us */}
                    <div>
                        <h3 className="mb-6 text-xs font-semibold tracking-[0.2em] text-[#151515] uppercase">
                            Hubungi Kami
                        </h3>
                        <ul className="space-y-4 text-[#6f6f6f]">
                            <li className="group flex cursor-pointer items-start gap-3 transition-colors hover:text-[#151515]">
                                <MapPin
                                    size={16}
                                    className="mt-0.5 shrink-0 transition-colors group-hover:text-accent"
                                />
                                <span className="leading-relaxed">
                                    Jl. Raya Surabaya No. 123,
                                    <br />
                                    Surabaya, 12345
                                </span>
                            </li>
                            <li className="group flex cursor-pointer items-center gap-3 transition-colors hover:text-[#151515]">
                                <Phone
                                    size={16}
                                    className="shrink-0 transition-colors group-hover:text-accent"
                                />
                                <span>+62 812 3456 7890</span>
                            </li>
                            <li className="group flex cursor-pointer items-center gap-3 transition-colors hover:text-[#151515]">
                                <Mail
                                    size={16}
                                    className="shrink-0 transition-colors group-hover:text-accent"
                                />
                                <span>hello@Anemi.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Care */}
                    <div>
                        <h3 className="mb-6 text-xs font-semibold tracking-[0.2em] text-[#151515] uppercase">
                            Layanan Pelanggan
                        </h3>
                        <ul className="space-y-4 text-[#6f6f6f]">
                            <li>
                                <Link
                                    href="/list"
                                    className="inline-block transition-transform hover:translate-x-1 hover:text-[#151515]"
                                >
                                    Cara Membeli
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/checkout"
                                    className="inline-block transition-transform hover:translate-x-1 hover:text-[#151515]"
                                >
                                    Informasi Pembayaran
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/shipping-policy"
                                    className="inline-block transition-transform hover:translate-x-1 hover:text-[#151515]"
                                >
                                    Informasi Pengiriman
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/no-return-policy"
                                    className="inline-block transition-transform hover:translate-x-1 hover:text-[#151515]"
                                >
                                    Retur & Penukaran
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/my-order"
                                    className="inline-block transition-transform hover:translate-x-1 hover:text-[#151515]"
                                >
                                    Lacak Pesanan
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/notifications"
                                    className="inline-block transition-transform hover:translate-x-1 hover:text-[#151515]"
                                >
                                    Pertanyaan Umum
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Explore */}
                    <div>
                        <h3 className="mb-6 text-xs font-semibold tracking-[0.2em] text-[#151515] uppercase">
                            Informasi
                        </h3>
                        <ul className="space-y-4 text-[#6f6f6f]">
                            <li>
                                <Link
                                    href="/"
                                    className="inline-block transition-transform hover:translate-x-1 hover:text-[#151515]"
                                >
                                    Cerita Kami
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="inline-block transition-transform hover:translate-x-1 hover:text-[#151515]"
                                >
                                    Jurnal Kami
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/shipping-policy"
                                    className="inline-block transition-transform hover:translate-x-1 hover:text-[#151515]"
                                >
                                    Kebijakan Pengiriman
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/no-return-policy"
                                    className="inline-block transition-transform hover:translate-x-1 hover:text-[#151515]"
                                >
                                    Kebijakan Tanpa Retur
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms-conditions"
                                    className="inline-block transition-transform hover:translate-x-1 hover:text-[#151515]"
                                >
                                    Syarat & Ketentuan
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy-policy"
                                    className="inline-block transition-transform hover:translate-x-1 hover:text-[#151515]"
                                >
                                    Kebijakan Privasi
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Payment & Social */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h3 className="mb-6 text-xs font-semibold tracking-[0.2em] text-[#151515] uppercase">
                                Pembayaran Aman
                            </h3>
                            <div className="grid grid-cols-4 gap-2 opacity-80 transition-opacity hover:opacity-100">
                                {[
                                    'QRIS',
                                    'OVO',
                                    'Shopee',
                                    'Dana',
                                    'BNI',
                                    'Mandiri',
                                    'BCA',
                                    'BSI',
                                    'VISA',
                                    'JCB',
                                    'MasterCard',
                                ].map((method) => (
                                    <div
                                        key={method}
                                        className="flex h-8 cursor-default items-center justify-center border border-[#e7e2de] bg-white text-[7px] font-semibold tracking-wider text-[#6f6f6f] uppercase transition-colors hover:border-[#151515] hover:text-[#151515]"
                                    >
                                        {method}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col items-center justify-between border-t border-[#e7e2de] pt-8 text-[10px] tracking-[0.15em] text-[#6f6f6f] md:flex-row">
                    <p className="mb-4 md:mb-0">
                        © {new Date().getFullYear()} Anemi. All Rights
                        Reserved.
                    </p>

                    <div className="flex items-center space-x-6">
                        <button
                            type="button"
                            className="transition-all duration-300 hover:-translate-y-1 hover:text-accent"
                        >
                            <Instagram size={18} strokeWidth={1.5} />
                        </button>
                        <button
                            type="button"
                            className="transition-all duration-300 hover:-translate-y-1 hover:text-accent"
                        >
                            <Facebook size={18} strokeWidth={1.5} />
                        </button>
                        <button
                            type="button"
                            className="transition-all duration-300 hover:-translate-y-1 hover:text-accent"
                        >
                            <Twitter size={18} strokeWidth={1.5} />
                        </button>
                        <button
                            type="button"
                            className="transition-all duration-300 hover:-translate-y-1 hover:text-accent"
                        >
                            <Youtube size={18} strokeWidth={1.5} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
