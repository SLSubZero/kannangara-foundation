import Image from "next/image";
import Navbar from "../../components/Navbar";

const timeline = [
  {
    year: "2012",
    title: "පදනම ආරම්භ කිරීම",
    description:
      "ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ශ්‍රීමතාණන්ගේ චින්තනය හා උරුමය සමාජය තුළ තවදුරටත් ප්‍රචලිත කිරීමේ අරමුණින් පදනම ආරම්භ කරන ලදී.",
  },
  {
    year: "2013",
    title: "කන්නන්ගර පිළිරුව",
    description:
      "ප්‍රදේශවාසීන්ගේ සහය ඇතිව කන්නන්ගර ශ්‍රීමතාණන්ගේ ජීවමාන පිළිරුවක් ඉදිකර විවෘත කරන ලදී.",
  },
  {
    year: "2019",
    title: "තරඟ වැඩසටහන් පුළුල් කිරීම",
    description:
      "දැනුම මිනුම, දීප ව්‍යාප්ත චිත්‍ර තරඟ සහ රචනා තරඟ ඇතුළු වැඩසටහන් ක්‍රියාත්මක කරන ලදී.",
  },
  {
    year: "2020 – 2021",
    title: "අභියෝගාත්මක කාලපරිච්ඡේදය",
    description:
      "COVID-19 වසංගත ව්‍යාප්තිය හේතුවෙන් සමරු උළෙල හා තරඟ වැඩසටහන් තාවකාලිකව නතර කිරීමට සිදුවිය.",
  },
  {
    year: "2022",
    title: "වැඩසටහන් නැවත ආරම්භ කිරීම",
    description:
      "දායක ආයතන සහ දානපතීන්ගේ සහය ඇතිව කන්නන්ගර ගුණ සමරු වැඩසටහන් නැවත පැවැත්වීමට පදනම සමත් විය.",
  },
];

