import Navbar from "../../components/Navbar";
import Link from "next/link";


const currentCompetitions = [
  {
    title: "චිත්‍ර තරඟාවලිය",
    subtitle: "දීප ව්‍යාප්ත",
    badge: "Creative",
    status: "ඉදිරියේදී විවෘත වේ",
    description:
      "පාසල් හා පෙර පාසල් දරු දැරියන්ගේ නිර්මාණශීලී හැකියාවන් වර්ධනය කිරීම සඳහා සංවිධානය කරන චිත්‍ර තරඟාවලිය.",
    categories: ["පෙර පාසල්", "ප්‍රාථමික", "පශ්චාත් ප්‍රාථමික"],
    icon: "✦",
  },
  {
    title: "රචනා තරඟාවලිය",
    subtitle: "දීප ව්‍යාප්ත",
    badge: "Writing",
    status: "ඉදිරියේදී විවෘත වේ",
    description:
      "දරු දැරියන්ගේ භාෂා හැකියාව, අදහස් ප්‍රකාශනය සහ නිර්මාණාත්මක චින්තනය වර්ධනය කිරීම සඳහා පැවැත්වෙන රචනා තරඟය.",
    categories: ["කණිෂ්ඨ", "ද්විතීක"],
    icon: "✎",
  },
  {
    title: "දැනුම මිනුම තරඟාවලිය",
    subtitle: "පාසල් කණ්ඩායම්",
    badge: "Quiz",
    status: "විස්තර බලන්න",
    description:
      "පාසල් නියෝජනය කරන කණ්ඩායම් සඳහා දැනුම හා බුද්ධිමය හැකියාව මැන බැලීම සඳහා සංවිධානය කරන තරඟාවලිය.",
    categories: ["ප්‍රාථමික", "ද්විතීක"],
    icon: "?",
  },
  {
    title: "කාව්‍ය හා නිසඳැස්",
    subtitle: "දීප ව්‍යාප්ත",
    badge: "Literature",
    status: "ඉදිරියේදී විවෘත වේ",
    description:
      "කවි හා නිසඳැස් නිර්මාණ හරහා ශිෂ්‍යයන්ගේ සාහිත්‍යමය සහ නිර්මාණාත්මක හැකියාවන් දිරිගැන්වීම.",
    categories: ["12 – 13 ශ්‍රේණි"],
    icon: "❝",
  },
  {
    title: "ශාස්ත්‍රීය ලේඛන තරඟාවලිය",
    subtitle: "විශ්වවිද්‍යාල සිසුන්",
    badge: "Academic",
    status: "ඉදිරියේදී විවෘත වේ",
    description:
      "නිදහස් අධ්‍යාපනය පිළිබඳ ලබාදෙන මාතෘකාවක් ඔස්සේ ශාස්ත්‍රීය ලිපි සම්පාදනය සඳහා වන තරඟාවලිය.",
    categories: ["විශ්වවිද්‍යාල සිසුන්"],
    icon: "Aa",
  },
];

