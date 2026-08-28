import Image from "next/image";
import Navbar from "../../components/Navbar";

const resultCategories = [
  {
    title: "චිත්‍ර තරඟාවලිය",
    subtitle: "ප්‍රාථමික / පශ්චාත් ප්‍රාථමික",
    status: "Results Published",
    href: "#art",
  },
  {
    title: "රචනා තරඟාවලිය",
    subtitle: "ශිෂ්‍ය අංශය",
    status: "Coming Soon",
    href: "#essay",
  },
  {
    title: "දැනුම මිනුම",
    subtitle: "ප්‍රාථමික / ද්විතීක",
    status: "Coming Soon",
    href: "#quiz",
  },
  {
    title: "කාව්‍ය හා නිසඳැස්",
    subtitle: "12 – 13 ශ්‍රේණි",
    status: "Coming Soon",
    href: "#poetry",
  },
  {
    title: "ශාස්ත්‍රීය ලේඛන",
    subtitle: "විශ්වවිද්‍යාල සිසුන්",
    status: "Coming Soon",
    href: "#academic",
  },
];

const winners = [
  {
    place: "1",
    title: "පළමු ස්ථානය",
    name: "ජයග්‍රාහකයාගේ නම",
    school: "පාසල / ආයතනය",
  },
  {
    place: "2",
    title: "දෙවන ස්ථානය",
    name: "ජයග්‍රාහකයාගේ නම",
    school: "පාසල / ආයතනය",
  },
  {
    place: "3",
    title: "තෙවන ස්ථානය",
    name: "ජයග්‍රාහකයාගේ නම",
    school: "පාසල / ආයතනය",
  },
];

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-[#faf8f3] text-slate-900">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#b08a57]/15 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
                Results & Winners
              </p>

              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#5b1823] sm:text-5xl">
                තරඟ ප්‍රතිඵල හා
                <br />
                ජයග්‍රාහකයින්
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                කන්නන්ගර පදනම විසින් සංවිධානය කරන ලද තරඟාවලිවල
                ප්‍රතිඵල, ජයග්‍රාහකයින් සහ විශේෂ සම්මාන පිළිබඳ
                තොරතුරු මෙතැනින් ලබාගත හැක.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#results"
                  className="rounded-xl bg-[#6d1f2b] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#571822]"
                >
                  ප්‍රතිඵල බලන්න
                </a>

                <a
                  href="#certificates"
                  className="rounded-xl border border-[#6d1f2b] px-6 py-3 text-center font-semibold text-[#6d1f2b] transition hover:bg-[#6d1f2b] hover:text-white"
                >
                  සහතික
                </a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-sm">
              <div className="rounded-[2rem] border border-[#b08a57]/25 bg-[#eadfcf] p-4 shadow-xl">
                <div className="rounded-[1.5rem] bg-white p-6 text-center">
                  <Image
                    src="/foundation-logo.png"
                    alt="කන්නන්ගර පදනම"
                    width={260}
                    height={260}
                    className="mx-auto max-w-[185px]"
                  />

                  <div className="mt-5 border-t border-[#b08a57]/20 pt-5">
                    <p className="font-semibold leading-6 text-[#6d1f2b]">
                      දක්ෂතා අගය කරමු
                      <br />
                      ජයග්‍රහණ සමරමු
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Year */}
      <section id="results" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
                Results Archive
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
                2026 තරඟ ප්‍රතිඵල
              </h2>
            </div>

            <div className="rounded-xl border border-[#b08a57]/20 bg-[#f5efe5] px-4 py-2 text-sm font-semibold text-[#7d6038]">
              වර්ෂය: 2026
            </div>
          </div>

          {/* Category cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {resultCategories.map((category) => (
              <a
                key={category.title}
                href={category.href}
                className="group rounded-3xl border border-black/5 bg-[#faf8f3] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6d1f2b] font-bold text-white">
                    ✓
                  </div>

                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#7d6038]">
                    {category.status}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#5b1823]">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {category.subtitle}
                </p>

                <p className="mt-5 font-semibold text-[#6d1f2b] group-hover:translate-x-1 transition">
                  ප්‍රතිඵල බලන්න →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured winners */}
      <section id="art" className="bg-[#5b1823] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e5c990]">
              Featured Results
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              චිත්‍ර තරඟාවලිය — ජයග්‍රාහකයින්
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-white/70">
              ජයග්‍රාහකයින්ගේ විස්තර නිල වශයෙන් ප්‍රකාශ කිරීමෙන්
              පසු මෙම කොටස dynamic results data මගින් පිරවිය හැක.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {winners.map((winner) => (
              <article
                key={winner.place}
                className="rounded-3xl border border-white/10 bg-white/10 p-7 text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e5c990] text-2xl font-extrabold text-[#5b1823]">
                  {winner.place}
                </div>

                <p className="mt-5 text-sm font-bold uppercase tracking-wide text-[#e5c990]">
                  {winner.title}
                </p>

                <h3 className="mt-3 text-xl font-bold">
                  {winner.name}
                </h3>

                <p className="mt-2 text-sm text-white/60">
                  {winner.school}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Result information */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
              About Results
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
              ප්‍රතිඵල ප්‍රකාශනය
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-black/5 bg-[#faf8f3] p-6">
              <p className="text-sm font-bold text-[#b08a57]">01</p>
              <h3 className="mt-3 font-bold text-[#5b1823]">
                නිල ප්‍රතිඵල
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                පදනම විසින් නිල වශයෙන් තහවුරු කරන ලද ප්‍රතිඵල
                පමණක් මෙහි පළ කරනු ලැබේ.
              </p>
            </article>

            <article className="rounded-2xl border border-black/5 bg-[#faf8f3] p-6">
              <p className="text-sm font-bold text-[#b08a57]">02</p>
              <h3 className="mt-3 font-bold text-[#5b1823]">
                ජයග්‍රාහක තොරතුරු
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                ජයග්‍රාහකයාගේ නම, පාසල හෝ ආයතනය සහ අදාළ
                තරඟ අංශය ප්‍රකාශ කළ හැක.
              </p>
            </article>

            <article className="rounded-2xl border border-black/5 bg-[#faf8f3] p-6">
              <p className="text-sm font-bold text-[#b08a57]">03</p>
              <h3 className="mt-3 font-bold text-[#5b1823]">
                Archive
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                වසර අනුව පසුගිය තරඟ ප්‍රතිඵල සුරක්ෂිත කර
                නැවත සොයාගැනීමට හැකි ආකාරයට තබාගත හැක.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section id="certificates" className="bg-[#f5efe5] py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
            Certificates
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
            සහතිකපත්
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            ඉදිරියේදී ජයග්‍රාහකයින්ට ඔවුන්ගේ සහතිකපත්
            Application ID හෝ Winner ID භාවිතයෙන් ආරක්ෂිතව
            ලබාගැනීමට හැකි system එකක් සකස් කළ හැක.
          </p>

          <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-[#b08a57]/20 bg-white p-8 shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#6d1f2b] text-2xl text-white">
              ✓
            </div>

            <h3 className="mt-5 text-xl font-bold text-[#5b1823]">
              Certificate Verification
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Future system එකේ certificate number / QR code මගින්
              සහතිකයේ සත්‍යතාව පරීක්ෂා කළ හැකි ආකාරයට සංවර්ධනය
              කළ හැක.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#5b1823] py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e5c990]">
            Celebrating Achievement
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            දක්ෂතා අගය කරමින් අනාගතය ගොඩනගමු
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
            කන්නන්ගර පදනමේ තරඟ හා වැඩසටහන් පිළිබඳ නවතම
            තොරතුරු සමඟ සම්බන්ධව සිටින්න.
          </p>

          <a
            href="/competitions"
            className="mt-8 inline-flex rounded-xl bg-[#e5c990] px-7 py-3 font-semibold text-[#5b1823] transition hover:bg-white"
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