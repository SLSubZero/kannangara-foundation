import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Dr. C.W.W. Kannangara Commemorative Foundation",
    template: "%s | Kannangara Foundation",
  },
  description:
    "Official English-language website of the Dr. C.W.W. Kannangara Commemorative Foundation.",
  alternates: {
    canonical: "/en",
  },
  openGraph: {
    locale: "en_LK",
    url: "/en",
    siteName: "Kannangara Foundation",
    type: "website",
  },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return children;
}
