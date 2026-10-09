import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL("https://kannangarafoundation.lk"),

  title: {
    default:
      "ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ගුණානුස්මරණ පදනම",
    template: "%s | කන්නන්ගර පදනම",
  },

  description:
    "ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ශ්‍රීමතාණන්ගේ අධ්‍යාපනික දැක්ම හා උරුමය ඉදිරියට ගෙන යන කන්නන්ගර ගුණානුස්මරණ පදනමේ නිල වෙබ් අඩවිය.",

  keywords: [
    "කන්නන්ගර පදනම",
    "ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර",
    "කන්නන්ගර ගුණානුස්මරණ පදනම",
    "C.W.W. Kannangara",
    "Kannangara Foundation",
    "Sri Lanka Education",
  ],

  authors: [
    {
      name: "Dr. C.W.W. Kannangara Memorial Foundation",
    },
  ],

  creator: "Dr. C.W.W. Kannangara Memorial Foundation",
  publisher: "Dr. C.W.W. Kannangara Memorial Foundation",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "si_LK",
    url: "/",
    siteName: "කන්නන්ගර පදනම",
    title:
      "ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ගුණානුස්මරණ පදනම",
    description:
      "කන්නන්ගර ශ්‍රීමතාණන්ගේ අධ්‍යාපනික දැක්ම හා උරුමය ඉදිරියට ගෙන යන පදනමේ නිල වෙබ් අඩවිය.",
    images: [
      {
        url: "/foundation-logo.png",
        width: 1200,
        height: 1200,
        alt: "කන්නන්ගර ගුණානුස්මරණ පදනම",
      },
    ],
  },

  twitter: {
    card: "summary",
    title:
      "ආචාර්ය සී.ඩබ්ලිව්.ඩබ්ලිව්. කන්නන්ගර ගුණානුස්මරණ පදනම",
    description:
      "කන්නන්ගර ශ්‍රීමතාණන්ගේ අධ්‍යාපනික දැක්ම හා උරුමය ඉදිරියට ගෙන යන පදනමේ නිල වෙබ් අඩවිය.",
    images: ["/foundation-logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="si">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}