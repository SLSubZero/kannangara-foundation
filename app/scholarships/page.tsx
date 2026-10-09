import Navbar from "../../components/Navbar";
import Link from "next/link";

const futureSections = [
  {
    number: "01",
    title: "ශිෂ්‍යත්ව වැඩසටහනේ ඉතිහාසය",
    text: "අතීතයේ පිරිනමා ඇති ශිෂ්‍යත්ව සහ ඒවාට අදාළ තොරතුරු නිල වශයෙන් සකස් කර ඉදිරියේදී මෙහි ඇතුළත් කෙරේ.",
  },
  {
    number: "02",
    title: "වැඩසටහනේ අරමුණ",
    text: "ශිෂ්‍යත්ව වැඩසටහනේ අරමුණ සහ පදනම මගින් ලබාදෙන අධ්‍යාපනික සහය පිළිබඳ නිල තොරතුරු පසුව ප්‍රකාශයට පත් කෙරේ.",
  },
  {
    number: "03",
    title: "සුදුසුකම් හා ප්‍රතිලාභ",
    text: "අදාළ සුදුසුකම්, ශිෂ්‍යත්ව ප්‍රතිලාභ සහ අනෙකුත් කොන්දේසි නිල තොරතුරු තහවුරු කිරීමෙන් පසු මෙහි දක්වනු ඇත.",
  },
  {
    number: "04",
    title: "අයදුම් කිරීමේ ක්‍රමය",
    text: "අයදුම්පත්, අවශ්‍ය ලේඛන සහ අයදුම් කිරීමේ ක්‍රමය පිළිබඳ නිල උපදෙස් ඉදිරියේදී මෙම පිටුවට එක් කෙරේ.",
  },
];

export default function ScholarshipsPage() {
  return (
    <main className="min-h-screen bg-[#faf8f3] text-slate-900">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#b08a57]/15 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
              Scholarship Programme
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#5b1823] sm:text-5xl">
              ශිෂ්‍යත්ව
              <br />
              වැඩසටහන
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              කන්නන්ගර පදනමේ ශිෂ්‍යත්ව වැඩසටහන පිළිබඳ සම්පූර්ණ නිල
              තොරතුරු ඉදිරියේදී මෙම පිටුවට එක් කිරීමට නියමිතය.
            </p>
          </div>
        </div>
      </section>

      {/* Current status */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#b08a57]/25 bg-[#f5efe5] p-8 text-center sm:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
              Programme Information
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#5b1823] sm:text-4xl">
              ශිෂ්‍යත්ව වැඩසටහනේ තොරතුරු ඉදිරියේදී
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              දැනට මෙම පිටුව මූලික තොරතුරු සඳහා වෙන් කර ඇත. ශිෂ්‍යත්ව
              වැඩසටහනේ ඉතිහාසය සහ නිල තොරතුරු සම්පූර්ණයෙන් සකස් කිරීමෙන්
              පසු, විශේෂයෙන් ඉදිරි උත්සව කටයුතු අවසන් කිරීමෙන් පසුව,
              මෙම පිටුව යාවත්කාලීන කෙරේ.
            </p>
          </div>
        </div>
      </section>

      {/* Future information */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
              Coming Later
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
              ඉදිරියේදී එක් කිරීමට නියමිත තොරතුරු
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              නිල තොරතුරු තහවුරු කර සකස් කිරීමෙන් පසු මෙම කොටස් ක්‍රමයෙන්
              යාවත්කාලීන කෙරේ.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {futureSections.map((item) => (
              <article
                key={item.number}
                className="rounded-3xl border border-black/5 bg-[#faf8f3] p-7 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#6d1f2b] text-sm font-bold text-white">
                  {item.number}
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#5b1823]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Updates */}
      <section className="bg-[#5b1823] py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e5c990]">
            Kannangara Foundation
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            නිල තොරතුරු සඳහා අප සමඟ රැඳී සිටින්න
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
            ශිෂ්‍යත්ව වැඩසටහනට අදාළ නවතම නිල නිවේදන සහ පදනමේ අනෙකුත්
            වැඩසටහන් පිළිබඳ තොරතුරු වෙබ් අඩවිය හරහා ලබාගත හැක.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/news"
              className="rounded-xl bg-[#e5c990] px-7 py-3 font-semibold text-[#5b1823] transition hover:bg-white"
            >
              නවතම නිවේදන
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white/50 px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-[#5b1823]"
            >
              සම්බන්ධ වන්න
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden border-t border-[#b08a57]/20 bg-[#faf3e7] text-[#5b1823]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-start">
            <div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#6d1f2b] text-[#e5c990]">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 19.5V6.8A2.8 2.8 0 0 1 6.8 4H20v13.2H6.8A2.8 2.8 0 0 0 4 20.1" />
                    <path d="M4 19.5A2.8 2.8 0 0 1 6.8 17H20" />
                    <path d="M8 7.5h8M8 11h8" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-bold">කන්නන්ගර පදනම</p>
                  <p className="mt-1 max-w-xl text-sm leading-6 text-[#5b1823]/70">
                    ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ගුණානුස්මරණ පදනම
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
              <a
                href="mailto:kannangaramf@gmail.com"
                className="flex items-center gap-3 text-sm text-[#5b1823]/80 transition hover:text-[#6d1f2b]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
                kannangaramf@gmail.com
              </a>

              <a
                href="https://facebook.com/drcwwkannangaracf"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex items-center gap-3 text-sm text-[#5b1823]/80 transition hover:text-[#6d1f2b]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M13.4 21v-7h2.35l.35-2.72H13.4V9.54c0-.79.22-1.33 1.36-1.33h1.45V5.78c-.25-.03-1.1-.1-2.1-.1-2.08 0-3.5 1.27-3.5 3.6v2h-2.35V14h2.35v7h2.79Z" />
                </svg>
                Facebook
              </a>

              <a
                href="https://instagram.com/dr_cww_kannangara_cf"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex items-center gap-3 text-sm text-[#5b1823]/80 transition hover:text-[#6d1f2b]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.7" r="1" fill="currentColor" stroke="none" />
                </svg>
                Instagram
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-[#b08a57]/20 pt-5 text-xs text-[#5b1823]/55">
            © 2026 Dr. C.W.W. Kannangara Commemorative Foundation. All rights reserved.
          </div>
        </div>

        <div className="h-3 bg-[#6d1f2b]" />
        <div className="absolute bottom-0 left-0 h-3 w-1/3 bg-[#b08a57]" />
      </footer>
    </main>
  );
}
