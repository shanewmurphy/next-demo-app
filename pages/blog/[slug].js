import styles from "./singlepost.module.css";
import Header from "@components/Header";

import Image from "next/image";

import { format } from "date-fns";
import { RichText } from "@graphcms/rich-text-react-renderer";

import { GraphQLClient } from "graphql-request";
import { API_URL } from "@config/index";

export default function SinglePostPage({ post }) {
  return (
    <div>
      <Header />
      <div key={post.id} className={styles.page_wrappper}>
        <div className={styles.post_img_container}>
          <Image
            src={post.postImage.url}
            height={(post.postImage.height = "300")}
            width={post.postImage.width}
            alt={post.title}
            // objectFit="cover"
            // objectPosition="top left"
            layout="responsive"
          />
        </div>

        <div className={styles.post_header_content_details}>
          <h1>{post.title}</h1>
          <h3>{post.excerpt}</h3>
          <div className={styles.post_author_date_container}>
            <div>
              <h6>{post.author.author}</h6>
              <div>
                <span>{format(new Date(post.date), "dd, LLLL yyyy")}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rich_text_editor_container}>
          <RichText content={post.contentPost.raw.children} />
        </div>
      </div>
    </div>
  );
}
const graphcms = new GraphQLClient(`${API_URL}`);

export async function getStaticProps({ params }) {
  const { post } = await graphcms.request(
    `
    query PostPageQuery($slug: String!) {
        post(where: {slug: $slug}) {
          id
          slug
          title
          excerpt
          date
          author {
            author
          }
          postImage {
            url
            width
            height
          }
          contentPost {
            raw
          }      
        }
      }

    `,
    {
      slug: params.slug,
    }
  );
  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const { posts } = await graphcms.request(`
    {
        posts {
            slug
        }
    }

  `);

  return {
    paths: posts.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: "blocking",
  };
}
