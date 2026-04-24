import { HomeFooter } from "./HomeFooter";
import { HomeHeader } from "./HomeHeader";
import { HomeMain } from "./HomeMain";
import styles from "./HomeLayout.module.css";

export function HomeLayout() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <HomeHeader titleClassName={styles.title} subtitleClassName={styles.subtitle} />
      </header>
      <main className={styles.main}>
        <HomeMain paragraphClassName={styles.paragraph} />
      </main>
      <footer className={styles.footer}>
        <HomeFooter textClassName={styles.footerText} />
      </footer>
    </div>
  );
}
