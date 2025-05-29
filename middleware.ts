// import { NextRequest, NextResponse } from "next/server";

// let locales = ["en", "am"];

// function getLocale(request: { headers: { get(name: string): string | null } }): string {
//   const acceptLanguage = request.headers.get("accept-language");
//   if (acceptLanguage) {
//     const preferredLocales = acceptLanguage
//       .split(",")
//       .map((lang) => lang.split(";")[0].trim());
//     for (const preferred of preferredLocales) {
//       if (locales.includes(preferred)) {
//         return preferred;
//       }
//     }
//   }
//   return locales[0];
// }

// export function middleware(request: NextRequest): NextResponse {
//   const { pathname } = request.nextUrl;

//   // Skip static files (e.g. assets, icons, .css, .js)
//   if (/\.\w+$/.test(pathname) || pathname.startsWith("/_next/")) {
//     return NextResponse.next();
//   }

//   const pathnameHasLocale = locales.some(
//     (locale) =>
//       pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
//   );
//   console.log(pathnameHasLocale);

//   // Redirect root '/' to default locale '/en'
//   if (pathname === "/") {
//     const url = request.nextUrl.clone();
//     url.pathname = "/en";
//     return NextResponse.redirect(url);
//   }

//   // If the path already has a locale, continue with the request.
//   if (pathnameHasLocale) return NextResponse.next();

//   // Redirect if there is no locale
//   const locale = getLocale(request);
//   const url = request.nextUrl.clone();
//   url.pathname = `/${locale}${pathname}`;
//   return NextResponse.redirect(url);
// }

// export const config = {
//   matcher: [
//     // Skip all internal paths (_next)
//     // "/((?!_next).*)",
//     // Optional: only run on root (/) URL
//     // "/"
//     "/((?!api|_next/static|_next/image|favicon.ico).*)"
//   ],
// };

import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};