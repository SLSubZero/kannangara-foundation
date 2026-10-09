import Navbar from "../../components/Navbar";
import Link from "next/link";

const competitions2026 = [
  { title: "චිත්‍ර තරඟාවලිය", subtitle: "ප්‍රාථමික", description: "දරු දැරියන්ගේ නිර්මාණශීලී හැකියාවන් සහ කලා කුසලතා දිරිගැන්වීම සඳහා පැවති දීප ව්‍යාප්ත චිත්‍ර තරඟාවලියේ ප්‍රාථමික අංශය.", href: "/competitions/2026-art", icon: "✦" },
  { title: "චිත්‍ර තරඟාවලිය", subtitle: "පශ්චාත් ප්‍රාථමික", description: "දරු දැරියන්ගේ නිර්මාණශීලී හැකියාවන් සහ කලා කුසලතා දිරිගැන්වීම සඳහා පැවති දීප ව්‍යාප්ත චිත්‍ර තරඟාවලියේ පශ්චාත් ප්‍රාථමික අංශය.", href: "/competitions/2026-art", icon: "✦" },
  { title: "රචනා තරඟාවලිය", subtitle: "කණිෂ්ඨ", description: "භාෂා හැකියාව, අදහස් ප්‍රකාශනය සහ නිර්මාණාත්මක චින්තනය දිරිගැන්වීම සඳහා පැවති රචනා තරඟාවලියේ කණිෂ්ඨ අංශය.", href: "/results", icon: "✎" },
  { title: "රචනා තරඟාවලිය", subtitle: "ද්විතීක", description: "භාෂා හැකියාව, අදහස් ප්‍රකාශනය සහ නිර්මාණාත්මක චින්තනය දිරිගැන්වීම සඳහා පැවති රචනා තරඟාවලියේ ද්විතීක අංශය.", href: "/results", icon: "✎" },
  { title: "දැනුම මිනුම තරඟාවලිය", subtitle: "ප්‍රාථමික", description: "පාසල් සිසුන්ගේ දැනුම හා බුද්ධිමය හැකියාවන් වර්ධනය කිරීම අරමුණු කරගත් දැනුම මිනුම තරඟාවලියේ ප්‍රාථමික අංශය.", href: "/results", icon: "?" },
  { title: "දැනුම මිනුම තරඟාවලිය", subtitle: "ද්විතීක", description: "පාසල් සිසුන්ගේ දැනුම හා බුද්ධිමය හැකියාවන් වර්ධනය කිරීම අරමුණු කරගත් දැනුම මිනුම තරඟාවලියේ ද්විතීක අංශය.", href: "/results", icon: "?" },
  { title: "කාව්‍ය හා නිසඳැස්", subtitle: "ජ්‍යෙෂ්ඨ", description: "කවි හා නිසඳැස් නිර්මාණ හරහා සිසුන්ගේ සාහිත්‍යමය සහ නිර්මාණාත්මක හැකියාවන් දිරිගැන්වීම සඳහා පැවති තරඟාවලිය.", href: "/results", icon: "❝" },
  { title: "කාව්‍ය නිර්මාණ තරඟාවලිය", subtitle: "විවෘත", description: "විවෘත අංශය සඳහා පැවති කාව්‍ය නිර්මාණ තරඟාවලිය. ජයග්‍රාහකයින්ගේ ප්‍රතිඵල නිල ප්‍රතිඵල පිටුවෙන් බලන්න.", href: "/results", icon: "❝" },
  { title: "ශාස්ත්‍රීය ලේඛන තරඟාවලිය", subtitle: "විශ්වවිද්‍යාල සිසුන්", description: "නිදහස් අධ්‍යාපනය ඇතුළු අදාළ මාතෘකා ඔස්සේ ශාස්ත්‍රීය ලිපි සම්පාදනය සඳහා පැවති තරඟාවලිය.", href: "/results", icon: "Aa" },
];

