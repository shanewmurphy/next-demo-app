import styles from "./postlist.module.css";
import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";
import { GraphQLClient } from "graphql-request";
import { API_URL } from "@config/index";

export default function PosListPage({ posts }) {
  return (
    <div className={styles.row_grid_layout}>
      {posts.map((posts, slug, title, id) => (
        <div key={posts.id} className={styles.post_column_item}>
          <div>
            <Image
              src={posts.postImage.url}
              width={posts.postImage.width}
              height={posts.postImage.height}
              alt={posts.title}
            />
          </div>
          <div className={styles.author_date_container}>
            <div>
              <h6>{posts.author.author}</h6>
            </div>
            <div>
              <span>{format(new Date(posts.date), "dd, LLLL yyyy")}</span>
            </div>
          </div>
          <div>
            <h3>{posts.title}</h3>
            <p>{posts.excerpt}</p>
          </div>
          <div>
            <Link href={`/blog/` + posts.slug} key={posts.slug}>
              <a className={styles.post_article_link}>Read Article</a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
export async function getStaticProps() {
  const graphcms = new GraphQLClient(`${API_URL}`);

  const { posts } = await graphcms.request(
    `
    {
      posts (orderBy: createdAt_DESC) {
        id
        title
        slug
        excerpt
        date
        slug
        author {
          author
        }
        postImage {
          height
          url
          width
        }
      }
    }
    
    `
  );
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}