const processSteps = [
  {
    number: "01",
    title: "තරඟය තෝරන්න",
    description:
      "ඔබට සුදුසු තරඟය සහ අංශය තෝරා තරඟ විස්තර පරීක්ෂා කරන්න.",
  },
  {
    number: "02",
    title: "සුදුසුකම් පරීක්ෂා කරන්න",
    description:
      "වයස් සීමා, ශ්‍රේණිය, පාසල සහ අනෙකුත් අවශ්‍යතා පරීක්ෂා කරන්න.",
  },
  {
    number: "03",
    title: "අයදුම්පත සම්පූර්ණ කරන්න",
    description:
      "අයදුම්කරුගේ තොරතුරු සහ අවශ්‍ය නිර්මාණ/ලේඛන ඉදිරිපත් කරන්න.",
  },
  {
    number: "04",
    title: "අයදුම්පත් අංකය ලබාගන්න",
    description:
      "අයදුම් කිරීමෙන් පසු ලබාදෙන Application ID එක සුරක්ෂිතව තබාගන්න.",
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
              දරු දැරියන්ගේ දැනුම, නිර්මාණශීලීත්වය, සාහිත්‍ය හැකියාවන්
              සහ විවිධ කුසලතා වර්ධනය කිරීම සඳහා සංවිධානය කරන
              තරඟාවලි සඳහා මෙතැනින් විස්තර ලබාගත හැක.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#current"
                className="rounded-xl bg-[#6d1f2b] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#571822]"
              >
                දැනට පවතින තරඟ
              </a>

              <a
                href="#how-to-apply"
                className="rounded-xl border border-[#6d1f2b] px-6 py-3 text-center font-semibold text-[#6d1f2b] transition hover:bg-[#6d1f2b] hover:text-white"
              >
                අයදුම් කරන ආකාරය
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Current competitions */}
      <section id="current" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
                Current Competitions
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
                අපගේ තරඟාවලි
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              තරඟයක් තෝරා එහි සුදුසුකම්, අංශ, නීති සහ අයදුම් කිරීමේ
              ක්‍රියාවලිය පිළිබඳ වැඩි විස්තර බලන්න.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {currentCompetitions.map((competition) => (
              <article
                key={competition.title}
                className="group flex h-full flex-col rounded-3xl border border-black/5 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6d1f2b] text-lg font-bold text-white">
                    {competition.icon}
                  </div>

                  <span className="rounded-full border border-[#b08a57]/20 bg-[#f5efe5] px-3 py-1 text-xs font-semibold text-[#7d6038]">
                    {competition.badge}
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

                <div className="mt-5 flex flex-wrap gap-2">
                  {competition.categories.map((category) => (
                    <span
                      key={category}
                      className="rounded-lg bg-[#f7f3ec] px-3 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {category}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-7">
                  <div className="mb-4 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Status
                    </span>

                    <span className="text-xs font-semibold text-[#6d1f2b]">
                      {competition.status}
                    </span>
                  </div>

                  <Link
                    href="/competitions/2026-art"
                    className="block w-full rounded-xl bg-[#f5efe5] px-5 py-3 text-center font-semibold text-[#6d1f2b] transition hover:bg-[#6d1f2b] hover:text-white"
                  >
                    විස්තර බලන්න →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-[#5b1823] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e5c990]">
              Competition Categories
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              විවිධ හැකියාවන් සඳහා විවිධ අවස්ථා
            </h2>

            <p className="mt-5 leading-8 text-white/70">
              වයස් කාණ්ඩය, ශ්‍රේණිය සහ තරඟයේ ස්වභාවය අනුව වෙනස් වන
              අංශ සඳහා සහභාගී වීමට අවස්ථා සලසා ඇත.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "චිත්‍ර",
              "රචනා",
              "දැනුම මිනුම",
              "කාව්‍ය / නිසඳැස්",
              "ශාස්ත්‍රීය ලේඛන",
            ].map((category) => (
              <div
                key={category}
                className="rounded-2xl border border-white/10 bg-white/10 p-6 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#e5c990] font-bold text-[#5b1823]">
                  ✓
                </div>

                <p className="mt-4 font-semibold">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section id="how-to-apply" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
              How to Apply
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
              තරඟයක් සඳහා අයදුම් කරන්නේ කෙසේද?
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-black/5 bg-[#faf8f3] p-7"
              >
                <p className="text-sm font-bold text-[#b08a57]">
                  {step.number}
                </p>

                <h3 className="mt-4 text-xl font-bold text-[#5b1823]">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Important notice */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#b08a57]/20 bg-[#f5efe5] p-8 sm:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#6d1f2b] font-bold text-white">
                !
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#b08a57]">
                  Important
                </p>

                <h2 className="mt-2 text-2xl font-bold text-[#5b1823]">
                  අයදුම් කිරීමට පෙර තරඟ නීති පරීක්ෂා කරන්න
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  එක් එක් තරඟයට අදාළ සුදුසුකම්, වයස් හෝ ශ්‍රේණි සීමා,
                  නිර්මාණ ඉදිරිපත් කිරීමේ ආකාරය, වචන සීමා සහ අනෙකුත්
                  නීති වෙනස් විය හැක. අයදුම් කිරීමට පෙර තරඟයේ
                  සම්පූර්ණ විස්තර කියවීම අනිවාර්ය වේ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5efe5] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
            Ready to Participate?
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
            ඔබගේ හැකියාව ඉදිරියට ගෙන යන්න
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            ඔබට ගැළපෙන තරඟය තෝරා තරඟ නීති සහ අයදුම් කිරීමේ විස්තර
            පරීක්ෂා කරන්න.
          </p>

          <a
            href="#current"
            className="mt-8 inline-flex rounded-xl bg-[#6d1f2b] px-7 py-3 font-semibold text-white transition hover:bg-[#571822]"
          >
            තරඟ බලන්න
          </a>
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