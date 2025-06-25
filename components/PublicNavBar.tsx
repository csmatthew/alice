import Link from "next/link";
import Image from "next/image";

export default function PublicNavBar() {
    return (
        <nav
            className="
        flex justify-between 
        items-center fixed 
        z-50 w-full h-28 
        bh-gray-300 px-10 
        gap-4 shadow-2xl">
            {/* Logo */}
            <Link href="/login" className="flex items-center gap-1 hover:scale-150 duration-500">
            <Image
                src="/assets/logo.svg"
                width={60}
                height={60}
                alt="alice logo"
            />
            </Link>

        </nav>
    );
}
