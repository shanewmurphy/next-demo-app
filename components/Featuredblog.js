import styles from "./Featuredblog.module.css";

export default function Featuredblog() {
  return (
    <div className={styles.featuredBlog_container}>
      <div className={styles.featured_blog_img}></div>
      <div className={styles.featured_blog_content}>
        <div className={styles.featured_details_container}>
          <div>
            <h5>Featured Article</h5>
          </div>
          <div>
            <h6>12/05/2022</h6>
          </div>
        </div>
        <div>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            viverra turpis et nibh ornare volutpat. Maecenas quis vulputate
            lacus. Nunc at consequat mi. Cras commodo, sapien vel suscipit
            ultricies, nisi nisl tristique tortor, id eleifend velit magna quis
            est.
          </p>
          <div className={styles.link_container}>
            <a className={styles.read_article}>Continue Reading</a>
          </div>
        </div>
      </div>
    </div>
  );
}
