import Link from "next/link";
import {
  ArrowRight,
  Award,
  CalendarDays,
  Clock3,
  GraduationCap,
  MapPin,
  Medal,
  Sparkles,
  Trophy,
} from "lucide-react";

const highlights = [
  {
    icon: Trophy,
    title: "2026 තරඟ ජයග්‍රාහකයන් ඇගයීම",
    description:
      "මෙවර පැවැත්වූ අධ්‍යාපනික හා නිර්මාණාත්මක තරඟවල ජයග්‍රාහකයන් ඇගයීමට ලක් කෙරේ.",
  },
  {
    icon: Medal,
    title: "කුසලාන හා ත්‍යාග ප්‍රදානය",
    description:
      "විශිෂ්ට දක්ෂතා දැක්වූ සිසුන් වෙත කුසලාන, ත්‍යාග සහ ඇගයීම් පිරිනැමේ.",
  },
  {
    icon: Award,
    title: "සහතිකපත් ප්‍රදානය",
    description:
      "තරඟ සඳහා සහභාගී වූ හා ජයග්‍රහණ ලැබූ දරුවන්ගේ දක්ෂතා නිල වශයෙන් ඇගයීමට ලක් කෙරේ.",
  },
  {
    icon: GraduationCap,
    title: "කන්නන්ගර අධ්‍යාපන දැක්ම",
    description:
      "බුද්ධිමත් හා කුසලතා පිරි දරු පරපුරක් බිහිකිරීමේ කන්නන්ගර ශ්‍රීමතාණන්ගේ දැක්ම සමරමින් වැඩසටහන් ක්‍රියාත්මක කෙරේ.",
  },
];

const eventDetails = [
  {
    icon: CalendarDays,
    label: "දිනය",
    value: "2026 ඔක්තෝබර් 14",
  },
  {
    icon: Clock3,
    label: "වේලාව",
    value: "පෙරවරු 8.30",
  },
  {
    icon: MapPin,
    label: "ස්ථානය",
    value: "මතුගම කලාප අධ්‍යාපන කාර්යාලයීය ශ්‍රවණාගාරය",
  },
];

