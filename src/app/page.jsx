import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div>
          <h1>
            The agency <br /> thrilled to <br />
            announce{" "}
          </h1>
          <p>
            that will benefit employees at all levels. This innovative
            initiative aims to boost morale, inspire great work, and reward
            staff for their contributions.
          </p>
        </div>
        <Image
          src="/pngegg.png"
          width={0}
          height={0}
          sizes="100vw"
          alt="image"
          style={{ width: "100%", height: "auto" }}
        />
      </section>
    </main>
  );
}
