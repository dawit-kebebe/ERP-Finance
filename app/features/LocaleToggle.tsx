'use client';

import { GrLanguage } from "react-icons/gr";
import { usePathname } from "@/i18n/navigation"; // Adjust the relative path if needed
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function LocaleToggle() {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();
    
    function handleLocaleToggle() {
        const newLocale = locale === 'en' ? 'am' : 'en';
        const newPath = (`/${newLocale}${pathname}`);
        console.log(newPath)
        router.push(newPath);
    }

    return (
        <button
            className="flex items-center justify-center gap-1 rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            onClick={handleLocaleToggle}
        >
            <span>{locale === 'en' ? 'En' : 'አማ'}</span> <GrLanguage />
        </button>
    );
}
