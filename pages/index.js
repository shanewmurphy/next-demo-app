import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "/components/Header";
import Hero from "/components/Hero";
import Skills from "/components/Skills";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next demo app</title>
        <meta name="description" content="Demo Blog App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Skills />
      </div>
      <div></div>
    </div>
  );
}
