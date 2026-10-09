import { notFound } from "next/navigation";
import { EnglishPage } from "../../../components/EnglishSite";

const validSlugs = new Set([
  "about",
  "competitions",
  "results",
  "membership",
  "scholarships",
  "news",
  "gallery",
  "contact",
  "commemoration",
  "competitions/2026-art",
]);

export default async function EnglishSubPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const key = slug.join("/");
  if (!validSlugs.has(key)) notFound();
  return <EnglishPage slug={key} />;
}
