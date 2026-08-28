import Image from "next/image";
import Navbar from "../../components/Navbar";

const albums = [
  {
    title: "2026 චිත්‍ර තරඟාවලිය",
    category: "තරඟ",
    description:
      "2026 චිත්‍ර තරඟාවලියට අදාළ නිල ප්‍රචාරක ද්‍රව්‍ය සහ තරඟ සම්බන්ධ දෘශ්‍ය අන්තර්ගතය.",
    images: ["/art-competition-2026.jpeg"],
  },
  {
    title: "කන්නන්ගර ශ්‍රීමතාණන්",
    category: "උරුමය",
    description:
      "ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ශ්‍රීමතාණන් හා පදනමේ අනන්‍යතාවයට අදාළ දෘශ්‍ය සම්පත්.",
    images: ["/kannangara.jpg", "/foundation-logo.png"],
  },
  {
    title: "පදනමේ නිල අනන්‍යතාව",
    category: "පදනම",
    description:
      "කන්නන්ගර ගුණානුස්මරණ පදනමේ නිල logo සහ branding assets.",
    images: ["/foundation-logo.png"],
  },
];

const categoryLinks = [
  "සියල්ල",
  "ගුණ සමරු",
  "තරඟ",
  "සම්මාන හා ත්‍යාග",
  "ශිෂ්‍යත්ව",
  "පදනමේ ක්‍රියාකාරකම්",
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#faf8f3] text-slate-900">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#b08a57]/15 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
                Gallery
              </p>

              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#5b1823] sm:text-5xl">
                අපගේ ක්‍රියාකාරකම්
                <br />
                ඡායාරූප ගැලරිය
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                කන්නන්ගර පදනමේ තරඟ, ගුණ සමරු වැඩසටහන්, සම්මාන
                ප්‍රදාන සහ අනෙකුත් ක්‍රියාකාරකම්වල විශේෂ අවස්ථා
                ඡායාරූප හා දෘශ්‍ය සම්පත් ලෙස මෙහි සුරක්ෂිත කරමු.
              </p>

              <a
                href="#albums"
                className="mt-8 inline-flex rounded-xl bg-[#6d1f2b] px-6 py-3 font-semibold text-white transition hover:bg-[#571822]"
              >
                Gallery බලන්න
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
                      අපගේ මතකයන්
                      <br />
                      අනාගතයට සුරකිමු
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categoryLinks.map((category, index) => (
              <a
                key={category}
                href="#albums"
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  index === 0
                    ? "bg-[#6d1f2b] text-white"
                    : "bg-[#f5efe5] text-[#6d1f2b] hover:bg-[#eadfcf]"
                }`}
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Albums */}
      <section id="albums" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
                Albums
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
                ඡායාරූප එකතු
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              වැඩසටහන් අනුව photos සහ visual records සංවිධානය කර
              සුරක්ෂිත කිරීමට මෙම ආකෘතිය භාවිතා කළ හැක.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {albums.map((album) => (
              <article
                key={album.title}
                className="group overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Cover */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#eadfcf]">
                  <Image
                    src={album.images[0]}
                    alt={album.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-5 pt-16">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#6d1f2b]">
                      {album.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#5b1823]">
                    {album.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {album.description}
                  </p>

                  <button
                    type="button"
                    className="mt-5 font-semibold text-[#6d1f2b] transition hover:translate-x-1"
                  >
                    Album බලන්න →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured visuals */}
      <section className="bg-[#5b1823] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e5c990]">
              Featured
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              විශේෂ දෘශ්‍ය සම්පත්
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-white/70">
              පදනමේ වැදගත් අවස්ථා, නිල නිවේදන සහ අධ්‍යාපනික
              වැඩසටහන්වල දෘශ්‍ය සම්පත් මෙහි highlight කළ හැක.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/art-competition-2026.jpeg"
                  alt="2026 චිත්‍ර තරඟාවලියේ නිල පෝස්ටරය"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="mt-4 font-semibold">
                2026 චිත්‍ර තරඟාවලියේ නිල පෝස්ටරය
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#eadfcf]">
                <Image
                  src="/kannangara.jpg"
                  alt="ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ශ්‍රීමතාණන්"
                  fill
                  className="object-cover object-top"
                />
              </div>

              <p className="mt-4 font-semibold">
                ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ශ්‍රීමතාණන්
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Gallery System */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#b08a57]/20 bg-[#f5efe5] p-8 sm:p-10">
            <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6d1f2b] text-xl font-bold text-white">
                +
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#b08a57]">
                  Future Gallery System
                </p>

                <h2 className="mt-2 text-2xl font-bold text-[#5b1823]">
                  ඉදිරියේදී Gallery එක තවත් පුළුල් කරමු
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Administrator dashboard එක හරහා album එකක් create කර,
                  title, year, category, cover image සහ photos එකතු කර
                  publish කළ හැකි gallery management system එකක්
                  පසුව සම්බන්ධ කළ හැක.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl bg-white p-4">
                    <p className="text-sm font-bold text-[#6d1f2b]">
                      Albums
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-4">
                    <p className="text-sm font-bold text-[#6d1f2b]">
                      Photos
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-4">
                    <p className="text-sm font-bold text-[#6d1f2b]">
                      Categories
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social CTA */}
      <section className="bg-[#f5efe5] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
            Follow Our Activities
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
            තවත් ඡායාරූප හා updates සඳහා
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            පදනමේ නවතම ක්‍රියාකාරකම් සහ ඡායාරූප සඳහා
            Facebook පිටුවද අනුගමනය කරන්න.
          </p>

          <a
            href="https://web.facebook.com/drcwwkannangaracf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-xl bg-[#6d1f2b] px-7 py-3 font-semibold text-white"
          >
            Facebook පිටුවට යන්න
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