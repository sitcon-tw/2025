import Link from "next/link";
import FacebookLogo from "./logos/facebook";
import FlickrLogo from "./logos/flickr";
import InstagramLogo from "./logos/instagram";
import TelegramLogo from "./logos/telegram";
import ThreadsLogo from "./logos/threads";
import YoutubeLogo from "./logos/youtube";
import SitconLogo from "./logos/sitcon";

export default function BaseFooter({
  navigationLinks,
}: {
  navigationLinks: NavigationLink[];
}) {
  return (
    <footer className="space-y-7 bg-background-light px-5 pb-7 pt-4 text-foreground mobile:px-10 mobile:py-16 mobile:pt-16">
      <>
        {/* Desktop Layout 820+ */}
        <div className="flex justify-between max-[820px]:hidden">
          <Links links={navigationLinks} />
          <Support />
          <PastEvents />
          <Contact />
        </div>
        {/* Phone Layout 820 ~ 550 */}
        <div className="block space-y-6 max-[550px]:hidden min-[820px]:hidden">
          <div className="min-[710px]:hidden">
            <Brand />
          </div>
          <div className="flex justify-between">
            <Links links={navigationLinks} />
            <Support />
            <Contact />
          </div>
          <PastEvents />
        </div>
        {/* Phone Layout 550- */}
        <div className="space-y-6 min-[550px]:hidden">
          <Brand />
          <div className="flex justify-between">
            <Links links={navigationLinks} />
            <div className="gpa-6 flex flex-col gap-6">
              <Support />
              <Contact />
            </div>
          </div>
          <PastEvents />
        </div>
      </>
      <hr className="border-foreground pb-7 max-mobile:hidden" />
      <SocialMediasSection />
    </footer>
  );
}

interface NavigationLink {
  text: string;
  href: string;
}

function Links({ links }: { links: NavigationLink[] }) {
  return <FooterSubMenu title="連結" links={links} internal />;
}

function Support() {
  return (
    <FooterSubMenu
      title="支持我們"
      links={[
        { text: "我要贊助", href: "https://sitcon.org/donate" },
        { text: "索取贊助徵求書", href: "https://i.sitcon.org/2025cfs-form/" },
      ]}
      internal={false}
    />
  );
}

function PastEvents() {
  return (
    <FooterSubMenuGrid
      title="歷年網站"
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
        { text: "2023", href: "https://sitcon.org/2023" },
        { text: "2024", href: "https://sitcon.org/2024" },
      ]}
    />
  );
}

function Contact() {
  return (
    <FooterSubMenu
      title="聯絡我們"
      links={[
        { text: "contact@sitcon.org", href: "mailto:contact@sitcon.org" },
      ]}
      internal={false}
    />
  );
}

function Brand() {
  return (
    <div className="item-between flex flex-row gap-6 max-mobile:flex-col mobile:items-end">
      <SitconLogo height={60} width={200} />
      <p className="max-[1060px]:hidden">
        學生計算機年會 <br /> Students&#39; Information Technology Conference
      </p>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="flex items-end gap-2 max-[710px]:w-full max-[710px]:justify-between min-[490px]:gap-5">
      <RadioLinkButton href="https://sitcon.org/fb" logo={<FacebookLogo />} />
      <RadioLinkButton
        href="https://sitcon.org/threads"
        logo={<ThreadsLogo />}
      />
      <RadioLinkButton href="https://sitcon.org/yt" logo={<YoutubeLogo />} />
      <RadioLinkButton
        href="https://sitcon.org/instagram"
        logo={<InstagramLogo />}
      />
      <RadioLinkButton href="https://sitcon.org/flickr" logo={<FlickrLogo />} />
      <RadioLinkButton href="https://sitcon.org/tg" logo={<TelegramLogo />} />
    </div>
  );
}

function SocialMediasSection() {
  return (
    <div className="flex justify-between">
      <div className="max-[710px]:hidden">
        <Brand />
      </div>
      <SocialLinks />
    </div>
  );
}

interface LinkText {
  text: string;
  href: string;
}

function FooterSubMenu({
  title,
  links,
  internal,
}: {
  title: string;
  links: LinkText[];
  internal: boolean;
}) {
  return (
    <ul className="flex flex-col gap-2">
      <li className="mb-2 font-bold">{title}</li>
      {links.map((link) => {
        const { text, href } = link;
        return (
          <li key={href}>
            <Link
              target={internal ? "" : "_blank"}
              className="hover:opacity-70"
              href={href}
            >
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
            <li key={href} className="text-center">
              <a
                target="_blank"
                className="inline-block hover:opacity-70"
                href={href}
              >
                <span className="inline-block">{text}</span>
              </a>
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
      className="flex aspect-square h-10 w-10 items-center justify-center rounded-full border border-foreground px-2 py-1 text-foreground hover:bg-blue hover:text-white mobile:h-12 mobile:w-12 mobile:px-3"
    >
      {logo}
    </Link>
  );
}
