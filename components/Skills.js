import styles from "./skills.module.css";

export default function SkillsSection() {
  return (
    <div>
      <div className={styles.skill_section_container}>
        <div className={styles.skill_inner_left_container}>
          <h1>Some benfits & skills I bring when working with me</h1>
        </div>
        <div className={styles.skill_inner_container}>
          <div>
            <h5>UX UI Design</h5>
            <ul>
              <li>User Interface</li>
              <li>User Experience Design</li>
              <li>Website & Mobile Design</li>
              <li>Design System</li>
              <li>Wireframing</li>
              <li>Prototype</li>
            </ul>
          </div>
          <div>
            <h5>Web Development</h5>
            <ul>
              <li>Front End (HTML, CSS, React)</li>
              <li>Backend (Graphcms, MongoDB)</li>
              <li>Shopify</li>
              <li>Next JS</li>
              <li>E-commerce</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
