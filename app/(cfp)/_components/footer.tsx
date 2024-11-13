import Image from "next/image";
import Link from "next/link";
import FacebookLogo from "./logos/facebook";
import FlickrLogo from "./logos/flickr";
import InstagramLogo from "./logos/instagram";
import TelegramLogo from "./logos/telegram";
import TwitterLogo from "./logos/twitter";
import YoutubeLogo from "./logos/youtube";

export default function Footer() {
  return (
    <footer className="text-blue space-y-7">
      <LinksSection />
      <hr className="border-blue pb-7" />
      <SocialMediasSection />
    </footer>
  );
}

function LinksSection() {
  return (
    <div className="flex justify-between">
      <FooterSubMenu
        title="連結"
        links={[
          { text: "首頁", href: "" },
          { text: "年會主題", href: "theme" },
          { text: "一般議程投稿", href: "normal" },
          { text: "開放式議程投稿", href: "undefined" },
          { text: "海報投稿", href: "poster" },
        ]}
      />
      <FooterSubMenu
        title="支持我們"
        links={[
          { text: "我要贊助", href: "sponsor" },
          { text: "索取贊助徵求書", href: "request-sponsorship" },
        ]}
      />
      <FooterSubMenuGrid
        title="歷年主題網站"
        links={[
          { text: "2013", href: "https://sitcon.org/2013" },
          { text: "2014", href: "https://sitcon.org/2014" },
          { text: "2015", href: "https://sitcon.org/2015" },
          { text: "2016", href: "https://sitcon.org/2016" },
          { text: "2017", href: "https://sitcon.org/2017" },
          { text: "2018", href: "https://sitcon.org/2018" },
          { text: "2019", href: "https://sitcon.org/2019" },
          { text: "2020", href: "https://sitcon.org/2020" },
          { text: "2021", href: "https://sitcon.org/2021" },
          { text: "2022", href: "https://sitcon.org/2022" },
          { text: "2024", href: "https://sitcon.org/2024" },
        ]}
      />
      <FooterSubMenu
        title="聯絡我們"
        links={[
          { text: "contact@sitcon.org", href: "mailto:contact@sitcon.org" },
        ]}
      />
    </div>
  );
}

function SocialMediasSection() {
  return (
    <div className="flex justify-between">
      <div className="flex items-end gap-6">
        <Image
          src="/assets/logo-blue.png"
          className="-translate-y-1"
          alt="SITCON"
          width={200}
          height={100}
        />
        <p>
          學生計算機年會 <br /> Student Information Technology Conference
        </p>
      </div>
      <div className="flex items-end gap-5">
        <RadioLinkButton href="https://sitcon.org/fb" logo={<FacebookLogo />} />
        <RadioLinkButton
          href="https://sitcon.org/twitter"
          logo={<TwitterLogo />}
        />
        <RadioLinkButton href="https://sitcon.org/yt" logo={<YoutubeLogo />} />
        <RadioLinkButton
          href="https://sitcon.org/instagram"
          logo={<InstagramLogo />}
        />
        <RadioLinkButton
          href="https://sitcon.org/flickr"
          logo={<FlickrLogo />}
        />
        <RadioLinkButton href="https://sitcon.org/tg" logo={<TelegramLogo />} />
      </div>
    </div>
  );
}

interface LinkText {
  text: string;
  href: string;
}

function FooterSubMenu({ title, links }: { title: string; links: LinkText[] }) {
  return (
    <ul className="flex flex-col gap-2">
      <li className="mb-2 font-bold">{title}</li>
      {links.map((link) => {
        const { text, href } = link;
        return (
          <li key={href}>
            <Link className="hover:opacity-70" href={href}>
              {text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

function FooterSubMenuGrid({
  title,
  links,
}: {
  title: string;
  links: LinkText[];
}) {
  return (
    <ul>
      <p className="mb-4 font-bold">{title}</p>
      <ul className="grid grid-cols-6 grid-rows-2 items-start justify-start gap-2">
        {links.map((link) => {
          const { text, href } = link;
          return (
            <li key={href}>
              <Link className="hover:opacity-70" href={href}>
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </ul>
  );
}

function RadioLinkButton({
  logo,
  href,
}: {
  logo: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="text-blue border-blue hover:bg-blue flex h-12 w-12 items-center justify-center rounded-full border px-3 py-1 hover:text-white"
    >
      {logo}
    </Link>
  );
}
