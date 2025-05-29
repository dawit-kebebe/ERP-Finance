import LoginLayout from "@/app/layouts/Login";
import Image from "next/image";
import LoginForm from "@/app/features/LoginForm";
import { use } from "react";
import { getTranslations } from "next-intl/server";
// import { getLocale } from "./locales/locale";

type Props = Readonly<{
	params: Promise<{ locale: 'en' | 'am' }>;
}>


export default async function Home({ params }: Props) {
	const t = await getTranslations('landing');

	return (
		// <LoginLayout title={t('header.title')} copyright={t('footer.copyright')}>
		<LoginLayout>
			<div className="w-full my-auto grid grid-cols-2 gap-4 justify-center items-center px-16">
				<div className="flex flex-col items-center justify-center text-center">
					<Image
						src="/mk-logo.webp"
						alt="Mahibere Kidusan Logo"
						className="h-24"
						width={100}
						height={100}
					/>
					<h1 className="text-gray-800 text-2xl font-regular dark:text-white">
						{t('title')}
					</h1>
					<h2 className="text-gray-800 text-lg font-light dark:text-white">
						{t('description')}
					</h2>
				</div>
				<div className="w-full flex justify-center items-center">
					<LoginForm />
				</div>
			</div>
		</LoginLayout>
	);
}
