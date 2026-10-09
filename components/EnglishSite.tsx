import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

const foundationName = "Dr. C.W.W. Kannangara Commemorative Foundation";

function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden bg-[#fffaf3] px-4 pb-8 pt-14 text-[#3a2020] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl border-t border-[#d6a84f]/30 pt-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/foundation-logo.png" alt="Kannangara Foundation" width={48} height={48} className="h-12 w-12 object-contain" />
              <div>
                <p className="font-bold text-[#6d1f2b]">Kannangara Foundation</p>
                <p className="text-xs text-slate-500">{foundationName}</p>
              </div>
            </div>
          </div>
          <div>
            <p className="font-semibold text-[#6d1f2b]">Email</p>
            <a href="mailto:kannangaramf@gmail.com" className="mt-2 block text-sm text-slate-600 hover:text-[#6d1f2b]">kannangaramf@gmail.com</a>
          </div>
          <div>
            <p className="font-semibold text-[#6d1f2b]">Follow us</p>
            <div className="mt-2 flex gap-4 text-sm">
              <a href="https://facebook.com/drcwwkannangaracf" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-[#6d1f2b]">Facebook</a>
              <a href="https://instagram.com/dr_cww_kannangara_cf" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-[#6d1f2b]">Instagram</a>
            </div>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-slate-500">© 2026 Dr. C.W.W. Kannangara Commemorative Foundation. All rights reserved.</p>
      </div>
      <div className="absolute bottom-0 left-0 h-2 w-full bg-[#6d1f2b]" />
      <div className="absolute bottom-0 right-0 h-2 w-1/3 bg-[#d6a84f]" />
    </footer>
  );
}

function PageShell({ children }: { children: React.ReactNode }) {
  return <main className="min-h-screen bg-[#faf8f3] text-slate-900"><Navbar />{children}<Footer /></main>;
}

export function EnglishHome() {
  const programmes = [
    ["Educational Competitions", "Competitions that encourage students' knowledge, creativity and skills.", "/en/competitions"],
    ["Scholarship Programme", "A programme intended to strengthen educational opportunities for children.", "/en/scholarships"],
    ["Kannangara Commemoration", "Programmes held in remembrance of Dr. C.W.W. Kannangara and his service to education.", "/en/commemoration"],
  ];

  return <PageShell>
    <section className="overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
        <div>
          <span className="inline-flex rounded-full border border-[#b08a57]/30 bg-[#b08a57]/10 px-4 py-2 text-sm font-semibold text-[#7d6038]">Education • Heritage • Service</span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#5b1823] sm:text-5xl lg:text-6xl">For the future of the next generation</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">The Foundation carries forward the educational vision and legacy of Dr. C.W.W. Kannangara through educational and social programmes for children.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#programmes" className="rounded-xl bg-[#6d1f2b] px-6 py-3 text-center font-semibold text-white hover:bg-[#571822]">Our Programmes</a>
            <Link href="/en/about" className="rounded-xl border border-[#6d1f2b] px-6 py-3 text-center font-semibold text-[#6d1f2b] hover:bg-[#6d1f2b] hover:text-white">About the Foundation</Link>
          </div>
        </div>
        <div className="relative mx-auto max-w-lg overflow-hidden rounded-[2rem] border border-[#b08a57]/30 bg-[#eadfcf] shadow-2xl">
          <img src="/kannangara.jpg" alt="Dr. C.W.W. Kannangara" className="h-[520px] w-full object-cover object-top sm:h-[600px]" />
          <div className="absolute left-5 top-5 rounded-2xl border border-white/60 bg-white/90 p-2 shadow-lg"><Image src="/foundation-logo.png" alt="Kannangara Foundation" width={72} height={72} className="h-16 w-16 object-contain" /></div>
        </div>
      </div>
    </section>

    <section className="border-y border-[#d6a84f]/20 bg-white/60 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="rounded-3xl border border-[#d6a84f]/30 bg-[#fffaf3] p-6 md:flex md:items-center md:justify-between"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#9a7440]">2026 Commemoration</p><h2 className="mt-2 text-2xl font-bold text-[#5b1823]">142nd Commemoration</h2><p className="mt-2 text-slate-600">14 October 2026 · 8:30 a.m. · Matugama Zonal Education Office Auditorium</p></div><Link href="/en/commemoration" className="mt-5 inline-flex rounded-xl bg-[#6d1f2b] px-5 py-3 font-semibold text-white md:mt-0">View Event</Link></div></div>
    </section>

    <section id="programmes" className="py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#9a7440]">Our Programmes</p><h2 className="mt-3 text-3xl font-bold text-[#5b1823] sm:text-4xl">Education, creativity and remembrance</h2><div className="mt-10 grid gap-6 md:grid-cols-3">{programmes.map(([title, description, href]) => <Link key={href} href={href} className="rounded-3xl border border-[#d6a84f]/25 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><h3 className="text-xl font-bold text-[#5b1823]">{title}</h3><p className="mt-3 leading-7 text-slate-600">{description}</p><span className="mt-6 inline-block text-sm font-bold text-[#6d1f2b]">Learn more →</span></Link>)}</div></div></section>

    <section className="bg-[#6d1f2b] py-16 text-white"><div className="mx-auto max-w-5xl px-4 text-center sm:px-6"><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#e8c777]">Main Objective</p><blockquote className="mt-5 text-2xl font-semibold leading-relaxed sm:text-3xl">“To create a generation of intelligent and skilled children, in line with the vision of Kannangara.”</blockquote><p className="mx-auto mt-5 max-w-3xl leading-7 text-white/80">The Foundation also seeks to broaden public awareness and understanding of the Foundation and build a social approach to protecting the policy of free education.</p></div></section>
  </PageShell>;
}

const pages: Record<string, { title: string; intro: string; sections: { title: string; body: string }[]; links?: { label: string; href: string }[] }> = {
  about: {
    title: "About the Foundation",
    intro: "The Dr. C.W.W. Kannangara Commemorative Foundation was established to carry forward the educational vision and legacy of Dr. C.W.W. Kannangara.",
    sections: [
      { title: "History", body: "The Foundation began in 2012. In 2013, with local support, a life-size statue of Dr. C.W.W. Kannangara was erected near the samadhi where his ashes are kept, and it was opened by the then President Mahinda Rajapaksa. Annual  commemorations have been held at the samadhi with school children." },
      { title: "Educational Programmes", body: "From 2019, the Foundation conducted educational and creative competitions, including knowledge competitions, islandwide art competitions, essay competitions and other programmes. Activities were temporarily interrupted during 2020–2021 due to COVID-19 and restarted during 2022–2023 with donor support." },
      { title: "Community Service", body: "The Foundation has also supported school libraries around the Matugama area by donating books, alongside its educational and commemorative activities." },
      { title: "Main Objective", body: "To create a generation of intelligent and skilled children, in line with the vision of Kannangara. The Foundation also seeks to broaden public awareness and understanding of the Foundation and build a social approach to protecting the policy of free education." },
    ],
    links: [{ label: "View Programmes", href: "/en/competitions" }, { label: "Contact the Foundation", href: "/en/contact" }],
  },
  competitions: {
    title: "2026 Competitions",
    intro: "The 2026 competition programme included educational and creative activities for school students and university students.",
    sections: [
      { title: "Art Competitions", body: "Primary and post-primary islandwide art competitions were held to encourage creativity and artistic skills." },
      { title: "Essay Competitions", body: "Junior and secondary essay competitions encouraged language ability, expression and creative thinking." },
      { title: "Knowledge Measurement", body: "Primary and secondary knowledge competitions focused on students' knowledge and intellectual abilities." },
      { title: "Poetry", body: "Senior and open poetry competitions encouraged literary and creative expression." },
      { title: "Academic Writing", body: "An academic writing competition was held for university students on relevant themes including free education." },
    ],
    links: [{ label: "View 2026 Results", href: "/en/results" }, { label: "View Art Competition Archive", href: "/en/competitions/2026-art" }],
  },
  results: {
    title: "2026 Official Results",
    intro: "The official 2026 competition results published by the Foundation are available on the website.",
    sections: [
      { title: "Results Archive", body: "The 2026 results cover art, essay, poetry, academic writing and knowledge measurement competitions. The Sinhala results page remains the complete official results record, including all listed placements and school names." },
    ],
    links: [{ label: "Open Official Results", href: "/results" }, { label: "View Competitions", href: "/en/competitions" }],
  },
  membership: {
    title: "Membership",
    intro: "Join the Kannangara Foundation and become part of its educational and social mission.",
    sections: [
      { title: "Membership", body: "Membership information and the application process are being developed as part of the Foundation's official website. The membership application form will follow the Foundation's approved information and requirements." },
      { title: "Application", body: "For the current membership application process, please use the official Sinhala membership page until the English form is finalized." },
    ],
    links: [{ label: "Open Membership Page", href: "/membership" }, { label: "Contact the Foundation", href: "/en/contact" }],
  },
  scholarships: {
    title: "Scholarship Programme",
    intro: "Information about the Foundation's scholarship programme will be expanded with official details in the future.",
    sections: [
      { title: "More information coming later", body: "The Foundation plans to publish a fuller account of the scholarship programme, including its history, purpose, past awards and official application information after the October 2026 commemoration event." },
    ],
    links: [{ label: "Contact the Foundation", href: "/en/contact" }],
  },
  news: {
    title: "News & Announcements",
    intro: "Official updates and announcements from the Kannangara Foundation.",
    sections: [
      { title: "142nd Commemoration", body: "The 142nd commemoration of Dr. C.W.W. Kannangara is scheduled for 14 October 2026 at the Matugama Zonal Education Office Auditorium." },
      { title: "2026 Competition Results", body: "The official results of the 2026 educational and creative competitions are available on the results page." },
      { title: "2026 Competition Programme", body: "Information about the 2026 art, essay, poetry, academic writing and knowledge measurement competitions is available in the competitions archive." },
    ],
    links: [{ label: "Commemoration", href: "/en/commemoration" }, { label: "Results", href: "/en/results" }],
  },
  gallery: {
    title: "Gallery",
    intro: "A growing collection of photographs and memories from the Foundation's activities.",
    sections: [
      { title: "2026 Commemoration", body: "Photographs and memories from the 142nd commemoration will be added after the event." },
      { title: "2026 Competitions & Achievements", body: "The gallery will document educational and creative competitions and achievements from 2026." },
      { title: "Foundation Memories", body: "Historical photographs and memories of the Foundation will be added as official material becomes available." },
    ],
  },
  contact: {
    title: "Contact the Foundation",
    intro: "Get in touch with the Dr. C.W.W. Kannangara Commemorative Foundation.",
    sections: [
      { title: "Address", body: "Lulbadduwa, Ittapana" },
      { title: "Mobile", body: "071 449 4392" },
      { title: "Email", body: "kannangaramf@gmail.com" },
      { title: "Social Media", body: "Facebook: facebook.com/drcwwkannangaracf\nInstagram: dr_cww_kannangara_cf" },
    ],
  },
  "competitions/2026-art": {
    title: "2026 Art Competition Archive",
    intro: "The 2026 islandwide art competition is presented here as an archive of the completed programme.",
    sections: [
      { title: "Categories", body: "The competition included Primary and Post-Primary sections." },
      { title: "2026 Status", body: "The 2026 competition has been completed. Official results are available through the Foundation's results page." },
      { title: "Recognition", body: "Winners and award recipients are recognized through the Foundation's official results and award programmes." },
    ],
    links: [{ label: "View Official Results", href: "/en/results" }, { label: "Back to Competitions", href: "/en/competitions" }],
  },
  commemoration: {
    title: "142nd Commemoration",
    intro: "The 142nd commemoration of Dr. C.W.W. Kannangara is a Foundation programme dedicated to remembering his service and educational vision.",
    sections: [
      { title: "Date", body: "14 October 2026" },
      { title: "Time", body: "8:30 a.m." },
      { title: "Venue", body: "Matugama Zonal Education Office Auditorium" },
      { title: "Programme Highlights", body: "Recognition of 2026 competition winners, presentation of trophies, prizes and certificates, and reflection on the educational vision of Kannangara." },
      { title: "Event Memories", body: "Photographs, certificates, trophies and other official memories from the event can be added to this page after the ceremony." },
    ],
    links: [{ label: "View 2026 Results", href: "/en/results" }, { label: "About the Foundation", href: "/en/about" }],
  },
};

export function EnglishPage({ slug }: { slug: string }) {
  const page = pages[slug];
  if (!page) return null;

  return <PageShell>
    <section className="bg-[#6d1f2b] px-4 py-16 text-white sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#e8c777]">Kannangara Foundation</p><h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl">{page.title}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">{page.intro}</p></div></section>
    <section className="py-16"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><div className="grid gap-6">{page.sections.map((section) => <article key={section.title} className="rounded-3xl border border-[#d6a84f]/25 bg-white p-7 shadow-sm"><h2 className="text-2xl font-bold text-[#5b1823]">{section.title}</h2><p className="mt-3 whitespace-pre-line leading-8 text-slate-600">{section.body}</p></article>)}</div>{page.links && <div className="mt-10 flex flex-col gap-3 sm:flex-row">{page.links.map((link) => <Link key={link.href} href={link.href} className="rounded-xl bg-[#6d1f2b] px-6 py-3 text-center font-semibold text-white hover:bg-[#571822]">{link.label}</Link>)}</div>}</div></section>
  </PageShell>;
}
