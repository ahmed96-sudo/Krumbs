'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitch() {
    const pathname = usePathname();
    const router = useRouter();

    const isEn = pathname.startsWith('/en');

    const toggleLang = () => {
        if (isEn) {
            // Go back to Arabic
            const newPath = pathname.replace(/^\/en/, '') || '/';
            router.push(newPath);
        } else {
            // Go to English
            router.push(`/en${pathname}`);
        }
    };

    return (
        <button
            onClick={toggleLang}
            aria-label="Change language"
            className="relative w-15 h-8 rounded-full p-1 transition-all duration-300 bg-[#FCC7E0] cursor-pointer"
        >
            {/* Sliding knob */}
            <span
                className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-transparent flex items-center justify-center transition-transform duration-300 ${isEn ? 'translate-x-7' : ''}`}
            >
                <Image
                    src="/Subtract.png"
                    alt="Language icon"
                    width={18}
                    height={18}
                    priority
                />
            </span>
        </button>
    );
}
