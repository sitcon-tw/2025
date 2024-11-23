import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

export async function generateMetadata(): Promise<Metadata> {
  const image = "https://sitcon.org/2025/og.jpg";
  const title = "SITCON 2025";
  const description =
    "學生計算機年會（Students’ Information Technology Conference）自 2012 年發起，以學生為本、由學生自發舉辦，長期投身學生資訊教育與推廣開源精神，鼓勵學生們成為實踐者，貢獻程式碼、打造並部署服務、透過實際行動推動專案，最後將這些結晶分享出去，讓更多人能關注你認為重要的議題，打造更緊密的社群。";
  const metadata: Metadata = {
    title,
    authors: [{ name: "SITCON" }],
    keywords: "SITCON, SITCON 2025",
    description,
    metadataBase: new URL("https://sitcon.org/2025/"),
    openGraph: {
      type: "website",
      locale: "zh_TW",
      url: "https://sitcon.org/2025/cfp/",
      title,
      description,
      siteName: "SITCON",
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      creator: "@sitcontw",
      site: "@sitcontw",
      card: "summary_large_image",
      images: image,
      title,
      description,
    },
  };
  return metadata;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <div className="w-full bg-background-light">
        <div className="mx-auto max-w-[1120px]">
          <Footer />
        </div>
      </div>
    </>
  );
}
