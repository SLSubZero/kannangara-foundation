import Image from "next/image";
import Navbar from "../../components/Navbar";

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-[#faf8f3] text-slate-900">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#b08a57]/15 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
                Membership
              </p>

              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#5b1823] sm:text-5xl">
                කන්නන්ගර පදනම සමඟ
                <br />
                ඔබත් එක්වන්න
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ශ්‍රීමතාණන්ගේ
                අධ්‍යාපනික දැක්ම හා සමාජීය උරුමය ඉදිරියට ගෙන යන
                පදනමේ මෙහෙවර සමඟ සම්බන්ධ වීමට සාමාජිකත්වය පිළිබඳ
                වැඩිදුර තොරතුරු ලබාගැනීමට අප හා සම්බන්ධ වන්න.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#application"
                  className="rounded-xl bg-[#6d1f2b] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#571822]"
                >
                  සාමාජිකත්වය පිළිබඳ විමසීම්
                </a>

                <a
                  href="#membership-types"
                  className="rounded-xl border border-[#6d1f2b] px-6 py-3 text-center font-semibold text-[#6d1f2b] transition hover:bg-[#6d1f2b] hover:text-white"
                >
                  සාමාජිකත්ව වර්ග
                </a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-sm">
              <div className="rounded-[2rem] border border-[#b08a57]/25 bg-[#eadfcf] p-4 shadow-xl">
                <div className="rounded-[1.5rem] bg-white p-6">
                  <Image
                    src="/foundation-logo.png"
                    alt="ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ගුණානුස්මරණ පදනම"
                    width={300}
                    height={300}
                    className="mx-auto h-auto w-full max-w-[190px]"
                  />

                  <div className="mt-5 border-t border-[#b08a57]/20 pt-5 text-center">
                    <p className="font-semibold leading-6 text-[#6d1f2b]">
                      පදනමේ මෙහෙවර
                      <br />
                      සමඟ ඔබත් එක්වන්න
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information */}
      <section id="information" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
              Membership
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
              සාමාජිකත්ව අයදුම් කිරීම
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              දැනට online අයදුම්පත් පහසුකම සකස් කරමින් පවතී. සාමාජිකත්වය පිළිබඳ විමසීම් සඳහා පහත සම්බන්ධතා භාවිත කරන්න.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-black/5 bg-[#faf8f3] p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6d1f2b] text-xl text-white">
                01
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#5b1823]">
                අප හා සම්බන්ධ වන්න
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                සාමාජිකත්වය පිළිබඳ තොරතුරු ලබාගැනීමට
                පදනම සමඟ සම්බන්ධ වන්න.
              </p>
            </article>

            <article className="rounded-3xl border border-black/5 bg-[#faf8f3] p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#b08a57] text-xl text-white">
                02
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#5b1823]">
                සාමාජිකත්ව වර්ග දැනගන්න
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                ඔබට ගැළපෙන සාමාජිකත්ව වර්ගය පිළිබඳ
                විස්තර ලබාගන්න.
              </p>
            </article>

            <article className="rounded-3xl border border-black/5 bg-[#faf8f3] p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6d1f2b] text-xl text-white">
                03
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#5b1823]">
                විමසීමක් කරන්න
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                දුරකථනයෙන් හෝ email මඟින් පදනම වෙත
                ඔබගේ විමසීම යොමු කරන්න.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Membership Types */}
      <section id="membership-types" className="bg-[#f5efe5] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
              Membership Categories
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
              සාමාජිකත්ව වර්ග පිළිබඳව
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              පදනම සමඟ එක්වීමට පෙර ඔබට අදාළ සාමාජිකත්ව ප්‍රවර්ගය පිළිබඳ
              අවබෝධයක් ලබාගත හැකි වන පරිදි ප්‍රධාන සාමාජිකත්ව වර්ග දෙක පහතින් දක්වා ඇත.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-[#b08a57]/20 bg-white p-7 shadow-sm sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#b08a57]">
                    01 · Full Member
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-[#5b1823]">
                    පූර්ණ සාමාජික
                  </h3>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#6d1f2b] text-lg font-bold text-white">
                  01
                </div>
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                පදනමේ කටයුතු හා වැඩසටහන් සමඟ සම්බන්ධ වෙමින් පදනමේ අරමුණු
                ඉදිරියට ගෙන යාමට දායක වීමට කැමති සාමාජිකයින් සඳහා වන ප්‍රධාන
                සාමාජිකත්ව ප්‍රවර්ගයයි.
              </p>

              <div className="mt-6 rounded-2xl bg-[#faf8f3] p-5">
                <p className="text-sm font-semibold leading-7 text-[#5b1823]">
                  පදනමේ කටයුතු සඳහා සක්‍රීයව දායක වීමට කැමති අය සඳහා සුදුසුය.
                </p>
              </div>
            </article>

            <article className="rounded-3xl border border-[#b08a57]/20 bg-white p-7 shadow-sm sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#b08a57]">
                    02 · Hon. Member
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-[#5b1823]">
                    ගරු සාමාජික
                  </h3>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#b08a57] text-lg font-bold text-white">
                  02
                </div>
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                පදනමේ අරමුණු හා කටයුතු සඳහා විශේෂ අනුග්‍රහයක් හෝ දායකත්වයක්
                ලබා දෙන අය සඳහා හඳුන්වා දී ඇති ගරු සාමාජිකත්ව ප්‍රවර්ගයයි.
              </p>

              <div className="mt-6 rounded-2xl bg-[#faf8f3] p-5">
                <p className="text-sm font-semibold leading-7 text-[#5b1823]">
                  පදනමට විශේෂ සහයෝගයක් ලබාදෙන අය සඳහා සුදුසුය.
                </p>
              </div>
            </article>
          </div>

          <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-[#b08a57]/20 bg-white p-5 text-center">
            <p className="text-sm leading-7 text-slate-600">
              සාමාජිකත්ව ප්‍රවර්ගය තෝරා ගැනීමේදී ඔබට අදාළ ප්‍රවර්ගය නිවැරදිව තෝරන්න.
              අයදුම්පතේදී <span className="font-semibold text-[#5b1823]">පූර්ණ සාමාජික</span> හෝ
              <span className="font-semibold text-[#5b1823]"> ගරු සාමාජික</span> යන ප්‍රවර්ග දෙකෙන් එකක් තෝරාගත හැක.
            </p>
          </div>
        </div>
      </section>

      {/* Application */}
      <section id="application" className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
              Application Form
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
              සාමාජිකත්ව අයදුම්පත
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              පහත අයදුම්පතේ අවශ්‍ය තොරතුරු නිවැරදිව සම්පූර්ණ කර සාමාජිකත්වය සඳහා අයදුම් කරන්න.
            </p>
          </div>

          <div className="rounded-3xl border border-[#b08a57]/25 bg-white p-6 shadow-xl sm:p-8 lg:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#b08a57]">
              Membership Applications
            </p>

            <h3 className="mt-3 text-2xl font-bold text-[#5b1823]">
              සාමාජිකත්වය සඳහා විමසීම්
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Online සාමාජිකත්ව අයදුම්පත් පහසුකම සකස් කරමින් පවතී.
              දැනට සාමාජිකත්වය පිළිබඳ වැඩිදුර තොරතුරු ලබාගැනීමට
              කරුණාකර පදනම සමඟ සම්බන්ධ වන්න.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:0714494392"
                className="rounded-xl bg-[#6d1f2b] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#571822]"
              >
                දුරකථනයෙන් විමසන්න
              </a>

              <a
                href="mailto:kannangaramf@gmail.com"
                className="rounded-xl border border-[#6d1f2b] px-6 py-3 text-center font-semibold text-[#6d1f2b] transition hover:bg-[#6d1f2b] hover:text-white"
              >
                Email යවන්න
              </a>
            </div>

            <div className="mt-6 rounded-2xl bg-[#f5efe5] p-5">
              <p className="text-sm leading-7 text-slate-700">
                <span className="font-semibold text-[#5b1823]">දුරකථන:</span>{" "}
                071 449 4392
                <br />
                <span className="font-semibold text-[#5b1823]">Email:</span>{" "}
                kannangaramf@gmail.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5efe5] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
            Join the Foundation
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
            ඔබගේ දායකත්වයත් වැදගත්
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            පදනමේ අධ්‍යාපනික හා සමාජීය වැඩසටහන් සමඟ සම්බන්ධ වන්න.
          </p>

          <a
            href="#application"
            className="mt-8 inline-flex rounded-xl bg-[#6d1f2b] px-7 py-3 font-semibold text-white transition hover:bg-[#571822]"
          >
            සාමාජිකත්වය පිළිබඳ විමසන්න
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden border-t border-[#eadfce] bg-[#fbf6ec]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-[#c9a45c] bg-[#fffaf0] text-[#7b1e2b]">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor"
                  strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
              <a href="mailto:kannangaramf@gmail.com" aria-label="Email the Kannangara Foundation"
                className="flex items-center gap-2 text-sm text-[#5b4b42] transition-colors hover:text-[#7b1e2b]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f4ead8] text-[#7b1e2b]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor"
                    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>
                <span>kannangaramf@gmail.com</span>
              </a>

              <span className="hidden h-6 w-px bg-[#d8c5a5] sm:block" />

              <a href="https://facebook.com/drcwwkannangaracf" target="_blank" rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7b1e2b] text-white transition-transform hover:scale-105">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M14 8h3V4h-3c-3.314 0-5 1.686-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.552.448-1 1-1Z" />
                </svg>
              </a>

              <a href="https://instagram.com/dr_cww_kannangara_cf" target="_blank" rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7b1e2b] text-white transition-transform hover:scale-105">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current"
                  strokeWidth="1.8" aria-hidden="true">
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