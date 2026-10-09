import Navbar from "../../components/Navbar";

const facebookUrl = "https://facebook.com/drcwwkannangaracf";
const instagramUrl = "https://instagram.com/dr_cww_kannangara_cf";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#faf8f3] text-slate-900">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#5b1823] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e5c990]">
              Contact Us
            </p>
            <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
              අප හා සම්බන්ධ වන්න
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/80">
              ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ගුණානුස්මරණ පදනම
              සමඟ සම්බන්ධ වීමට පහත නිල සම්බන්ධතා තොරතුරු භාවිතා කරන්න.
            </p>
          </div>
        </div>
      </section>

      {/* Contact details */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
                නිල සම්බන්ධතා
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#5b1823]">
                Foundation Contact
              </h2>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-sm font-semibold text-[#7d6038]">ලිපිනය</p>
                  <p className="mt-2 text-lg font-semibold text-slate-800">
                    ලූල්බද්දුව, ඉත්තපාන
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#7d6038]">
                    ජංගම දුරකථන
                  </p>
                  <a
                    href="tel:+94714494392"
                    className="mt-2 inline-flex text-lg font-semibold text-[#6d1f2b] hover:underline"
                  >
                    071 449 4392
                  </a>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#7d6038]">Email</p>
                  <a
                    href="mailto:kannangaramf@gmail.com"
                    className="mt-2 inline-flex text-lg font-semibold text-[#6d1f2b] hover:underline"
                  >
                    kannangaramf@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-[#f5efe5] p-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
                Social Media
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#5b1823]">
                අපව Follow කරන්න
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                පදනමේ වැඩසටහන්, නිවේදන සහ අනෙකුත් යාවත්කාලීන තොරතුරු
                සඳහා අපගේ නිල social media channels සමඟ සම්බන්ධ වන්න.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl bg-white p-5 font-semibold text-[#5b1823] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span>Facebook</span>
                  <span>→</span>
                </a>

                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl bg-white p-5 font-semibold text-[#5b1823] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span>Instagram · @dr_cww_kannangara_cf</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <div className="rounded-3xl bg-[#5b1823] px-6 py-12 text-white sm:px-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e5c990]">
              Get in Touch
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              පදනම සමඟ සම්බන්ධ වීමට
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/75">
              වැඩසටහන්, සාමාජිකත්වය සහ පදනමේ කටයුතු පිළිබඳ විමසීම් සඳහා
              අපගේ නිල email ලිපිනය භාවිතා කරන්න.
            </p>
            <a
              href="mailto:kannangaramf@gmail.com"
              className="mt-8 inline-flex rounded-xl bg-[#e5c990] px-7 py-3 font-semibold text-[#5b1823] transition hover:bg-white"
            >
              Email කරන්න
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#171717] py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="font-bold">
              ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ගුණානුස්මරණ පදනම
            </p>
            <p className="mt-1 text-sm text-white/60">
              Dr. C.W.W. Kannangara Commemorative Foundation
            </p>
          </div>
          <p className="text-sm text-white/60">ලූල්බද්දුව, ඉත්තපාන</p>
        </div>
      </footer>
    </main>
  );
}
