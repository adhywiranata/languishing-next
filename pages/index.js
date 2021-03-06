import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Locale {useRouter().locale}</h1>
      </main>
    </div>
  );
}
