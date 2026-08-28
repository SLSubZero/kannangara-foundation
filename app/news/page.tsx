import Image from "next/image";
import Navbar from "../../components/Navbar";

const featuredNews = {
  title: "කන්නන්ගර පදනමේ නවතම වැඩසටහන් හා නිවේදන",
  date: "නවතම යාවත්කාලීන",
  category: "Featured",
  description:
    "පදනමේ තරඟ, අධ්‍යාපනික වැඩසටහන්, ගුණ සමරු උත්සව සහ අනෙකුත් ක්‍රියාකාරකම් පිළිබඳ නිල තොරතුරු මෙතැනින් ලබාගත හැක.",
};

const newsItems = [
  {
    title: "2026 චිත්‍ර තරඟාවලිය සඳහා අයදුම්පත් කැඳවයි",
    date: "2026",
    category: "තරඟ",
    description:
      "ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර අනුස්මරණ චිත්‍ර තරඟාවලිය සඳහා අදාළ නිවේදන, අංශ සහ අයදුම් කිරීමේ ක්‍රමය.",
    image: "/art-competition-2026.jpeg",
  },
  {
    title: "අධ්‍යාපනික හා නිර්මාණශීලී වැඩසටහන්",
    date: "2026",
    category: "වැඩසටහන්",
    description:
      "දරු දැරියන්ගේ දැනුම, නිර්මාණශීලීත්වය සහ කුසලතා වර්ධනය කිරීම සඳහා පදනම විසින් ක්‍රියාත්මක කරන වැඩසටහන් පිළිබඳ තොරතුරු.",
    image: "/foundation-logo.png",
  },
  {
    title: "කන්නන්ගර ගුණානුස්මරණ වැඩසටහන්",
    date: "2026",
    category: "ගුණානුස්මරණ",
    description:
      "ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ශ්‍රීමතාණන්ගේ සේවය සිහිපත් කරමින් සංවිධානය කරන වැඩසටහන් පිළිබඳ යාවත්කාලීන තොරතුරු.",
    image: "/kannangara.jpg",
  },
  {
    title: "ශිෂ්‍යත්ව වැඩසටහන",
    date: "2026",
    category: "ශිෂ්‍යත්ව",
    description:
      "අධ්‍යාපනික අවස්ථා අවශ්‍ය දරු දැරියන් සඳහා පදනම විසින් ක්‍රියාත්මක කරන ශිෂ්‍යත්ව හා උපකාරක වැඩසටහන්.",
    image: "/foundation-logo.png",
  },
  {
    title: "ජයග්‍රාහකයින් හා ප්‍රතිඵල",
    date: "Archive",
    category: "ප්‍රතිඵල",
    description:
      "පදනමේ තරඟාවලීන්හි ප්‍රතිඵල සහ ජයග්‍රාහකයින් පිළිබඳ නිල තොරතුරු.",
    image: "/foundation-logo.png",
  },
  {
    title: "පදනමේ නවතම නිවේදන",
    date: "Updates",
    category: "නිවේදන",
    description:
      "පදනමේ ඉදිරි වැඩසටහන්, වැදගත් දින සහ අනෙකුත් නිල නිවේදන මෙහි පළ කරනු ලැබේ.",
    image: "/foundation-logo.png",
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-[#faf8f3] text-slate-900">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#b08a57]/15 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
                News & Announcements
              </p>

              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#5b1823] sm:text-5xl">
                පුවත් හා
                <br />
                නිල නිවේදන
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                කන්නන්ගර පදනමේ තරඟ, වැඩසටහන්, ගුණානුස්මරණ
                කටයුතු සහ අනෙකුත් ක්‍රියාකාරකම් පිළිබඳ නවතම
                නිල තොරතුරු මෙතැනින් ලබාගන්න.
              </p>

              <a
                href="#latest"
                className="mt-8 inline-flex rounded-xl bg-[#6d1f2b] px-6 py-3 font-semibold text-white transition hover:bg-[#571822]"
              >
                නවතම පුවත් බලන්න
              </a>
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
                      නිල තොරතුරු
                      <br />
                      එකම ස්ථානයක
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-[#5b1823] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e5c990]">
            Featured News
          </p>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-[#e5c990]">
                {featuredNews.category}
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                {featuredNews.title}
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-white/70">
                {featuredNews.description}
              </p>

              <p className="mt-6 text-sm font-semibold text-[#e5c990]">
                {featuredNews.date}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-4">
              <div className="rounded-2xl bg-[#f5efe5] p-8 text-center">
                <Image
                  src="/foundation-logo.png"
                  alt="කන්නන්ගර පදනම"
                  width={260}
                  height={260}
                  className="mx-auto max-w-[170px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section id="latest" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
                Latest
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
                නවතම පුවත්
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              පදනමේ ක්‍රියාකාරකම් සහ වැදගත් නිවේදන පිළිබඳ
              යාවත්කාලීන තොරතුරු.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {newsItems.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-3xl border border-black/5 bg-[#faf8f3] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#eadfcf]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#6d1f2b] shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-wide text-[#b08a57]">
                    {item.date}
                  </div>

                  <h3 className="mt-3 text-xl font-bold leading-7 text-[#5b1823]">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <a
                    href="#"
                    className="mt-5 inline-block font-semibold text-[#6d1f2b]"
                  >
                    වැඩි විස්තර →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Facebook connection */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#b08a57]/20 bg-[#f5efe5] p-8 sm:p-10">
            <div className="grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6d1f2b] text-2xl font-bold text-white">
                f
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#b08a57]">
                  Social Media
                </p>

                <h2 className="mt-2 text-2xl font-bold text-[#5b1823]">
                  Facebook සමඟ සම්බන්ධව සිටින්න
                </h2>

                <p className="mt-2 leading-7 text-slate-600">
                  දෛනික යාවත්කාලීන සහ වැඩසටහන් පිළිබඳ නිවේදන සඳහා
                  පදනමේ Facebook පිටුවද අනුගමනය කරන්න.
                </p>
              </div>

              <a
                href="https://web.facebook.com/drcwwkannangaracf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[#6d1f2b] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#571822]"
              >
                Facebook වෙත යන්න
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Future CMS */}
      <section className="bg-[#5b1823] py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e5c990]">
            Future Content Management
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            නව පුවත් පහසුවෙන් පළ කිරීමට
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-white/70">
            ඉදිරියේදී administrator dashboard එක හරහා title, image,
            category, publication date සහ article content එක
            ඇතුළත් කර නව පුවත් publish කළ හැකි ආකාරයට මෙම section එක
            සම්බන්ධ කළ හැක.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5efe5] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
            Explore
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
            අපගේ අනෙකුත් වැඩසටහන් බලන්න
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            තරඟ, ප්‍රතිඵල සහ සාමාජිකත්ව තොරතුරු සඳහා website එකේ
            අනෙකුත් අංශ වෙත පිවිසෙන්න.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/competitions"
              className="rounded-xl bg-[#6d1f2b] px-6 py-3 font-semibold text-white"
            >
              තරඟ බලන්න
            </a>

            <a
              href="/results"
              className="rounded-xl border border-[#6d1f2b] px-6 py-3 font-semibold text-[#6d1f2b]"
            >
              ප්‍රතිඵල බලන්න
            </a>
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