import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-blue sticky left-0 right-0 top-0 flex justify-center">
      <ul className="container flex items-center justify-between p-4">
        <Image
          src="/assets/logo.png"
          alt="logo"
          className="-translate-y-1"
          width={130}
          height={65}
        />
        <ul className="text-light-brown flex items-center justify-end gap-8">
          <NavbarItem link="/">首頁</NavbarItem>
          <NavbarItem link="/theme">年會主題</NavbarItem>
          <NavbarItem link="/normal">一般議程徵稿</NavbarItem>
          <NavbarItem link="/undefined">開放式議程徵稿</NavbarItem>
          <NavbarItem link="/poster">海報徵稿</NavbarItem>
        </ul>
      </ul>
    </nav>
  );
}

function NavbarItem({
  children,
  link,
}: Readonly<{ children: React.ReactNode; link: string }>) {
  return (
    <li className="hover:text-white">
      <a href={link}>{children}</a>
    </li>
  );
}
