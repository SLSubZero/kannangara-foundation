import Image from "next/image";
import Navbar from "../../../components/Navbar";

const categories = [
  {
    title: "ප්‍රාථමික අංශය",
    subtitle: "1, 2 සහ 3 ශ්‍රේණි",
  },
  {
    title: "පශ්චාත් ප්‍රාථමික අංශය",
    subtitle: "4 සහ 5 ශ්‍රේණි",
  },
];

const prizes = [
  {
    place: "1 වන ස්ථානය",
    details: "සහතිකය, පදක්කම සහ රු. 5,000/- ත්‍යාගය",
  },
  {
    place: "2 වන ස්ථානය",
    details: "සහතිකය සහ රු. 3,000/- ත්‍යාගය",
  },
  {
    place: "3 වන ස්ථානය",
    details: "සහතිකය සහ රු. 2,000/- ත්‍යාගය",
  },
];

const steps = [
  {
    number: "01",
    title: "තරඟ අංශය තෝරන්න",
    text: "ඔබට අදාළ වයස් / ශ්‍රේණි අංශය තෝරා තරඟ විස්තර පරීක්ෂා කරන්න.",
  },
  {
    number: "02",
    title: "අයදුම්පත සම්පූර්ණ කරන්න",
    text: "දැනට භාවිතා වන නිල අයදුම්පත්‍රය සම්පූර්ණ කරන්න.",
  },
  {
    number: "03",
    title: "අත්සන් සහ සහතික ලබාගන්න",
    text: "අදාළ ස්ථානවලට අවශ්‍ය අත්සන් සහ සහතික ලබාගන්න.",
  },
  {
    number: "04",
    title: "නිර්මාණය තැපැල් කරන්න",
    text: "සම්පූර්ණ කළ අයදුම්පත සමඟ නිර්මාණය පදනම වෙත තැපැල් කරන්න.",
  },
];

