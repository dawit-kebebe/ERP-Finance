import "@/app/globals.css";
import { ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from '@/i18n/routing';

type Props = Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default async function RootLayout({
	children,
	params
}: Props) {
	// const messages = await getMessages();
	// const currentLocale = await getLocale();
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	return (
		<html lang={locale} suppressHydrationWarning>
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
				<ThemeModeScript />
			</head>
			<body>
				<NextIntlClientProvider>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
