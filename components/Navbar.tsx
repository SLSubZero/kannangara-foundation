"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const sinhalaNav = [
  { label: "මුල් පිටුව", href: "/" },
  { label: "අප ගැන", href: "/about" },
  { label: "වැඩසටහන්", href: "/#programmes" },
  { label: "තරඟ", href: "/competitions" },
  { label: "ප්‍රතිඵල", href: "/results" },
  { label: "සාමාජිකත්වය", href: "/membership" },
  { label: "පුවත්", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "සම්බන්ධ වන්න", href: "/contact" },
];

const englishNav = [
  { label: "Home", href: "/en" },
  { label: "About", href: "/en/about" },
  { label: "Programmes", href: "/en#programmes" },
  { label: "Competitions", href: "/en/competitions" },
  { label: "Results", href: "/en/results" },
  { label: "Membership", href: "/en/membership" },
  { label: "News", href: "/en/news" },
  { label: "Gallery", href: "/en/gallery" },
  { label: "Contact", href: "/en/contact" },
];

function getLanguagePath(pathname: string, target: "si" | "en") {
  const cleanPath = pathname || "/";
  const basePath = cleanPath === "/" ? "/" : cleanPath.replace(/^\/en(?=\/|$)/, "") || "/";

  if (target === "en") {
    return basePath === "/" ? "/en" : `/en${basePath}`;
  }

  return basePath;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const navItems = isEnglish ? englishNav : sinhalaNav;
  const homeHref = isEnglish ? "/en" : "/";
  const languageHref = getLanguagePath(pathname, isEnglish ? "si" : "en");

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href={homeHref} onClick={closeMenu} className="flex min-w-0 items-center gap-3">
          <Image
            src="/foundation-logo.png"
            alt="Dr. C.W.W. Kannangara Commemorative Foundation"
            width={56}
            height={56}
            className="h-11 w-11 shrink-0 object-contain sm:h-12 sm:w-12"
            priority
          />
          <div className="min-w-0">
            <p className="text-base font-bold leading-tight text-[#6d1f2b] sm:text-lg">
              {isEnglish ? "Kannangara Foundation" : "කන්නන්ගර පදනම"}
            </p>
            <p className="hidden max-w-[320px] text-[11px] leading-4 text-slate-500 sm:block">
              {isEnglish
                ? "Dr. C.W.W. Kannangara Commemorative Foundation"
                : "ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ගුණානුස්මරණ පදනම"}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-4 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-[#6d1f2b]"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href={languageHref}
            className="ml-1 inline-flex items-center gap-1 rounded-full border border-[#6d1f2b]/20 bg-[#f7f1e8] px-3 py-1.5 text-xs font-bold text-[#6d1f2b] transition hover:border-[#6d1f2b]/40"
            aria-label={isEnglish ? "Switch to Sinhala" : "Switch to English"}
          >
            <span className={!isEnglish ? "text-[#6d1f2b]" : "text-slate-500"}>සිංහල</span>
            <span className="text-slate-300">|</span>
            <span className={isEnglish ? "text-[#6d1f2b]" : "text-slate-500"}>English</span>
          </Link>
        </nav>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-[#6d1f2b] transition hover:bg-[#f7f1e8] xl:hidden"
        >
          <span className="text-2xl leading-none">{isOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-black/5 bg-white xl:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="border-b border-slate-100 px-1 py-3.5 text-sm font-medium text-slate-700 transition hover:text-[#6d1f2b]"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href={languageHref}
                onClick={closeMenu}
                className="mt-3 rounded-xl border border-[#6d1f2b]/20 bg-[#f7f1e8] px-5 py-3 text-center text-sm font-bold text-[#6d1f2b]"
              >
                {isEnglish ? "සිංහලට මාරු වන්න" : "Switch to English"}
              </Link>

              <Link
                href={isEnglish ? "/en/membership" : "/membership"}
                onClick={closeMenu}
                className="mt-3 rounded-xl border border-[#6d1f2b] px-5 py-3 text-center text-sm font-semibold text-[#6d1f2b]"
              >
                {isEnglish ? "Become a Member" : "සාමාජිකයෙකු වන්න"}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
