import Navbar from "../../components/Navbar";

const contactCards = [
  {
    title: "ලිපිනය",
    value: "පදනමේ නිල ලිපිනය ඉදිරියේදී මෙහි පළ කෙරේ.",
    icon: "⌂",
  },
  {
    title: "දුරකථන",
    value: "නිල දුරකථන අංකය මෙහි පළ කෙරේ.",
    icon: "☎",
  },
  {
    title: "විද්‍යුත් තැපෑල",
    value: "නිල Email ලිපිනය මෙහි පළ කෙරේ.",
    icon: "@",
  },
];

const quickLinks = [
  {
    title: "තරඟ",
    description: "වත්මන් හා ඉදිරි තරඟ පිළිබඳ තොරතුරු.",
    href: "/competitions",
  },
  {
    title: "සාමාජිකත්වය",
    description: "පදනමේ සාමාජිකත්වය සඳහා අයදුම් කරන්න.",
    href: "/membership",
  },
  {
    title: "පුවත්",
    description: "නවතම නිවේදන හා ක්‍රියාකාරකම්.",
    href: "/news",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#faf8f3] text-slate-900">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#b08a57]/15 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
              Contact Us
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#5b1823] sm:text-5xl">
              අප හා සම්බන්ධ වන්න
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              පදනමේ වැඩසටහන්, තරඟ, සාමාජිකත්වය සහ අනෙකුත් කරුණු
              පිළිබඳ තොරතුරු සඳහා අප හා සම්බන්ධ වන්න.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {contactCards.map((card) => (
              <article
                key={card.title}
                className="rounded-3xl border border-black/5 bg-[#faf8f3] p-7 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6d1f2b] text-xl text-white">
                  {card.icon}
                </div>

                <h2 className="mt-5 text-xl font-bold text-[#5b1823]">
                  {card.title}
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  {card.value}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Social */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Form */}
            <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-lg sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#b08a57]">
                Send a Message
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#5b1823]">
                අපට පණිවිඩයක් යවන්න
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                ඔබගේ විමසීම හෝ යෝජනාව පහත ආකෘතියෙන් ඉදිරිපත් කරන්න.
              </p>

              <form action="#" method="POST" className="mt-8 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      නම <span className="text-red-600">*</span>
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-[#6d1f2b] focus:ring-2 focus:ring-[#6d1f2b]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Email <span className="text-red-600">*</span>
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-[#6d1f2b] focus:ring-2 focus:ring-[#6d1f2b]/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    දුරකථන අංකය
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-[#6d1f2b] focus:ring-2 focus:ring-[#6d1f2b]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    විෂය
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-[#6d1f2b] focus:ring-2 focus:ring-[#6d1f2b]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    පණිවිඩය <span className="text-red-600">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full resize-y rounded-xl border border-slate-200 px-4 py-3.5 outline-none transition focus:border-[#6d1f2b] focus:ring-2 focus:ring-[#6d1f2b]/10"
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-xl bg-[#6d1f2b] px-7 py-3 font-semibold text-white transition hover:bg-[#571822]"
                >
                  පණිවිඩය යවන්න
                </button>
              </form>
            </div>

            {/* Social */}
            <div className="space-y-6">
              <div className="rounded-3xl bg-[#5b1823] p-8 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#e5c990]">
                  Facebook
                </p>

                <h2 className="mt-3 text-2xl font-bold">
                  අපගේ Facebook පිටුව
                </h2>

                <p className="mt-4 leading-7 text-white/70">
                  දෛනික updates, announcements, competitions සහ
                  foundation activities සඳහා අපගේ Facebook පිටුව
                  අනුගමනය කරන්න.
                </p>

                <a
                  href="https://web.facebook.com/drcwwkannangaracf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex rounded-xl bg-[#e5c990] px-6 py-3 font-semibold text-[#5b1823]"
                >
                  Facebook වෙත යන්න
                </a>
              </div>

              <div className="rounded-3xl border border-[#b08a57]/20 bg-[#f5efe5] p-8">
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#b08a57]">
                  Information
                </p>

                <h2 className="mt-3 text-2xl font-bold text-[#5b1823]">
                  ඉක්මන් සබැඳි
                </h2>

                <div className="mt-6 space-y-3">
                  {quickLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block rounded-2xl bg-white p-4 transition hover:shadow-md"
                    >
                      <p className="font-bold text-[#6d1f2b]">
                        {link.title}
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {link.description}
                      </p>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-[#b08a57]/20 bg-white p-8">
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#b08a57]">
                  Location
                </p>

                <h2 className="mt-3 text-2xl font-bold text-[#5b1823]">
                  පදනමේ ස්ථානය
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  නිල ලිපිනය සහ ස්ථාන තොරතුරු තහවුරු කළ පසු
                  මෙහි Google Map / location section එකක්
                  එක් කළ හැක.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Contact System */}
      <section className="bg-[#f5efe5] py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
            Future Contact System
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
            විමසීම් කළමනාකරණය කිරීම
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">
            ඉදිරියේදී contact form එක Django backend එක සමඟ සම්බන්ධ
            කර, පණිවිඩ database එකක සුරක්ෂිත කර administrator dashboard
            එකෙන් කළමනාකරණය කළ හැකි ආකාරයට සංවර්ධනය කළ හැක.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b08a57]">
            Connect With Us
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">
            පදනමේ වැඩසටහන් සමඟ සම්බන්ධ වන්න
          </h2>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/competitions"
              className="rounded-xl bg-[#6d1f2b] px-6 py-3 font-semibold text-white"
            >
              තරඟ බලන්න
            </a>

            <a
              href="/membership"
              className="rounded-xl border border-[#6d1f2b] px-6 py-3 font-semibold text-[#6d1f2b]"
            >
              සාමාජිකත්වය
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