const highlights = [
  {
    title: "නිර්මාණශීලීත්වය",
    text: "දරු දැරියන්ගේ සහ සිසුන්ගේ නිර්මාණශීලී හැකියාවන් හඳුනාගෙන දිරිගැන්වීම.",
    icon: "✦",
  },
  {
    title: "දැනුම හා කුසලතා",
    text: "දැනුම, චින්තනය, භාෂා හැකියාව සහ විවිධ කුසලතා වර්ධනයට අවස්ථා සැලසීම.",
    icon: "◆",
  },
  {
    title: "ඇගයීම හා දිරිගැන්වීම",
    text: "සහභාගීත්වය සහ ජයග්‍රහණ ඇගයීම සඳහා සහතික, ත්‍යාග සහ අනෙකුත් ඇගයීම්.",
    icon: "★",
  },
];

export default function CompetitionsPage() {
  return (
    <main className="min-h-screen bg-[#faf8f3] text-slate-900">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#b08a57]/15 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
              Competitions
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#5b1823] sm:text-5xl">
              කන්නන්ගර පදනමේ
              <br />
              අධ්‍යාපනික හා නිර්මාණශීලී තරඟ
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              දරු දැරියන්ගේ දැනුම, නිර්මාණශීලීත්වය, සාහිත්‍ය හැකියාවන් සහ
              විවිධ කුසලතා වර්ධනය කිරීම සඳහා පදනම විසින් සංවිධානය කරන
              තරඟ වැඩසටහන් පිළිබඳ තොරතුරු මෙතැනින් ලබාගත හැක.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#competitions-2026"
                className="rounded-xl bg-[#6d1f2b] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#571822]"
              >
                2026 තරඟ මාලාව
              </a>

              <Link
                href="/results"
                className="rounded-xl border border-[#6d1f2b] px-6 py-3 text-center font-semibold text-[#6d1f2b] transition hover:bg-[#6d1f2b] hover:text-white"
              >
                ප්‍රතිඵල බලන්න
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2026 Competitions */}
      <section id="competitions-2026" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
                2026 Competition Programme
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
                2026 තරඟ මාලාව
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              2026 වර්ෂයේ පවත්වන ලද තරඟ වැඩසටහන් පිළිබඳ තොරතුරු පහතින්
              දැක්වේ. ජයග්‍රාහකයින්ගේ සහ සම්මානලාභීන්ගේ නිල ප්‍රතිඵල
              ප්‍රතිඵල පිටුවෙන් ලබාගත හැක.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {competitions2026.map((competition) => (
              <article
                key={`${competition.title}-${competition.subtitle}`}
                className="group flex h-full flex-col rounded-3xl border border-black/5 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6d1f2b] text-lg font-bold text-white">
                    {competition.icon}
                  </div>

                  <span className="rounded-full border border-[#b08a57]/20 bg-[#f5efe5] px-3 py-1 text-xs font-semibold text-[#7d6038]">
                    2026
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#5b1823]">
                  {competition.title}
                </h3>

                <p className="mt-1 text-sm font-medium text-[#b08a57]">
                  {competition.subtitle}
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  {competition.description}
                </p>

                <div className="mt-auto pt-7">
                  <Link
                    href={competition.href}
                    className="block w-full rounded-xl bg-[#f5efe5] px-5 py-3 text-center font-semibold text-[#6d1f2b] transition hover:bg-[#6d1f2b] hover:text-white"
                  >
                    ප්‍රතිඵල බලන්න →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Programme Purpose */}
      <section className="bg-[#5b1823] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e5c990]">
              Our Purpose
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              තරඟ වැඩසටහන් තුළින් දරුවන්ගේ හැකියාවන් දිරිගැන්වීම
            </h2>

            <p className="mt-5 leading-8 text-white/70">
              කන්නන්ගර පදනමේ තරඟ වැඩසටහන් අධ්‍යාපනය, නිර්මාණශීලීත්වය,
              සාහිත්‍යය සහ දැනුම වැනි විවිධ ක්ෂේත්‍ර ඔස්සේ දරු පරපුරේ
              හැකියාවන් ඉදිරියට ගෙන යාම සඳහා අවස්ථා සලසයි.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {highlights.map((highlight) => (
              <article
                key={highlight.title}
                className="rounded-2xl border border-white/10 bg-white/10 p-7 backdrop-blur"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e5c990] font-bold text-[#5b1823]">
                  {highlight.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {highlight.title}
                </h3>

                <p className="mt-3 leading-7 text-white/70">
                  {highlight.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
              Recognition
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
              සහභාගීත්වය හා ජයග්‍රහණ ඇගයීම
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
              2026 තරඟ මාලාවේ ජයග්‍රාහකයින් සහ සම්මානලාභීන් සඳහා සහතික,
              ත්‍යාග සහ අනෙකුත් ඇගයීම් පිරිනැමීම කන්නන්ගර ගුණ සමරු උළෙලේදී සිදු කෙරේ.
            </p>
          </div>

          <div className="mt-10 rounded-3xl border border-[#b08a57]/20 bg-[#f5efe5] p-8 text-center sm:p-10">
            <p className="text-lg font-semibold text-[#5b1823]">
              2026 තරඟ ජයග්‍රාහකයන් සහ සහභාගී වූවන් සඳහා වන ඇගයීම්
            </p>

            <p className="mt-3 leading-7 text-slate-600">
              2026 තරඟ මාලාවේ නිල ප්‍රතිඵල දැන් වෙබ් අඩවියේ ප්‍රකාශයට පත් කර ඇත.
            </p>

            <Link
              href="/results"
              className="mt-6 inline-flex rounded-xl bg-[#6d1f2b] px-6 py-3 font-semibold text-white transition hover:bg-[#571822]"
            >
              ප්‍රතිඵල වෙත යන්න →
            </Link>
          </div>
        </div>
      </section>

      {/* Archive / Updates */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#b08a57]/20 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#b08a57]">
              2026 Archive
            </p>
            <h2 className="mt-3 text-2xl font-bold text-[#5b1823] sm:text-3xl">
              2026 තරඟ මාලාවේ නිල ප්‍රතිඵල
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              මෙම වසරේ පැවති තරඟවල ජයග්‍රාහකයින් සහ සම්මානලාභීන්ගේ ප්‍රතිඵල
              තරඟ අංශය අනුව සොයාගත හැක.
            </p>
            <Link href="/results" className="mt-6 inline-flex font-semibold text-[#6d1f2b]">
              සියලුම ප්‍රතිඵල බලන්න →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#f5efe5] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
            Kannangara Foundation
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
            කන්නන්ගර පදනමේ වැඩසටහන් සමඟ සම්බන්ධව සිටින්න
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            පදනමේ ඉදිරි වැඩසටහන්, නිවේදන සහ ප්‍රතිඵල සඳහා නිල වෙබ් අඩවිය
            නිරීක්ෂණය කරන්න.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/news"
              className="rounded-xl bg-[#6d1f2b] px-7 py-3 font-semibold text-white transition hover:bg-[#571822]"
            >
              නවතම පුවත්
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-[#6d1f2b] px-7 py-3 font-semibold text-[#6d1f2b] transition hover:bg-[#6d1f2b] hover:text-white"
            >
              සම්බන්ධ වන්න
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#171717] py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="font-bold">කන්නන්ගර පදනම</p>
            <p className="mt-1 text-sm text-white/60">
              ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ගුණානුස්මරණ පදනම
            </p>
          </div>

          <a
            href="https://web.facebook.com/drcwwkannangaracf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/70 transition hover:text-white"
          >
            Facebook පිටුවට පිවිසෙන්න →
          </a>
        </div>
      </footer>
    </main>
  );
}
