"use client";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useLayoutEffect, useState } from "react";
import SitconLogo from "./logos/sitcon";
import { usePathname } from "next/navigation";

interface MenuItem {
  link: string;
  label: string;
}

export default function Navbar({
  menuItems,
  logoHref = "/cfp",
  onMenuClick = () => {},
}: {
  menuItems: MenuItem[];
  logoHref?: string;
  onMenuClick?: (prev: boolean) => void;
}) {
  const [showMenu, setShowMenu] = useState(false);
  const { scrollY } = useScroll();
  const [isIndex, setIsIndex] = useState(true);
  const pathname = usePathname();
  useLayoutEffect(() => {
    setIsIndex(pathname === "/cfp/");
  }, [pathname]);
  const navBackgroundOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const navBackground = useMotionTemplate`rgba(39, 48, 77, ${navBackgroundOpacity})`;

  const handleMenuClick = () => {
    onMenuClick(showMenu);
    setShowMenu((prev) => !prev);
  };

  // console.log(pathname);
  const allowFadeEffect = isIndex && !showMenu;
  return (
    <nav className="fixed left-0 right-0 top-0 z-30 flex justify-center">
      <motion.div
        className="flex w-full flex-col items-center justify-center transition"
        style={{
          opacity: allowFadeEffect ? navBackgroundOpacity : 1,
          backgroundColor: allowFadeEffect ? navBackground : "rgba(39, 48, 77)",
        }}
      >
        <div className="flex w-full items-center justify-center gap-2 bg-background-light p-3 text-center text-foreground brightness-125">
          <motion.p
            initial={{
              opacity: 0.2,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <Link href="/mail/SITCON-2025.html" className="link">
              行前信
            </Link>
            已經寄出了，快去找找信箱吧！並下載{" "}
            <Link
              href="https://opass.app/open/?event_id=SITCON_2025"
              className="link"
            >
              OPass
            </Link>{" "}
            完成票券綁定～
          </motion.p>
        </div>
        <div className="w-full max-w-[950px] desktop:max-w-[1230px]">
          <ul className="relative flex w-full items-center justify-between p-4 [@media(max-width:900px)]:justify-center">
            <Link href={logoHref}>
              <SitconLogo className="text-foreground" />
            </Link>
            <ul className="flex items-center justify-end gap-6 text-foreground [@media(max-width:900px)]:hidden">
              {menuItems.map(({ link, label }) => (
                <NavbarItem key={link} link={link}>
                  <motion.p
                    initial={{ y: 0, scale: 1 }}
                    whileHover={{ y: -2, scale: 1.2 }}
                    whileTap={{ y: 0, scale: 1.1 }}
                    className={`hover:text-primary ${pathname === link && "font-black text-primary"}`}
                  >
                    {label}
                  </motion.p>
                </NavbarItem>
              ))}
            </ul>

            <AnimatePresence mode="wait">
              <motion.div
                className="absolute right-4 cursor-pointer justify-self-end [@media(min-width:900px)]:hidden"
                onClick={() => handleMenuClick()}
                initial={{ rotate: 0 }}
                animate={{
                  rotate: showMenu ? 360 : 0,
                }}
                exit={{ rotate: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <motion.span
                  key={showMenu ? "close" : "menu"}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="material-symbols-outlined !text-[48px] text-foreground"
                >
                  {showMenu ? "close" : "menu"}
                </motion.span>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              {showMenu && (
                <motion.ul
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-[64px] z-10 flex h-[100vh] w-full flex-col items-end gap-8 border-t border-foreground/50 bg-background-light p-6 text-h3 font-bold shadow-lg md:hidden"
                >
                  {menuItems.map(({ link, label }, index) => (
                    <NavbarItem key={link} link={link}>
                      <motion.p
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.05 * (index + 1),
                        }}
                        className="border-b border-foreground p-2 text-foreground"
                        onClick={() => handleMenuClick()}
                      >
                        {label}
                      </motion.p>
                    </NavbarItem>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </ul>
        </div>
      </motion.div>
    </nav>
  );
}

function NavbarItem({
  children,
  link,
}: Readonly<{ children: React.ReactNode; link: string }>) {
  return (
    <li className="hover:text-white">
      <Link href={link}>{children}</Link>
    </li>
  );
}
