import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Image as ImageIcon,
  Sparkles,
} from "lucide-react";

const collections = [
  {
    year: "2026",
    title: "කන්නන්ගර ගුණ සමරු උළෙල",
    description:
      "2026 ඔක්තෝබර් 14 වන දින පැවැත්වෙන 142 වන ජන්ම දින සැමරුම් උළෙලේ විශේෂ අවස්ථා.",
    status: "ඉදිරියේදී යාවත්කාලීන කෙරේ",
  },
  {
    year: "2026",
    title: "2026 තරඟ හා ජයග්‍රහණ",
    description:
      "2026 වසරේ පැවැත්වූ අධ්‍යාපනික හා නිර්මාණාත්මක තරඟ සහ ජයග්‍රාහකයන්ගේ විශේෂ අවස්ථා.",
    status: "ඉදිරියේදී යාවත්කාලීන කෙරේ",
  },
  {
    year: "Archive",
    title: "පදනමේ මතක සටහන්",
    description:
      "කන්නන්ගර ගුණානුස්මරණ පදනමේ වැඩසටහන් සහ ක්‍රියාකාරකම්වල මතක සටහන් සඳහා වෙන් වූ අවකාශය.",
    status: "ඡායාරූප ඉදිරියේදී එක් කෙරේ",
  },
];

export default function GalleryPage() {
  return (
    <main className="bg-[#fffaf3] text-[#3a2020]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#541b25]">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#d6a84f]/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-[#d6a84f]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d6a84f]/30 bg-[#d6a84f]/10 px-4 py-2 text-sm font-semibold text-[#f1d58c]">
              <Camera className="h-4 w-4" />
              ඡායාරූප ගැලරිය
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
              අපගේ
              <span className="text-[#e2bd68]"> මතක සටහන්</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              කන්නන්ගර ගුණානුස්මරණ පදනමේ වැඩසටහන්,
              සැමරුම් සහ දරුවන්ගේ ජයග්‍රහණ සමඟ බැඳුණු
              විශේෂ අවස්ථා සඳහා වෙන් වූ ඡායාරූප ගැලරිය.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center sm:px-8 lg:py-20">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#541b25] text-[#e2bd68]">
          <ImageIcon className="h-6 w-6" />
        </div>

        <h2 className="mt-6 text-3xl font-bold text-[#541b25]">
          පදනමේ විශේෂ අවස්ථා
        </h2>

        <p className="mt-5 leading-8 text-[#6d5555]">
          මෙම ගැලරිය ඉදිරියේදී පදනමේ නිල ඡායාරූප,
          උත්සව අවස්ථා සහ වැඩසටහන් මතක සටහන් සමඟ
          යාවත්කාලීන කෙරේ.
        </p>
      </section>

      {/* Collections */}
      <section className="border-y border-[#eadfce] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection) => (
              <div
                key={collection.title}
                className="group overflow-hidden rounded-2xl border border-[#eadfce] bg-[#fffaf3] transition hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Visual placeholder */}
                <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-[#541b25]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(214,168,79,0.18),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(214,168,79,0.12),transparent_35%)]" />

                  <div className="relative text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d6a84f]/25 bg-[#d6a84f]/10 text-[#e2bd68]">
                      <Camera className="h-6 w-6" />
                    </div>

                    <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-[#d6a84f]">
                      {collection.year}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <span className="inline-flex rounded-full bg-[#f0e5d4] px-3 py-1 text-xs font-semibold text-[#725d45]">
                    {collection.status}
                  </span>

                  <h3 className="mt-4 text-xl font-bold leading-8 text-[#541b25]">
                    {collection.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#6d5555]">
                    {collection.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* October event */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="overflow-hidden rounded-[2rem] bg-[#541b25] p-8 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#e2bd68]">
                <Sparkles className="h-4 w-4" />
                2026 විශේෂ අවස්ථාව
              </div>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                142 වන ජන්ම දින සැමරුම් උළෙල
              </h2>

              <p className="mt-5 max-w-2xl leading-8 text-white/70">
                2026 ඔක්තෝබර් 14 වන දින පැවැත්වෙන
                සැමරුම් උළෙලෙන් පසු එහි ඡායාරූප සහ
                විශේෂ අවස්ථා මෙම ගැලරියට එක් කිරීමට හැකිය.
              </p>
            </div>

            <Link
              href="/commemoration"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d6a84f] px-6 py-3.5 font-bold text-[#3a2020] transition hover:bg-[#e5bd69]"
            >
              උළෙල ගැන බලන්න
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}