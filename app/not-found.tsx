import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#faf8f3] px-4">
      <div className="w-full max-w-2xl text-center">
        <div className="rounded-[2rem] border border-[#b08a57]/20 bg-white p-8 shadow-xl sm:p-12">
          <Image
            src="/foundation-logo.png"
            alt="කන්නන්ගර පදනම"
            width={180}
            height={180}
            className="mx-auto h-28 w-28 object-contain sm:h-36 sm:w-36"
          />

          <p className="mt-8 text-7xl font-extrabold text-[#6d1f2b] sm:text-8xl">
            404
          </p>

          <h1 className="mt-4 text-3xl font-bold text-[#5b1823] sm:text-4xl">
            පිටුව හමු නොවීය
          </h1>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-slate-600">
            ඔබ සොයන පිටුව නොමැති විය හැක, ඉවත් කර තිබිය හැක,
            නැතහොත් URL එක වැරදි විය හැක.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex rounded-xl bg-[#6d1f2b] px-7 py-3 font-semibold text-white transition hover:bg-[#571822]"
          >
            මුල් පිටුවට යන්න
          </Link>
        </div>
      </div>
    </main>
  );
}