export default function ArtCompetition2026Page() {
  return (
    <main className="min-h-screen bg-[#faf8f3] text-slate-900">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#b08a57]/15 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-[#f5efe5] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#8a6737]">
                2026 • චිත්‍ර තරඟාවලිය
              </span>

              <h1 className="mt-5 text-4xl font-extrabold leading-tight text-[#5b1823] sm:text-5xl">
                ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්.
                <br />
                කන්නන්ගර අනුස්මරණ
                <br />
                චිත්‍ර තරඟාවලිය
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ශ්‍රීමතාණන්ගේ
                අනුස්මරණය වෙනුවෙන් දරු දැරියන්ගේ නිර්මාණශීලීත්වය
                දිරිගැන්වීම සඳහා සංවිධානය කරන 2026 චිත්‍ර තරඟාවලිය.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#application"
                  className="rounded-xl bg-[#6d1f2b] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#571822]"
                >
                  අයදුම් කිරීමේ විස්තර
                </a>

                <a
                  href="#poster"
                  className="rounded-xl border border-[#6d1f2b] px-6 py-3 text-center font-semibold text-[#6d1f2b] transition hover:bg-[#6d1f2b] hover:text-white"
                >
                  නිල පෝස්ටරය
                </a>
              </div>
            </div>

            <div
              id="poster"
              className="overflow-hidden rounded-3xl border border-[#b08a57]/20 bg-[#eadfcf] p-3 shadow-xl"
            >
              <Image
                src="/art-competition-2026.jpeg"
                alt="2026 චිත්‍ර තරඟාවලියේ නිල පෝස්ටරය"
                width={1200}
                height={1600}
                className="w-full rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
                Competition Overview
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
                තරඟය පිළිබඳව
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                2026 වර්ෂය සඳහා සංවිධානය කර ඇති මෙම චිත්‍ර තරඟාවලිය
                දරු දැරියන්ගේ නිර්මාණශීලීත්වය හා කලා හැකියාවන්
                ඉදිරිපත් කිරීමට අවස්ථාව සලසයි.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                සහභාගී වීමට පෙර ඔබට අදාළ තරඟ අංශය, නිල මාතෘකාව,
                ඉදිරිපත් කිරීමේ නීති සහ අයදුම් කිරීමේ ක්‍රමවේදය
                පරීක්ෂා කිරීම වැදගත් වේ.
              </p>
            </div>

            <div className="rounded-3xl border border-[#b08a57]/20 bg-[#f5efe5] p-8">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#b08a57]">
                වැදගත් දිනය
              </p>

              <p className="mt-3 text-3xl font-bold text-[#5b1823]">
                2026 අගෝස්තු 31
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                නිල ප්‍රචාරක ද්‍රව්‍ය අනුව අයදුම්පත් / නිර්මාණ
                ඉදිරිපත් කිරීමේ අවසන් දිනය ලෙස දක්වා ඇත.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
              Categories
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
              තරඟ අංශ
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {categories.map((category, index) => (
              <article
                key={category.title}
                className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6d1f2b] font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#5b1823]">
                  {category.title}
                </h3>

                <p className="mt-2 text-lg text-slate-600">
                  {category.subtitle}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Theme */}
      <section className="bg-[#5b1823] py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e5c990]">
            Competition Theme
          </p>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
            ඔබේ නිර්මාණශීලීත්වය
            <br />
            චිත්‍රයකින් ප්‍රකාශ කරන්න
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/70">
            නිල poster එකේ සඳහන් මාතෘකාව සහ උපදෙස් අනුව නිර්මාණය
            සකස් කර ඉදිරිපත් කරන්න.
          </p>
        </div>
      </section>

      {/* Rules */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
              Rules & Instructions
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
              තරඟ නීති හා උපදෙස්
            </h2>
          </div>

          <div className="mt-12 grid gap-4">
            <div className="rounded-2xl border border-slate-200 bg-[#faf8f3] p-6">
              <p className="font-semibold text-[#5b1823]">
                නිල පෝස්ටරයේ සහ අයදුම්පත්‍රයේ සඳහන් උපදෙස්
                අනිවාර්යයෙන් අනුගමනය කරන්න.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#faf8f3] p-6">
              <p className="leading-7 text-slate-600">
                අයදුම්කරුට අදාළ තරඟ අංශය නිවැරදිව තෝරා අයදුම්පතේ
                සියලු තොරතුරු නිවැරදිව සම්පූර්ණ කළ යුතුය.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#faf8f3] p-6">
              <p className="leading-7 text-slate-600">
                නියමිත දිනයට පෙර නිර්මාණය ඉදිරිපත් කිරීමට අවශ්‍ය
                කටයුතු සිදු කළ යුතුය.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes */}
      <section className="bg-[#f5efe5] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
              Prizes
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
              ත්‍යාග හා සහතික
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {prizes.map((prize, index) => (
              <article
                key={prize.place}
                className="rounded-3xl bg-white p-7 text-center shadow-sm"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#6d1f2b] font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#5b1823]">
                  {prize.place}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {prize.details}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-sm leading-7 text-slate-500">
            සම්පූර්ණ ත්‍යාග හා කුසලතා සහතික පිළිබඳ විස්තර නිල
            තරඟ නිවේදනය අනුව පරීක්ෂා කරන්න.
          </p>
        </div>
      </section>

      {/* Application Process */}
      <section id="application" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
              2026 Application Process
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
              2026 සඳහා අයදුම් කරන ආකාරය
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
              2026 වර්ෂය සඳහා දැනට භාවිතා වන paper application
              ක්‍රමවේදය පහත පියවර අනුව සිදු කළ හැක.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
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
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Existing Form */}
      <section className="bg-[#faf8f3] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
                Current Form
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
                2026 නිල අයදුම්පත්‍රය
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                2026 වර්ෂය සඳහා භාවිතා වන නිල අයදුම්පත්‍රය මෙහි
                පෙන්වා ඇත. මෙය reference/documentation purpose සඳහා
                website එකේ තබාගත හැක.
              </p>

              <a
                href="/art-competition-2026-form.jpeg"
                download
                className="mt-7 inline-flex rounded-xl bg-[#6d1f2b] px-6 py-3 font-semibold text-white transition hover:bg-[#571822]"
              >
                අයදුම්පත්‍රය බාගන්න
              </a>

              <div className="mt-6 rounded-2xl border border-[#b08a57]/20 bg-[#f5efe5] p-5">
                <p className="text-sm font-semibold text-[#5b1823]">
                  2027 සිට
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Online application system එක හරහා අයදුම්පත
                  සම්පූර්ණ කර, generated PDF එක බාගත කර,
                  අවශ්‍ය අත්සන් / සහතික ලබාගෙන නිර්මාණය සමඟ
                  තැපැල් කිරීම සඳහා system එක සංවර්ධනය කළ හැක.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
              <Image
                src="/art-competition-2026-form.jpeg"
                alt="2026 නිල චිත්‍ර තරඟ අයදුම්පත්‍රය"
                width={1200}
                height={1600}
                className="h-auto w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#5b1823] py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e5c990]">
            Kannangara Foundation
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            දරු පරපුරේ නිර්මාණශීලීත්වය අගය කරමු
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
            තරඟ, වැඩසටහන් සහ ඉදිරි අයදුම්පත් පිළිබඳ නවතම
            නිවේදන සඳහා පදනමේ website එක සමඟ සම්බන්ධව සිටින්න.
          </p>

          <a
            href="/competitions"
            className="mt-8 inline-flex rounded-xl bg-[#e5c990] px-7 py-3 font-semibold text-[#5b1823] transition hover:bg-white"
          >
            සියලු තරඟ බලන්න
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