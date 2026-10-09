import {
  BookOpen,
  Building2,
  GraduationCap,
  Mail,
} from "lucide-react";

const advisors = [
  {
    title: "ගෞරව ශාස්ත්‍රවේදී පූජ්‍ය අලුත්ගම සුමනජෝති ස්වාමීන් වහන්සේ",
    role: "හල්වල පවුරපාත විහාරාධිපති — පිටිගල ගංගාතිලක පිරිවෙනේ ආචාර්ය",
  },
  {
    title: "වලල්ලාවිට ප්‍රාදේශීය ලේකම්",
    role: "පදනමේ අනුශාසක",
  },
  {
    title: "මතුගම කලාප අධ්‍යාපන අධ්‍යක්ෂ",
    role: "පදනමේ අනුශාසක",
  },
];

const officers = [
  { role: "සභාපති", name: "විමල් වික්‍රමතන්ත්‍රී මහතා" },
  { role: "ලේකම්", name: "අනුපම කන්නන්ගර මහතා" },
  { role: "භාණ්ඩාගාරික", name: "ලාල් කන්නන්ගර මහතා" },
  { role: "සංස්කාරක", name: "අංජානි මිනිරංගි මිය" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f8f3e8] text-[#321f1f]">
      <section className="relative overflow-hidden border-b border-[#d8bd86] bg-[#fffaf1]">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.28em] text-[#a77b3f]">
            ABOUT US
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-[#651f2b] md:text-5xl">
            අප ගැන
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#654b4b] md:text-lg">
            ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ගුණානුස්මරණ පදනම පිළිබඳ
            හැඳින්වීම, ඉතිහාසය, වැඩසටහන් සහ පදනමේ වත්මන් නිලධාරී මණ්ඩලය.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-[#a77b3f]">
              FOUNDATION
            </p>
            <h2 className="text-3xl font-bold text-[#651f2b]">
              ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ගුණානුස්මරණ පදනම
            </h2>
            <div className="mt-6 space-y-5 text-[16px] leading-8 text-[#574343]">
              <p>
                විසිවන සියවසේ මෙරට පහළ වූ අද්විතීය යුග පුරුෂයෙකු වූ,
                ශ්‍රී ලංකාවට නිදහස් අධ්‍යාපනය හඳුන්වා දුන් ආචාර්ය
                සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ශ්‍රීමතාණන්ගේ සේවය හා
                දර්ශනය අනාගත පරපුර වෙත දායාද කිරීම පදනමේ ප්‍රධාන
                අරමුණකි.
              </p>
              <p>
                පදනම 2012 වර්ෂයේදී ආරම්භ වූ අතර, අධ්‍යාපනික, සාහිත්‍ය,
                නිර්මාණාත්මක හා දැනුම් වර්ධන වැඩසටහන් ඔස්සේ දරු පරපුරේ
                කුසලතා වර්ධනය කිරීමට කටයුතු කරයි.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-[#dec99e] bg-white p-8 shadow-sm">
            <div className="mb-5 inline-flex rounded-2xl bg-[#f7ead1] p-4 text-[#7a2634]">
              <BookOpen size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#651f2b]">අපගේ ප්‍රධාන අරමුණ</h3>
            <p className="mt-4 text-lg font-semibold leading-8 text-[#4f3535]">
              “කන්නන්ගර ශ්‍රීමතාණන්ගේ අරමුණ වූ බුද්ධිමත් කුසලතා පිරි
              දරුපිරිසක් බිහිකිරීම.”
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#dec99e] bg-[#fffaf1]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold tracking-[0.2em] text-[#a77b3f]">
              LEADERSHIP
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#651f2b]">
              පදනමේ නිලධාරී මණ්ඩලය
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[#6a5252]">
              දැනට පදනම වෙනුවෙන් සඳහන් කර ඇති නිලධාරී මණ්ඩලය
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="mx-auto max-w-2xl rounded-3xl border-2 border-[#b68a4b] bg-[#651f2b] px-7 py-8 text-center text-white shadow-lg">
              <p className="text-sm font-semibold tracking-[0.15em] text-[#e9ce9b]">
                උත්තරීතර අනුශාසක
              </p>
              <h3 className="mt-3 text-xl font-bold md:text-2xl">
                අතිපූජ්‍ය ඉත්තෑපානේ ධම්මාලංකාර මහා නාහිමි
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#f5e8d0]">
                කෝට්ටේ ශ්‍රී කල්‍යාණී සාමග්‍රි ධර්ම මහා සංඝ සභාවේ
                මහා නායක හා ශ්‍රී ජයවර්ධනපුර විශ්ව විද්‍යාලයේ කුලපති
              </p>
            </div>

            <div className="my-8 flex justify-center">
              <div className="h-10 w-px bg-[#b68a4b]" />
            </div>

            <div className="mb-3 text-center text-sm font-bold tracking-[0.15em] text-[#8d6635]">
              අනුශාසකවරු
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {advisors.map((advisor) => (
                <div
                  key={advisor.title}
                  className="rounded-2xl border border-[#dec99e] bg-white p-6 text-center shadow-sm"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f7ead1] text-[#7a2634]">
                    <GraduationCap size={22} />
                  </div>
                  <h3 className="text-base font-bold leading-7 text-[#651f2b]">
                    {advisor.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#665050]">
                    {advisor.role}
                  </p>
                </div>
              ))}
            </div>

            <div className="my-8 flex justify-center">
              <div className="h-10 w-px bg-[#b68a4b]" />
            </div>

            <div className="mb-3 text-center text-sm font-bold tracking-[0.15em] text-[#8d6635]">
              නිලධාරී මණ්ඩලය
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {officers.map((officer) => (
                <div
                  key={officer.role}
                  className="rounded-2xl border border-[#dec99e] bg-white p-6 text-center shadow-sm"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#f7ead1] text-[#7a2634]">
                    <Building2 size={21} />
                  </div>
                  <p className="text-sm font-bold tracking-wide text-[#a77b3f]">
                    {officer.role}
                  </p>
                  <h3 className="mt-2 text-base font-bold leading-7 text-[#651f2b]">
                    {officer.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-5 md:grid-cols-5">
          {[
            ["2012", "පදනම ආරම්භ කිරීම"],
            ["2013", "කන්නන්ගර ශ්‍රීමතාණන්ගේ පිළිරුව ස්ථාපනය"],
            ["2019", "විවිධ අධ්‍යාපනික හා නිර්මාණාත්මක තරග ආරම්භ කිරීම"],
            ["2020–2021", "කොවිඩ්-19 වසංගතය හේතුවෙන් කටයුතු තාවකාලිකව නතර වීම"],
            ["2022–2023", "සැමරුම් හා තරග වැඩසටහන් නැවත ක්‍රියාත්මක කිරීම"],
          ].map(([year, text]) => (
            <div
              key={year}
              className="rounded-2xl border border-[#dec99e] bg-white p-5 shadow-sm"
            >
              <p className="text-2xl font-bold text-[#a77b3f]">{year}</p>
              <p className="mt-2 text-sm leading-6 text-[#5d4848]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#dec99e] bg-[#f2e6d1]">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <BookOpen className="text-[#7a2634]" size={30} />
              <p className="mt-3 font-bold text-[#651f2b]">
                ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ගුණානුස්මරණ පදනම
              </p>
            </div>
            <div>
              <p className="flex items-center gap-2 text-sm text-[#5d4848]">
                <Mail size={18} className="text-[#7a2634]" />
                kannangaramf@gmail.com
              </p>
            </div>
            <div className="flex gap-4 md:justify-end">
              <a
                href="https://facebook.com/drcwwkannangaracf"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-[#7a2634]"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-[22px] w-[22px] fill-current"
                >
                  <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.6-1.6h1.7V3.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.3H8v3h2.6v8h2.9Z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/dr_cww_kannangara_cf"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-[#7a2634]"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-[22px] w-[22px] fill-none stroke-current"
                  strokeWidth="1.8"
                >
                  <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.4" cy="6.7" r="1" className="fill-current stroke-none" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 h-1 rounded-full bg-gradient-to-r from-[#7a2634] via-[#b68a4b] to-[#7a2634]" />
        </div>
      </footer>
    </main>
  );
}