export default function CommemorationPage() {
  return (
    <main className="bg-[#fffaf3] text-[#3a2020]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#541b25]">
        <div className="absolute inset-0">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#d6a84f]/10 blur-3xl" />
          <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-[#d6a84f]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d6a84f]/30 bg-[#d6a84f]/10 px-4 py-2 text-sm font-medium text-[#f4d994]">
                <Sparkles className="h-4 w-4" />
                2026 සැමරුම් උළෙල
              </div>

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#d6a84f]">
                ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ශ්‍රීමතාණන්
              </p>

              <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                142 වන ජන්ම දින
                <span className="block text-[#e2bd68]">
                  සැමරුම් උළෙල
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                කන්නන්ගර ශ්‍රීමතාණන්ගේ ගුණානුස්මරණය සමරමින්,
                දරුවන්ගේ දක්ෂතා අගය කරමින් සහ අධ්‍යාපනයේ වටිනාකම
                ඉදිරි පරපුර වෙත ගෙන යන විශේෂ සැමරුම් අවස්ථාව.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/results"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d6a84f] px-6 py-3.5 text-sm font-bold text-[#3a2020] transition hover:bg-[#e5bd69]"
                >
                  2026 ප්‍රතිඵල බලන්න
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  පදනම ගැන දැනගන්න
                </Link>
              </div>
            </div>

            {/* Event date card */}
            <div className="lg:pl-8">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl backdrop-blur sm:p-8">
                <p className="text-sm font-semibold text-[#d6a84f]">
                  සැමරුම් උළෙල
                </p>

                <div className="mt-5 border-b border-white/10 pb-6">
                  <p className="text-4xl font-bold text-white sm:text-5xl">
                    14
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    ඔක්තෝබර් 2026
                  </p>
                </div>

                <div className="space-y-5 pt-6">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d6a84f]/15 text-[#e2bd68]">
                      <Clock3 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50">වේලාව</p>
                      <p className="mt-1 font-semibold text-white">
                        පෙරවරු 8.30
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d6a84f]/15 text-[#e2bd68]">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50">ස්ථානය</p>
                      <p className="mt-1 leading-6 font-semibold text-white">
                        මතුගම කලාප අධ්‍යාපන කාර්යාලයීය ශ්‍රවණාගාරය
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event introduction */}
      <section className="mx-auto max-w-5xl px-6 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.16em] text-[#9a7025]">
            Kannangara Commemoration
          </span>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#541b25] sm:text-4xl">
            කන්නන්ගර ගුණානුස්මරණය
          </h2>

          <p className="mt-6 text-base leading-8 text-[#6d5555] sm:text-lg">
            ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ශ්‍රීමතාණන්ගේ
            අධ්‍යාපනික මෙහෙවර සහ දර්ශනය සිහිපත් කරමින්,
            එතුමාගේ අරමුණ වූ බුද්ධිමත් හා කුසලතා පිරි දරු පරපුරක්
            බිහිකිරීම සඳහා පදනම විසින් ක්‍රියාත්මක කරන වැඩසටහන්
            සමඟ මෙම සැමරුම සම්බන්ධ වේ.
          </p>
        </div>
      </section>

      {/* Event details */}
      <section className="border-y border-[#eadfce] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#9a7025]">
              Event Details
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#541b25]">
              උළෙල පිළිබඳ තොරතුරු
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {eventDetails.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#eadfce] bg-[#fffaf3] p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#541b25] text-[#e2bd68]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <p className="mt-6 text-sm font-medium text-[#947d7d]">
                    {item.label}
                  </p>

                  <p className="mt-2 text-lg font-bold leading-7 text-[#541b25]">
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#9a7025]">
            Highlights
          </p>

          <h2 className="mt-2 text-3xl font-bold leading-tight text-[#541b25] sm:text-4xl">
            මෙවර සැමරුම් උළෙලේ විශේෂ අවස්ථා
          </h2>

          <p className="mt-5 text-base leading-8 text-[#6d5555]">
            කන්නන්ගර ගුණානුස්මරණය සමඟින් 2026 වසරේ පදනම
            විසින් ක්‍රියාත්මක කළ තරඟ හා වැඩසටහන්වල
            දක්ෂතා දැක්වූ දරුවන් ඇගයීම මෙම අවස්ථාවේ
            විශේෂ අංගයක් වේ.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-[#eadfce] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#541b25] text-[#e2bd68]">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#541b25]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-[#6d5555]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Legacy section */}
      <section className="bg-[#f3eadb]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[2rem] bg-[#541b25] p-8 text-white shadow-xl sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#e2bd68]">
                Our Purpose
              </p>

              <p className="mt-6 text-2xl font-bold leading-10 sm:text-3xl">
                “කන්නන්ගර ශ්‍රීමතාණන්ගේ අරමුණ වූ බුද්ධිමත් කුසලතා පිරි
                දරුපිරිසක් බිහිකිරීම.”
              </p>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#9a7025]">
                Kannangara Legacy
              </p>

              <h2 className="mt-2 text-3xl font-bold leading-tight text-[#541b25] sm:text-4xl">
                අධ්‍යාපනයේ වටිනාකම ඉදිරියට ගෙන යමු
              </h2>

              <p className="mt-6 leading-8 text-[#6d5555]">
                කන්නන්ගර ගුණානුස්මරණ පදනමේ වැඩසටහන් හරහා
                දරුවන්ගේ දැනුම, නිර්මාණශීලීත්වය සහ කුසලතා
                වර්ධනය කිරීම සඳහා අවස්ථා නිර්මාණය කරයි.
              </p>

              <p className="mt-4 leading-8 text-[#6d5555]">
                නිදහස් අධ්‍යාපන ප්‍රතිපත්තිය රැක ගැනීම සඳහා
                සමාජය තුළ අවබෝධයක් සහ සහභාගීත්වයක් ගොඩනැගීම
                ද පදනමේ අරමුණු අතර වේ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Memories */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="rounded-[2rem] border border-dashed border-[#d9c9b1] bg-white p-8 text-center sm:p-12 lg:p-16">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#541b25] text-[#e2bd68]">
            <Sparkles className="h-6 w-6" />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-[#9a7025]">
            Event Memories
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#541b25]">
            2026 සැමරුම් උළෙලේ මතකයන්
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#6d5555]">
            සැමරුම් උළෙල අවසන් වූ පසු උත්සවයේ විශේෂ අවස්ථා,
            ඡායාරූප සහ මතක සටහන් මෙම කොටස හරහා එක් කිරීමට
            හැකි වේ.
          </p>

          <div className="mt-8 inline-flex items-center rounded-full bg-[#f3eadb] px-5 py-2.5 text-sm font-semibold text-[#725d45]">
            ඡායාරූප හා මතක සටහන් ඉදිරියේදී එක් කෙරේ
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#541b25]">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:px-8 lg:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#e2bd68]">
            Kannangara Foundation
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            2026 තරඟවල ප්‍රතිඵල බලන්න
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
            මෙවර පදනම විසින් සංවිධානය කළ තරඟවල ජයග්‍රාහකයන්
            සහ ප්‍රතිඵල මෙතැනින් නැරඹිය හැකිය.
          </p>

          <Link
            href="/results"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#d6a84f] px-7 py-3.5 font-bold text-[#3a2020] transition hover:bg-[#e5bd69]"
          >
            ප්‍රතිඵල වෙත යන්න
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}