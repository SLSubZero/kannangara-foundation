import Navbar from "../components/Navbar";

const programmes = [
  {
    title: "අධ්‍යාපනික තරඟ",
    description:
      "දරු දැරියන්ගේ දැනුම, නිර්මාණශීලීත්වය සහ කුසලතා වර්ධනය සඳහා විවිධ තරඟ.",
    href: "/competitions",
  },
  {
    title: "ශිෂ්‍යත්ව වැඩසටහන",
    description:
      "අඩු ආදායම්ලාභී දරුවන්ගේ අධ්‍යාපනික අවස්ථා ශක්තිමත් කිරීම සඳහා වන වැඩසටහන්.",
    href: "/scholarships",
  },
  {
    title: "කන්නන්ගර ගුණ සමරු උළෙල",
    description:
      "ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ශ්‍රීමතාණන්ගේ සේවය සිහිපත් කරමින් පැවැත්වෙන වැඩසටහන්.",
    href: "/commemoration",
  },
];

export default function Home() {
  return (
    <main
      id="top"
      className="min-h-screen bg-[#faf8f3] text-slate-900"
    >
      <Navbar />

      {/* Hero */}
      <section className="overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
          <div>
            <span className="inline-flex rounded-full border border-[#b08a57]/30 bg-[#b08a57]/10 px-4 py-2 text-sm font-semibold text-[#7d6038]">
              Education • Heritage • Service
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#5b1823] sm:text-5xl lg:text-6xl">
              දරු පරපුරේ අනාගතය වෙනුවෙන්
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ශ්‍රීමතාණන්ගේ
              චින්තනය හා අධ්‍යාපනික උරුමය ඉදිරියට ගෙන යමින්,
              දරු පරපුර වෙනුවෙන් අධ්‍යාපනික හා සමාජීය වැඩසටහන්
              ක්‍රියාත්මක කරන පදනමකි.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#programmes"
                className="rounded-xl bg-[#6d1f2b] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#571822]"
              >
                අපගේ වැඩසටහන්
              </a>

              <a
                href="/about"
                className="rounded-xl border border-[#6d1f2b] px-6 py-3 text-center font-semibold text-[#6d1f2b] transition hover:bg-[#6d1f2b] hover:text-white"
              >
                පදනම ගැන
              </a>
            </div>
          </div>

          <div>
            <div className="relative">
              <div className="relative mx-auto max-w-lg overflow-hidden rounded-[2rem] border border-[#b08a57]/30 bg-[#eadfcf] shadow-2xl">
                <img
                  src="/kannangara.jpg"
                  alt="ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ශ්‍රීමතාණන්"
                  className="h-[520px] w-full object-cover object-top sm:h-[600px]"
                />

                <div className="absolute left-5 top-5 rounded-2xl border border-white/60 bg-white/90 p-2 shadow-lg backdrop-blur-sm">
                  <img
                    src="/foundation-logo.png"
                    alt="කන්නන්ගර පදනම"
                    className="h-14 w-14 object-contain sm:h-16 sm:w-16"
                  />
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#4f151f]/75 via-[#4f151f]/20 to-transparent px-6 pb-5 pt-16">
                  <p className="text-xs font-medium text-[#ead7a8] sm:text-sm">
                    ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ශ්‍රීමතාණන්
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official launch / commemoration highlight */}
      <section className="bg-[#5b1823] py-6 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="text-sm font-semibold text-[#e5c990]">
              2026 කන්නන්ගර ගුණ සමරු උළෙල
            </p>
            <p className="mt-1 font-semibold">
              2026 ඔක්තෝබර් 14 · පෙ.ව. 8.30 · මතුගම කලාප අධ්‍යාපන
              කාර්යාලයීය ශ්‍රවණාගාරය
            </p>
          </div>

          <a
            href="/commemoration"
            className="inline-flex shrink-0 rounded-xl bg-[#e5c990] px-5 py-3 text-center font-semibold text-[#5b1823] transition hover:bg-white"
          >
            උළෙල පිළිබඳ විස්තර →
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
                අප ගැන
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
                දශකයකට අධික සමාජ මෙහෙවරක්
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ගුණානුස්මරණ පදනම
                2012 වර්ෂයේ ආරම්භ කර, කන්නන්ගර ශ්‍රීමතාණන්ගේ චින්තනය
                හා සේවය සිහිපත් කරමින් විවිධ සමාජ හා අධ්‍යාපනික
                වැඩසටහන් ක්‍රියාත්මක කරමින් පවතී.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                කන්නන්ගර සමරු උළෙල, ශිෂ්‍යත්ව වැඩසටහන, පාසල්
                සිසුන් සඳහා අධ්‍යාපනික හා නිර්මාණශීලී තරඟ සහ
                පාසල් පුස්තකාල සඳහා පොත් ලබාදීම එහි සුවිශේෂී
                වැඩසටහන් අතර වේ.
              </p>

              <a
                href="/about"
                className="mt-6 inline-flex font-semibold text-[#6d1f2b]"
              >
                අපගේ ඉතිහාසය →
              </a>
            </div>

            <div className="rounded-3xl bg-[#f5efe5] p-8">
              <p className="text-sm font-semibold text-[#7d6038]">
                අපගේ ප්‍රධාන අරමුණ
              </p>

              <p className="mt-4 text-2xl font-bold leading-relaxed text-[#5b1823]">
                “කන්නන්ගර ශ්‍රීමතාණන්ගේ අරමුණ වූ බුද්ධිමත් කුසලතා පිරි
                දරුපිරිසක් බිහිකිරීම.”
              </p>

              <p className="mt-5 leading-7 text-slate-600">
                පදනම පිළිබඳ ජනතාවගේ අවධානය හා අවබෝධය පුළුල් කර,
                නිදහස් අධ්‍යාපන ප්‍රතිපත්තිය රැක ගැනීම සඳහා
                සමාජය තුළින් එළඹුමක් ගොඩනැගීම ද පදනමේ අමතර අරමුණකි.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section id="programmes" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
              අපගේ වැඩසටහන්
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
              දරුවන් හා සමාජය වෙනුවෙන්
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {programmes.map((programme) => (
              <article
                key={programme.title}
                className="rounded-2xl border border-black/5 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6d1f2b] text-xl text-white">
                  ★
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#5b1823]">
                  {programme.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {programme.description}
                </p>

                <a
                  href={programme.href}
                  className="mt-5 inline-block font-semibold text-[#6d1f2b]"
                >
                  වැඩි විස්තර →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section id="membership" className="bg-[#f5efe5] py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
            Join Us
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
            පදනමේ මෙහෙවර සමඟ ඔබත් එක්වන්න
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            අධ්‍යාපනය, දරුවන්ගේ හැකියාවන් සහ සමාජ සේවය සඳහා ඔබගේ
            දායකත්වය ලබාදෙන්න.
          </p>

          <a
            href="/membership"
            className="mt-8 inline-flex rounded-xl bg-[#6d1f2b] px-7 py-3 font-semibold text-white transition hover:bg-[#571822]"
          >
            සාමාජිකත්ව අයදුම්පත
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative overflow-hidden border-t border-[#eadfce] bg-[#fbf6ec]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-[#c9a45c] bg-[#fffaf0] text-[#7b1e2b]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M2.5 5.5A2.5 2.5 0 0 1 5 3h5a4 4 0 0 1 2 1.1A4 4 0 0 1 14 3h5a2.5 2.5 0 0 1 2.5 2.5v13A2.5 2.5 0 0 1 19 21h-5a4 4 0 0 0-2 1 4 4 0 0 0-2-1H5a2.5 2.5 0 0 1-2.5-2.5v-13Z" />
                  <path d="M12 4.5V21" />
                </svg>
              </div>

              <div>
                <p className="text-sm font-semibold leading-relaxed text-[#5b1720] sm:text-base">
                  ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ගුණානුස්මරණ පදනම
                </p>
                <p className="mt-1 text-xs text-[#6f6258] sm:text-sm">
                  Dr. C.W.W. Kannangara Commemorative Foundation
                </p>
                <div className="mt-2 h-[2px] w-24 bg-[#c9a45c]" />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-start gap-3 lg:justify-end">
              <a
                href="mailto:kannangaramf@gmail.com"
                aria-label="Email the Kannangara Foundation"
                className="flex items-center gap-2 text-sm text-[#5b4b42] transition-colors hover:text-[#7b1e2b]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f4ead8] text-[#7b1e2b]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>
                <span>kannangaramf@gmail.com</span>
              </a>

              <span className="hidden h-6 w-px bg-[#d8c5a5] sm:block" />

              <a
                href="https://facebook.com/drcwwkannangaracf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7b1e2b] text-white transition-transform hover:scale-105"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M14 8h3V4h-3c-3.314 0-5 1.686-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.552.448-1 1-1Z" />
                </svg>
              </a>

              <a
                href="https://instagram.com/dr_cww_kannangara_cf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7b1e2b] text-white transition-transform hover:scale-105"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-none stroke-current"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.4" cy="6.7" r="1" className="fill-current stroke-none" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="relative h-5 overflow-hidden">
          <div className="absolute inset-x-0 bottom-[-14px] h-10 rounded-[50%_50%_0_0] bg-[#7b1e2b]" />
          <div className="absolute inset-x-0 bottom-[-10px] h-2 rounded-[50%_50%_0_0] bg-[#c9a45c]" />
        </div>
      </footer>
    </main>
  );
}