const objectives = [
  {
    number: "01",
    title: "ප්‍රධාන අරමුණ",
    description:
      "බුද්ධිමත්, කුසලතා පිරි දරු පිරිසක් බිහිකිරීම.",
  },
  {
    number: "02",
    title: "සමාජ අවබෝධය",
    description:
      "කන්නන්ගර ගුණානුස්මරණ පදනම පිළිබඳ ජනතාවගේ අවධානය හා අවබෝධය පුළුල් කිරීම.",
  },
  {
    number: "03",
    title: "නිදහස් අධ්‍යාපනය",
    description:
      "නිදහස් අධ්‍යාපන ප්‍රතිපත්තිය රැක ගැනීම සඳහා සමාජය තුළින් එළඹුමක් ගොඩනැගීම.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#faf8f3] text-slate-900">
      <Navbar />

      {/* Page Hero */}
      <section className="border-b border-[#b08a57]/15 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
                අප ගැන
              </p>

              <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-[#5b1823] sm:text-5xl">
                ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර
                <br />
                ගුණානුස්මරණ පදනම
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                අධ්‍යාපනය, දරු පරපුරේ කුසලතා වර්ධනය සහ සමාජ සේවය
                ඔස්සේ ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ශ්‍රීමතාණන්ගේ
                දැක්ම හා උරුමය ඉදිරියට ගෙන යන පදනමක්.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-[300px]">
                <div className="rounded-[1.75rem] border border-[#b08a57]/25 bg-[#eadfcf] p-4 shadow-lg">
                    <div className="rounded-[1.35rem] bg-white p-5">
                    <Image
                        src="/foundation-logo.png"
                        alt="කන්නන්ගර පදනම"
                        width={220}
                        height={220}
                        className="mx-auto h-auto w-full max-w-[175px]"
                    />

                    <div className="mt-4 border-t border-[#b08a57]/20 pt-4 text-center">
                        <p className="text-xs font-semibold leading-5 text-[#6d1f2b]">
                        කන්නන්ගර ශ්‍රීමතාණන්ගේ
                        <br />
                        අධ්‍යාපනික උරුමය වෙනුවෙන්
                        </p>
                    </div>
                    </div>
                </div>
                </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
                අපගේ කතාව
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-[#5b1823] sm:text-4xl">
                කන්නන්ගර ශ්‍රීමතාණන්ගේ දැක්ම
                <br />
                ඉදිරියට ගෙන යමින්
              </h2>

              <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-600">
                <p>
                  විසිවන සියවසේ ශ්‍රී ලංකාවේ අධ්‍යාපන ක්ෂේත්‍රයට
                  සුවිශාල බලපෑමක් කළ ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්.
                  කන්නන්ගර ශ්‍රීමතාණන්ගේ චින්තනය දසත පැතිරවීම
                  සඳහා කන්නන්ගර ගුණානුස්මරණ පදනම පිහිටුවන ලදී.
                </p>

                <p>
                  පදනම 2012 වර්ෂයේ ආරම්භ කළ අතර, 2013 වන විට
                  ප්‍රදේශයේ ජනතාවගේ සහය ඇතිව කන්නන්ගර ශ්‍රීමතාණන්ගේ
                  ජීවමාන පිළිරුවක් ඉදිකිරීමට කටයුතු කරන ලදී.
                </p>

                <p>
                  ඉන් පසුව දරු දැරියන්ගේ දැනුම, නිර්මාණශීලීත්වය සහ
                  කුසලතා වර්ධනය කිරීම අරමුණු කරගත් තරඟ සහ වෙනත්
                  අධ්‍යාපනික වැඩසටහන් ක්‍රමානුකූලව සංවිධානය කරන ලදී.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#f5efe5] p-8 sm:p-10">
              <p className="text-sm font-semibold text-[#7d6038]">
                අපගේ විශ්වාසය
              </p>

              <blockquote className="mt-5 text-2xl font-bold leading-relaxed text-[#5b1823] sm:text-3xl">
                “බුද්ධිමත්, කුසලතා පිරි දරු පිරිසක් බිහිකිරීම”
              </blockquote>

              <div className="mt-8 h-px bg-[#b08a57]/30" />

              <p className="mt-6 leading-7 text-slate-600">
                අධ්‍යාපනය යනු සෑම දරුවෙකුටම අවස්ථාවක් ලබාදෙන
                සමාජ බලවේගයක් බව අපගේ වැඩසටහන් තුළින් ප්‍රායෝගිකව
                ඉදිරියට ගෙන යාම අපගේ අරමුණයි.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
              අපගේ දැක්ම සහ මෙහෙවර
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
              අධ්‍යාපනයෙන් අනාගතය සවිබල ගැන්වීම
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-[#b08a57]/20 bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6d1f2b] text-xl text-white">
                ◇
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#5b1823]">
                අපගේ දැක්ම
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ශ්‍රීමතාණන්ගේ
                අධ්‍යාපනික දැක්ම හා සමාජ වටිනාකම් වත්මන් සහ අනාගත
                පරපුර වෙත ගෙන යාම.
              </p>
            </article>

            <article className="rounded-3xl border border-[#b08a57]/20 bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#b08a57] text-xl text-white">
                ◆
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#5b1823]">
                අපගේ මෙහෙවර
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                අධ්‍යාපනික හා සමාජීය වැඩසටහන් හරහා දරු දැරියන්ගේ
                දැනුම, නිර්මාණශීලීත්වය සහ විවිධ කුසලතා වර්ධනය
                කිරීමට අවස්ථා නිර්මාණය කිරීම.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="bg-[#5b1823] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e5c990]">
              Objectives
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              අපගේ අරමුණු
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {objectives.map((objective) => (
              <article
                key={objective.number}
                className="rounded-2xl border border-white/10 bg-white/10 p-7"
              >
                <span className="text-sm font-bold text-[#e5c990]">
                  {objective.number}
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  {objective.title}
                </h3>

                <p className="mt-4 leading-7 text-white/75">
                  {objective.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="bg-[#f5efe5] py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
              Foundation History
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
              අපගේ ගමන් මඟ
            </h2>
          </div>

          <div className="relative mt-14">
            <div className="absolute bottom-0 left-[18px] top-0 w-[2px] bg-gradient-to-b from-[#b08a57]/20 via-[#6d1f2b]/50 to-[#b08a57]/20 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-10">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className="relative grid gap-6 md:grid-cols-2 md:gap-12"
                >
                  <div className="relative pl-12 md:pl-0">
                    <div className="absolute left-[5px] top-0.5 flex h-7 w-7 items-center justify-center rounded-full border-[5px] border-[#f5efe5] bg-[#6d1f2b] shadow-sm md:left-auto md:right-[-39px]">
                        <div className="h-2 w-2 rounded-full bg-[#e5c990]" />
                    </div>

                    <p className="text-sm font-bold uppercase tracking-wider text-[#b08a57]">
                      {item.year}
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-[#5b1823]">
                      {item.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>

                  <div />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kannangara Legacy */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-[#eadfcf]">
              <Image
                src="/kannangara.jpg"
                alt="ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ශ්‍රීමතාණන්"
                width={1520}
                height={2048}
                className="h-[520px] w-full object-cover object-top"
              />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
                Legacy
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
                කන්නන්ගර ශ්‍රීමතාණන්ගේ උරුමය
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                ශ්‍රී ලංකාවේ අධ්‍යාපන ඉතිහාසය තුළ සුවිශේෂී ස්ථානයක්
                හිමි ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ශ්‍රීමතාණන්ගේ
                අධ්‍යාපනික දැක්ම වර්තමාන පරපුර තුළත් සජීවීව තබා ගැනීම
                අපගේ ප්‍රධාන වගකීමකි.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                එතුමාගේ ගුණානුස්මරණය පමණක් නොව, දරු දැරියන්ට ඔවුන්ගේ
                හැකියාවන් පෙන්වීමට අවස්ථා සැලසීම, නිර්මාණශීලීත්වය
                දිරිගැන්වීම සහ අධ්‍යාපනයේ වටිනාකම සමාජය තුළ තවදුරටත්
                ශක්තිමත් කිරීම අපගේ වැඩසටහන්වල අරමුණකි.
              </p>

              <a
                href="/competitions"
                className="mt-7 inline-flex rounded-xl bg-[#6d1f2b] px-6 py-3 font-semibold text-white transition hover:bg-[#571822]"
              >
                අපගේ වැඩසටහන් බලන්න
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5efe5] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
            Join Our Mission
          </p>

            <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
                කන්නන්ගර පදනමේ මෙහෙවර සමඟ ඔබත් එක්වන්න
            </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            දරු පරපුරේ අනාගතය වෙනුවෙන් ක්‍රියා කරන අපගේ වැඩසටහන් සමඟ
            සම්බන්ධ වන්න.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/membership"
              className="rounded-xl bg-[#6d1f2b] px-6 py-3 font-semibold text-white transition hover:bg-[#571822]"
            >
              සාමාජිකත්වය ලබාගන්න
            </a>

            <a
              href="/competitions"
              className="rounded-xl border border-[#6d1f2b] px-6 py-3 font-semibold text-[#6d1f2b] transition hover:bg-[#6d1f2b] hover:text-white"
            >
              තරඟ බලන්න
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#171717] py-10 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
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
        </div>
      </footer>
    </main>
  );
}