import { Link } from '@inertiajs/react';
import { Search, User, ShoppingBag, Heart, Menu } from 'lucide-react';

type NavbarCollection = {
    id: number;
    name: string;
    slug: string;
};

type NavbarProps = {
    cartCount?: number;
    collections?: NavbarCollection[];
};

export default function Navbar({
    cartCount = 0,
    collections = [],
}: NavbarProps) {
    const cartBadge = cartCount > 99 ? '99+' : String(cartCount);

    return (
        <nav className="sticky top-0 z-50 border-b border-[#e7e2de] bg-white">
            {/* Mobile View */}
            <div className="flex h-16 w-full items-center justify-between px-4 md:hidden">
                <button
                    type="button"
                    aria-label="Buka menu"
                    className="text-[#151515]"
                >
                    <Menu strokeWidth={1.4} size={22} />
                </button>
                <Link
                    href="/"
                    className="flex h-10 items-center overflow-visible"
                >
                    <img
                        src="/logo-shay/shayda-logo-text-hitam.png"
                        alt="Shayda"
                        className="h-12 w-auto object-contain"
                    />
                </Link>
                <div className="flex items-center gap-4 text-[#151515]">
                    <Heart
                        strokeWidth={1.5}
                        size={22}
                        className="cursor-pointer"
                    />
                </div>
            </div>

            {/* Desktop View (Keeping existing structure but restyled) */}
            <div className="hidden h-[76px] w-full items-center justify-between px-10 md:flex">
                <Link
                    href="/"
                    className="flex h-14 cursor-pointer items-center justify-center overflow-visible transition-opacity duration-300 hover:opacity-75"
                >
                    <img
                        src="/logo-shay/shayda-logo-text-hitam.png"
                        alt="Shayda"
                        className="h-16 w-auto object-contain"
                    />
                </Link>

                <div className="flex items-center gap-9 text-[12px] font-medium tracking-[0.12em] text-[#151515] uppercase">
                    <Link
                        href="/list"
                        className="border-b border-transparent pb-1 hover:border-[#151515]"
                    >
                        ALL PRODUCT
                    </Link>
                    {collections.map((collection) => (
                        <Link
                            key={collection.id}
                            href={`/list?collection=${encodeURIComponent(collection.slug)}`}
                            className="border-b border-transparent pb-1 hover:border-[#151515]"
                        >
                            {collection.name.toUpperCase()}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-6 text-[#151515]">
                    <Link href="/my-profile" aria-label="Buka profil">
                        <User
                            strokeWidth={1.4}
                            size={20}
                            className="cursor-pointer transition-opacity hover:opacity-60"
                        />
                    </Link>
                    <div className="relative">
                        <Link href="/my-cart" aria-label="Buka keranjang">
                            <ShoppingBag
                                strokeWidth={1.4}
                                size={20}
                                className="cursor-pointer transition-opacity hover:opacity-60"
                            />
                        </Link>
                        {cartCount > 0 && (
                            <span className="absolute -top-1.5 -right-1.5 flex h-4 min-w-4 items-center justify-center bg-[#151515] px-1 text-[9px] font-bold text-white">
                                {cartBadge}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
