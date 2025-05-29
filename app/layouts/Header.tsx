import { DarkThemeToggle } from "flowbite-react"
import LocaleToggle from "@/app/features/LocaleToggle"
import { getTranslations } from "next-intl/server"


const Header = async () => {
    const t = await getTranslations('header')

    return (
        <div className="header-shadow sticky top-0 left-0 w-full flex justify-between bg-white dark:bg-gray-800">
            <div className="flex justify-center items-center gap-4 p-4">
                <img
                    src="/mk-logo.webp"
                    alt="Mahibere Kidusan Logo"
                    className="h-12"
                />
                <h1 className="text-md text-center text-gray-800 font-regular dark:text-white">{t('title')}</h1>
            </div>
            <div className="flex justify-center items-center gap-4 p-4">
                <LocaleToggle />
                <DarkThemeToggle />
            </div>
        </div>
    )
}

export default Header