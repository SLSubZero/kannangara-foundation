import Navbar from "../components/Navbar";
const programmes = [
  {
    title: "අධ්‍යාපනික තරඟ",
    description:
      "දරු දැරියන්ගේ දැනුම, නිර්මාණශීලීත්වය සහ කුසලතා වර්ධනය සඳහා විවිධ තරඟ.",
  },
  {
    title: "ශිෂ්‍යත්ව වැඩසටහන",
    description:
      "අඩු ආදායම්ලාභී දරුවන්ගේ අධ්‍යාපනික අවස්ථා ශක්තිමත් කිරීම සඳහා වන වැඩසටහන්.",
  },
  {
    title: "කන්නන්ගර ගුණ සමරු උළෙල",
    description:
      "ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ශ්‍රීමතාණන්ගේ සේවය සිහිපත් කරමින් පැවැත්වෙන වැඩසටහන්.",
  },
];

const competitions = [
  {
    title: "චිත්‍ර තරඟාවලිය",
    category: "දීප ව්‍යාප්ත",
    status: "අයදුම්පත් විවෘතයි",
  },
  {
    title: "රචනා තරඟාවලිය",
    category: "ශිෂ්‍ය අංශය",
    status: "ඉදිරියේදී විවෘත වේ",
  },
  {
    title: "දැනුම මිනුම තරඟාවලිය",
    category: "ප්‍රාථමික / ද්විතීක",
    status: "විස්තර බලන්න",
  },
];

export default function Home() {
  return (
    <main 
    id="top"
    className="min-h-screen bg-[#faf8f3] text-slate-900">
      {/* Header */}
      
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
              අධ්‍යාපනික දැක්ම සහ උරුමය පෙරදැරිව, දරුවන්ගේ දැනුම,
              නිර්මාණශීලීත්වය සහ කුසලතා වර්ධනය කිරීම සඳහා කැපවුණු
              පදනමක්.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#competitions"
                className="rounded-xl bg-[#6d1f2b] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#571822]"
              >
                තරඟ සඳහා අයදුම් කරන්න
              </a>

              <a
                href="#membership"
                className="rounded-xl border border-[#6d1f2b] px-6 py-3 text-center font-semibold text-[#6d1f2b] transition hover:bg-[#6d1f2b] hover:text-white"
              >
                සාමාජිකයෙකු වන්න
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

                {/* Foundation logo badge */}
                <div className="absolute left-5 top-5 rounded-2xl border border-white/60 bg-white/90 p-2 shadow-lg backdrop-blur-sm">
                  <img
                    src="/foundation-logo.png"
                    alt="කන්නන්ගර පදනම"
                    className="h-14 w-14 object-contain sm:h-16 sm:w-16"
                  />
                </div>

                {/* Subtle portrait caption */}
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

      {/* About */}
      <section id="about" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
                අප ගැන
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
                අධ්‍යාපනය හා සමාජ සේවය එකට ගෙන යන මෙහෙවරක්
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ගුණානුස්මරණ පදනම
                අධ්‍යාපනික හා සමාජීය වැඩසටහන් හරහා දරු පරපුරේ දැනුම හා
                කුසලතා වර්ධනය කිරීම සඳහා ක්‍රියා කරන පදනමකි.
              </p>

              <a
                href="#"
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
                “බුද්ධිමත්, කුසලතා පිරි දරු පිරිසක් බිහිකිරීම”
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
                  href="#"
                  className="mt-5 inline-block font-semibold text-[#6d1f2b]"
                >
                  වැඩි විස්තර →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Competitions */}
      <section id="competitions" className="bg-[#5b1823] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e5c990]">
                Current Competitions
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                දැනට පවතින තරඟ
              </h2>
            </div>

            <a
              href="#"
              className="font-semibold text-[#f2d9a0] hover:text-white"
            >
              සියලු තරඟ බලන්න →
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {competitions.map((competition) => (
              <article
                key={competition.title}
                className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur"
              >
                <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-[#f2d9a0]">
                  {competition.status}
                </span>

                <h3 className="mt-5 text-2xl font-bold">
                  {competition.title}
                </h3>

                <p className="mt-2 text-white/70">
                  {competition.category}
                </p>

                <button className="mt-6 w-full rounded-xl bg-[#e5c990] px-5 py-3 font-semibold text-[#5b1823] transition hover:bg-white">
                  විස්තර බලන්න
                </button>
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
            අධ්‍යාපනය, දරුවන්ගේ හැකියාවන් සහ සමාජ සේවය සඳහා ඔබගේ දායකත්වය
            ලබාදෙන්න.
          </p>

          <a
            href="#"
            className="mt-8 inline-flex rounded-xl bg-[#6d1f2b] px-7 py-3 font-semibold text-white"
          >
            සාමාජිකත්ව අයදුම්පත
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#171717] py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="font-bold">කන්නන්ගර පදනම</p>

            <p className="mt-1 text-sm text-white/60">
              ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ගුණානුස්මරණ පදනම
            </p>
          </div>

          <div className="text-sm text-white/60">
            Facebook • WhatsApp • Contact
          </div>
        </div>
      </footer>
    </main>
  );
}