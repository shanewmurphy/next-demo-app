import styles from "./hero.module.css";

export default function HeroHome() {
  return (
    <div className={styles.hero_container}>
      <div className={styles.hero_content_container}>
        <h1>
          Designing, building digital products, helping brands have a delightful
          online experience.
        </h1>
        <p>
          I believe that great design should not be out of reach, so my services
          are less than half the price of a digital design Agency.
        </p>
        {/* <div className={styles.hero_btn_container}>Let's Talk</div> */}
      </div>
      <div className={styles.hero_img_container}></div>
    </div>
  );
}
