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
                පදනමේ මෙහෙවර සමඟ සම්බන්ධ වීමට ඔබගේ සාමාජිකත්ව
                අයදුම්පත යොමු කරන්න.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#application"
                  className="rounded-xl bg-[#6d1f2b] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#571822]"
                >
                  සාමාජිකත්ව අයදුම්පත
                </a>

                <a
                  href="#information"
                  className="rounded-xl border border-[#6d1f2b] px-6 py-3 text-center font-semibold text-[#6d1f2b] transition hover:bg-[#6d1f2b] hover:text-white"
                >
                  වැඩි විස්තර
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
              පහත අයදුම්පතේ අවශ්‍ය තොරතුරු නිවැරදිව ඇතුළත් කර
              පදනම වෙත යොමු කරන්න.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl border border-black/5 bg-[#faf8f3] p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6d1f2b] text-xl text-white">
                01
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#5b1823]">
                තොරතුරු ඇතුළත් කරන්න
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                ඔබගේ මූලික පුද්ගලික හා සම්බන්ධතා තොරතුරු
                නිවැරදිව සම්පූර්ණ කරන්න.
              </p>
            </article>

            <article className="rounded-3xl border border-black/5 bg-[#faf8f3] p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#b08a57] text-xl text-white">
                02
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#5b1823]">
                තොරතුරු පරීක්ෂා කරන්න
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Submit කිරීමට පෙර ඔබ ඇතුළත් කළ තොරතුරු නැවත
                පරීක්ෂා කරන්න.
              </p>
            </article>

            <article className="rounded-3xl border border-black/5 bg-[#faf8f3] p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6d1f2b] text-xl text-white">
                03
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#5b1823]">
                අයදුම්පත යොමු කරන්න
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                සම්පූර්ණ කළ අයදුම්පත පදනම වෙත යොමු කිරීම සඳහා
                Submit කරන්න.
              </p>
            </article>
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
              පහත තොරතුරු සම්පූර්ණ කර අයදුම්පත යොමු කරන්න.
            </p>
          </div>

          <form
            action="#"
            method="POST"
            className="rounded-3xl border border-black/5 bg-white p-6 shadow-xl sm:p-8 lg:p-10"
          >
            {/* Personal Information */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#b08a57]">
                Personal Information
              </p>

              <h3 className="mt-2 text-xl font-bold text-[#5b1823]">
                පුද්ගලික තොරතුරු
              </h3>
            </div>

            <div className="mt-7 space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  සම්පූර්ණ නම{" "}
                  <span className="text-red-600">*</span>
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder="උදා: ඒ. බී. සී. පෙරේරා"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-[#6d1f2b] focus:ring-2 focus:ring-[#6d1f2b]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="nic"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  ජාතික හැඳුනුම්පත් අංකය{" "}
                  <span className="text-red-600">*</span>
                </label>

                <input
                  id="nic"
                  name="nic"
                  type="text"
                  required
                  placeholder="උදා: 199012345678"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-[#6d1f2b] focus:ring-2 focus:ring-[#6d1f2b]/10"
                />
              </div>
            </div>

            {/* Contact */}
            <div className="mt-10 border-t border-slate-100 pt-8">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#b08a57]">
                Contact Details
              </p>

              <h3 className="mt-2 text-xl font-bold text-[#5b1823]">
                සම්බන්ධතා තොරතුරු
              </h3>
            </div>

            <div className="mt-7 grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  දුරකථන අංකය{" "}
                  <span className="text-red-600">*</span>
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="07X XXX XXXX"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-[#6d1f2b] focus:ring-2 focus:ring-[#6d1f2b]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  විද්‍යුත් තැපෑල (Email)
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-[#6d1f2b] focus:ring-2 focus:ring-[#6d1f2b]/10"
                />
              </div>
            </div>

            {/* Address */}
            <div className="mt-7">
              <label
                htmlFor="address"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                පදිංචි ලිපිනය{" "}
                <span className="text-red-600">*</span>
              </label>

              <textarea
                id="address"
                name="address"
                required
                rows={4}
                placeholder="ඔබගේ ස්ථිර ලිපිනය ඇතුළත් කරන්න"
                className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-[#6d1f2b] focus:ring-2 focus:ring-[#6d1f2b]/10"
              />
            </div>

            {/* Notice */}
            <div className="mt-8 rounded-2xl border border-[#b08a57]/20 bg-[#f5efe5] p-5">
              <p className="text-sm font-semibold text-[#5b1823]">
                වැදගත්
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                අයදුම්පත යොමු කිරීමට පෙර සියලු තොරතුරු නිවැරදි බව
                පරීක්ෂා කරන්න.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="reset"
                className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-600 transition hover:bg-slate-50"
              >
                මකන්න
              </button>

              <button
                type="submit"
                className="rounded-xl bg-[#6d1f2b] px-7 py-3 font-semibold text-white transition hover:bg-[#571822]"
              >
                අයදුම්පත යොමු කරන්න
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Future System */}
      <section className="bg-[#5b1823] py-20 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e5c990]">
            Future Membership System
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            සාමාජිකත්ව කළමනාකරණය තවත් ඉදිරියට
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-white/70">
            ඉදිරි අදියරකදී මෙම අයදුම්පත database එකක් සමඟ සම්බන්ධ කර,
            application number, approval status සහ member records
            කළමනාකරණය කළ හැකි පූර්ණ membership system එකක්
            බවට සංවර්ධනය කළ හැක.
          </p>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 text-left sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
              <p className="font-bold text-[#e5c990]">01</p>
              <p className="mt-2 font-semibold">Online Application</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
              <p className="font-bold text-[#e5c990]">02</p>
              <p className="mt-2 font-semibold">Application Review</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
              <p className="font-bold text-[#e5c990]">03</p>
              <p className="mt-2 font-semibold">Member Record</p>
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
            අයදුම්පත පුරවන්න
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