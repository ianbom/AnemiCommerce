import { Head, Link } from '@inertiajs/react';
import {
    User,
    ShoppingBag,
    MapPin,
    Bell,
    LogOut,
    Heart,
} from 'lucide-react';
import React from 'react';
import ShopLayout from '@/layouts/shop-layout';

const SIDEBAR_NAV = [
    {
        id: 'my-profile',
        href: '/my-profile',
        label: 'Pengaturan Profil',
        mobileLabel: 'Profil',
        icon: User,
    },
    {
        id: 'list-order',
        href: '/my-order',
        label: 'Pesanan Saya',
        mobileLabel: 'Pesanan',
        icon: ShoppingBag,
    },
    {
        id: 'address',
        href: '/address',
        label: 'Buku Alamat',
        mobileLabel: 'Alamat',
        icon: MapPin,
    },
    {
        id: 'wishlist',
        href: '/wishlist',
        label: 'Wishlist Saya',
        mobileLabel: 'Wishlist',
        icon: Heart,
    },
    {
        id: 'notifications',
        href: '/notifications',
        label: 'Notifikasi',
        mobileLabel: 'Notifikasi',
        icon: Bell,
    },
];

interface Breadcrumb {
    label: string;
    href?: string;
}

interface ProfileLayoutProps {
    children: React.ReactNode;
    title: React.ReactNode | string;
    pageTitle: string; // Used for <Head>
    subtitle: string;
    activePath: string; // Should match one of the SIDEBAR_NAV ids
    breadcrumbs: Breadcrumb[];
}

export default function ProfileLayout({
    children,
    title,
    pageTitle,
    subtitle,
    activePath,
    breadcrumbs,
}: ProfileLayoutProps) {
    return (
        <ShopLayout>
            <Head title={`${pageTitle} - Shayda`} />

            {/* --- Hero / Header Section --- */}
            <div className="relative flex h-[200px] w-full items-center overflow-hidden bg-[#EADFD2] md:h-[280px]">
                {/* Background Image / Pattern */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/img/ike-ellyana-2F70bGqQVa4-unsplash.webp"
                        alt="Latar hero"
                        className="h-full w-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FFFDF8] via-[#FFFDF8]/90 to-transparent"></div>
                </div>

                <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-16">
                    <div className="mb-4 flex items-center space-x-2 text-[10px] font-medium tracking-wide text-[#7A6A5D] md:text-xs">
                        {breadcrumbs.map((bc, idx) => (
                            <React.Fragment key={idx}>
                                {bc.href ? (
                                    <>
                                        <Link
                                            href={bc.href}
                                            className="transition-colors hover:text-black"
                                        >
                                            {bc.label}
                                        </Link>
                                        <span>/</span>
                                    </>
                                ) : (
                                    <span className="text-[#2F241D]">
                                        {bc.label}
                                    </span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                    <h1 className="mb-2 font-serif text-3xl text-[#B98B63] italic md:text-4xl lg:text-5xl">
                        {title}
                    </h1>
                    <p className="text-xs text-[#7A6A5D] md:text-sm">
                        {subtitle}
                    </p>
                </div>
            </div>

            <main className="relative z-20 mx-auto -mt-10 min-h-screen max-w-[1440px] bg-[#FFFDF8] px-6 py-8 md:px-12 md:py-12 lg:px-16">
                <div className="flex flex-col gap-8 lg:flex-row">
                    {/* --- Sidebar (Desktop) / Horizontal Nav (Mobile) --- */}
                    <div className="w-full flex-shrink-0 lg:w-[240px]">
                        {/* Mobile Horizontal Nav */}
                        <div className="hide-scrollbar mb-8 flex gap-6 overflow-x-auto border-b border-[#EADFD2] lg:hidden">
                            {SIDEBAR_NAV.map((item) => {
                                const Icon = item.icon;
                                const isActive = item.id === activePath;

                                return (
                                    <Link
                                        key={item.id}
                                        href={item.href}
                                        className={`flex min-w-fit items-center gap-2 border-b-2 px-1 pb-3 text-[11px] font-semibold tracking-wide transition-colors ${isActive ? 'border-[#B98B63] text-[#B98B63]' : 'border-transparent text-[#7A6A5D] hover:border-[#D1B08A] hover:text-[#B98B63]'}`}
                                    >
                                        <Icon size={15} strokeWidth={1.8} />
                                        <span>{item.mobileLabel || item.label}</span>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Desktop Sidebar Nav */}
                        <div className="mb-6 hidden border-l border-[#EADFD2] pl-5 lg:block">
                            <p className="mb-5 text-[10px] font-bold tracking-[0.24em] text-[#D1B08A] uppercase">
                                Akun Saya
                            </p>
                            {SIDEBAR_NAV.map((item) => {
                                const Icon = item.icon;
                                const isActive = item.id === activePath;

                                return (
                                    <Link
                                        key={item.id}
                                        href={item.href}
                                        className={`group relative mb-1 flex items-center gap-3 py-2.5 text-[13px] transition-colors ${isActive ? 'font-semibold text-[#B98B63]' : 'text-[#7A6A5D] hover:text-[#B98B63]'}`}
                                    >
                                        <span
                                            className={`absolute top-1/2 -left-5 h-5 w-px -translate-y-1/2 transition-colors ${isActive ? 'bg-[#B98B63]' : 'bg-transparent group-hover:bg-[#D1B08A]'}`}
                                        />
                                        <Icon
                                            size={16}
                                            strokeWidth={isActive ? 2.2 : 1.8}
                                        />
                                        <span>{item.label}</span>
                                    </Link>
                                );
                            })}
                            <div className="my-4 h-px bg-[#EADFD2]"></div>
                            <Link
                                href="/logout"
                                method="post"
                                as="button"
                                className="group relative flex w-full items-center gap-3 py-2.5 text-[13px] text-[#7A6A5D] transition-colors hover:text-red-600"
                            >
                                <span className="absolute top-1/2 -left-5 h-5 w-px -translate-y-1/2 bg-transparent transition-colors group-hover:bg-red-300" />
                                <LogOut size={16} strokeWidth={1.8} />
                                <span>Keluar</span>
                            </Link>
                        </div>
                    </div>

                    {/* --- Main Content Area --- */}
                    <div className="w-full max-w-full flex-1 space-y-6 overflow-hidden">
                        {children}
                    </div>
                </div>
            </main>
        </ShopLayout>
    );
}
