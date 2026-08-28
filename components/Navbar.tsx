"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          <Image
            src="/foundation-logo.png"
            alt="ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ගුණානුස්මරණ පදනම"
            width={56}
            height={56}
            className="h-11 w-11 object-contain sm:h-12 sm:w-12"
            priority
          />

          <div>
            <p className="text-base font-bold leading-tight text-[#6d1f2b] sm:text-lg">
              කන්නන්ගර පදනම
            </p>

            <p className="hidden max-w-[320px] text-[11px] leading-4 text-slate-500 sm:block">
              ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ගුණානුස්මරණ පදනම
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-5 xl:flex">
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
            href="/competitions"
            className="rounded-xl bg-[#6d1f2b] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#571822]"
          >
            තරඟ සඳහා අයදුම් කරන්න
          </Link>
        </nav>

        {/* Tablet / Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-[#6d1f2b] transition hover:bg-[#f7f1e8] xl:hidden"
        >
          <span className="text-2xl leading-none">
            {isOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile / Tablet Navigation */}
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
                href="/competitions"
                onClick={closeMenu}
                className="mt-4 rounded-xl bg-[#6d1f2b] px-5 py-3 text-center text-sm font-semibold text-white"
              >
                තරඟ සඳහා අයදුම් කරන්න
              </Link>

              <Link
                href="/membership"
                onClick={closeMenu}
                className="mt-3 rounded-xl border border-[#6d1f2b] px-5 py-3 text-center text-sm font-semibold text-[#6d1f2b]"
              >
                සාමාජිකයෙකු වන්න
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}