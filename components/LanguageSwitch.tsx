'use client';

import { useState } from 'react';
import Image from 'next/image';

type Lang = 'en' | 'ar';

export default function LanguageSwitch() {
    const [lang, setLang] = useState<Lang>('en');

    const toggleLang = () => {
        setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
        document.getElementById('langswitch')?.style.setProperty('cursor', 'not-allowed');
        setTimeout(() => {
            document.getElementById('langswitch')?.style.setProperty('cursor', 'pointer');
        }, 500);
    };

    return (
        <button
            onClick={toggleLang}
            id='langswitch'
            aria-label="Change language"
            className={`
                relative w-15 h-8 rounded-full p-1
                transition-all duration-300 bg-[#FCC7E0] cursor-pointer
            `}
        >
            {/* Sliding knob */}
            <span
                className={`
                    absolute top-1 left-1 w-6 h-6 rounded-full bg-transparent
                    flex items-center justify-center
                    transition-transform duration-300
                    ${lang === 'ar' ? 'translate-x-7' : ''}
                `}
            >
                <Image
                    src='/Subtract.png'
                    alt="Language icon"
                    width={18}
                    height={18}
                    priority
                />
            </span>
        </button>
    );
}
