import Link from "next/link";
import styles from "@/styles/Navbar.module.css";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const SCROLL_TO_COLOR = 100;
  const [windowScroll, setWindowScroll] = useState(0);
  const color = useMemo(() => {
    return windowScroll >= SCROLL_TO_COLOR;
  });

  const changeWindowScroll = useCallback(() => {
    const scroll = window.scrollY;
    setWindowScroll(scroll);
  }, [setWindowScroll]);

  useEffect(() => {
    if (!window) return;

    window.addEventListener("scroll", changeWindowScroll);
    return () => window.removeEventListener("scroll", changeWindowScroll);
  });

  return (
    <div
      className={
        color ? [styles.header, styles.headerBg].join(" ") : styles.header
      }
    >
      <Link href={"/"}>
        <h1>Federico Calò</h1>
      </Link>
      <ul
        className={
          click ? [styles.navMenu, styles.active].join(" ") : styles.navMenu
        }
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/presentazioni">Chi sono</Link>
        </li>
        <li>
          <Link href="/progetti">Progetti</Link>
        </li>
        <li>
          <Link href="/servizi">Servizi</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contatti">Contatti</Link>
        </li>
      </ul>
      <div className={styles.hamburger} onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
