import Link from "next/link";
import {
  ArrowRight,
  Award,
  CalendarDays,
  ChevronRight,
  Megaphone,
  Trophy,
} from "lucide-react";

const newsItems = [
  {
    date: "2026 ඔක්තෝබර්",
    type: "විශේෂ නිවේදනය",
    icon: CalendarDays,
    title: "142 වන ජන්ම දින සැමරුම් උළෙල",
    description:
      "ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ශ්‍රීමතාණන්ගේ 142 වන ජන්ම දින සැමරුම් උළෙල 2026 ඔක්තෝබර් 14 වන දින මතුගම කලාප අධ්‍යාපන කාර්යාලයීය ශ්‍රවණාගාරයේදී පැවැත්වේ.",
    href: "/commemoration",
    featured: true,
  },
  {
    date: "2026",
    type: "ප්‍රතිඵල",
    icon: Trophy,
    title: "2026 අධ්‍යාපනික හා නිර්මාණාත්මක තරඟ ප්‍රතිඵල",
    description:
      "2026 වසරේ පදනම විසින් සංවිධානය කළ විවිධ තරඟ අංශවල ප්‍රතිඵල දැන් වෙබ් අඩවිය හරහා නැරඹිය හැකිය.",
    href: "/results",
    featured: false,
  },
  {
    date: "2026",
    type: "වැඩසටහන්",
    icon: Award,
    title: "2026 තරඟ වැඩසටහන්",
    description:
      "චිත්‍ර, රචනා, කාව්‍ය, ශාස්ත්‍රීය ලිපි සහ දැනුම මිනුම ඇතුළු විවිධ අංශ යටතේ පැවැත්වූ 2026 තරඟ වැඩසටහන් පිළිබඳ තොරතුරු.",
    href: "/competitions",
    featured: false,
  },
];

export default function NewsPage() {
  return (
    <main className="bg-[#fffaf3] text-[#3a2020]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#541b25]">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#d6a84f]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-[#d6a84f]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d6a84f]/30 bg-[#d6a84f]/10 px-4 py-2 text-sm font-semibold text-[#f1d58c]">
              <Megaphone className="h-4 w-4" />
              පුවත් හා නිවේදන
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
              පදනමේ
              <span className="text-[#e2bd68]"> නවතම තොරතුරු</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ගුණානුස්මරණ
              පදනමේ වැඩසටහන්, තරඟ, ප්‍රතිඵල සහ විශේෂ අවස්ථා
              පිළිබඳ නිල තොරතුරු මෙහි පළ කෙරේ.
            </p>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#9a7025]">
            Featured
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[#541b25]">
            විශේෂ නිවේදනය
          </h2>
        </div>

        {newsItems
          .filter((item) => item.featured)
          .map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="group block overflow-hidden rounded-[2rem] bg-[#541b25] p-8 shadow-xl transition hover:-translate-y-1 sm:p-10 lg:p-12"
              >
                <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-[#d6a84f]/15 px-4 py-2 text-xs font-bold text-[#e2bd68]">
                        {item.type}
                      </span>
                      <span className="text-sm text-white/50">
                        {item.date}
                      </span>
                    </div>

                    <h3 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
                      {item.title}
                    </h3>

                    <p className="mt-5 max-w-3xl leading-8 text-white/70">
                      {item.description}
                    </p>

                    <span className="mt-7 inline-flex items-center gap-2 font-bold text-[#e2bd68]">
                      වැඩි විස්තර
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>

                  <div className="hidden h-24 w-24 items-center justify-center rounded-3xl bg-[#d6a84f]/10 text-[#e2bd68] sm:flex">
                    <Icon className="h-10 w-10" />
                  </div>
                </div>
              </Link>
            );
          })}
      </section>

      {/* News grid */}
      <section className="border-y border-[#eadfce] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#9a7025]">
              Updates
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#541b25]">
              වැඩසටහන් හා යාවත්කාලීන කිරීම්
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {newsItems
              .filter((item) => !item.featured)
              .map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group rounded-2xl border border-[#eadfce] bg-[#fffaf3] p-7 transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#541b25] text-[#e2bd68]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="text-xs font-semibold text-[#947d7d]">
                        {item.date}
                      </span>
                    </div>

                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.12em] text-[#9a7025]">
                      {item.type}
                    </p>

                    <h3 className="mt-2 text-xl font-bold leading-8 text-[#541b25]">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-[#6d5555]">
                      {item.description}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#541b25]">
                      බලන්න
                      <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      {/* Future updates */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-8 lg:py-24">
        <div className="rounded-[2rem] border border-dashed border-[#d9c9b1] bg-white p-8 sm:p-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#541b25] text-[#e2bd68]">
            <Megaphone className="h-6 w-6" />
          </div>

          <h2 className="mt-6 text-2xl font-bold text-[#541b25] sm:text-3xl">
            නවතම නිවේදන ඉදිරියේදී
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#6d5555]">
            ඉදිරියේදී පදනමේ නිල වැඩසටහන්, උත්සව, ප්‍රතිඵල
            සහ අනෙකුත් වැදගත් නිවේදන මෙම පිටුව හරහා
            යාවත්කාලීන කරනු ඇත.
          </p>
        </div>
      </section>
    </main>
  );
}