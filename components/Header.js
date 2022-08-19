import Link from "next/link";
import styles from "@components/Header.module.css";

export default function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">
              <a className={styles.nav_link_styles}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className={styles.nav_link_styles}>Blog</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
