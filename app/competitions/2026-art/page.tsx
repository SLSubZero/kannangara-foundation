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
                2026 • නිල තරඟ වාර්තාව
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
                අනුස්මරණය වෙනුවෙන් 2026 වර්ෂයේ පැවැත්වූ චිත්‍ර තරඟාවලිය
                පිළිබඳ තොරතුරු සහ ප්‍රතිඵල සඳහා මෙම පිටුව වෙන් කර ඇත.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#results"
                  className="rounded-xl bg-[#6d1f2b] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#571822]"
                >
                  ප්‍රතිඵල බලන්න
                </a>

              </div>
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
                2026 වර්ෂයේ පැවති මෙම චිත්‍ර තරඟාවලිය
                දරු දැරියන්ගේ නිර්මාණශීලීත්වය හා කලා හැකියාවන්
                ඉදිරිපත් කිරීමට අවස්ථාව සලසයි.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                මෙම පිටුව 2026 තරඟාවලිය පිළිබඳ නිල තොරතුරු සහ වාර්තා සඳහා තබා ඇත.
                ජයග්‍රාහකයින්ගේ නිල ප්‍රතිඵල ප්‍රතිඵල පිටුවෙන් ලබාගත හැක.
              </p>
            </div>

            <div className="rounded-3xl border border-[#b08a57]/20 bg-[#f5efe5] p-8">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#b08a57]">
                තරඟ තත්ත්වය
              </p>

              <p className="mt-3 text-3xl font-bold text-[#5b1823]">
                2026 තරඟය අවසන්
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                2026 චිත්‍ර තරඟාවලිය සඳහා ඉදිරිපත් කිරීම් අවසන් කර ඇති අතර,
                ජයග්‍රාහකයින්ගේ නිල ප්‍රතිඵල පහතින් ලබාගත හැක.
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
            2026 තරඟාවලියේ ජයග්‍රාහකයින් සහ සම්මානලාභීන් සඳහා
            සහතික හා ත්‍යාග පිරිනැමීම කන්නන්ගර ගුණ සමරු උළෙලේදී සිදු කෙරේ.
          </p>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
            2026 Results
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
            2026 චිත්‍ර තරඟාවලියේ ප්‍රතිඵල
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            මෙම තරඟාවලියේ ජයග්‍රාහකයින් සහ සම්මානලාභීන්ගේ නිල ප්‍රතිඵල වෙබ් අඩවියේ ප්‍රතිඵල පිටුවෙන් ලබාගත හැක.
          </p>
          <a href="/results" className="mt-7 inline-flex rounded-xl bg-[#6d1f2b] px-6 py-3 font-semibold text-white transition hover:bg-[#571822]">
            සියලුම ප්‍රතිඵල බලන්න →
          </a>
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
            2026 තරඟාවලියේ නිල ප්‍රතිඵල සහ පදනමේ අනෙකුත් වැඩසටහන් පිළිබඳ
            තොරතුරු සඳහා වෙබ් අඩවිය සමඟ සම්බන්ධව සිටින්න.
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