import Header from "@components/Header";
import Featuredblog from "@components/Featuredblog";
import PostList from "pages/blog/PostList";
import { GraphQLClient } from "graphql-request";
import { API_URL } from "@config/index";

export default function BlogPage({ posts }) {
  return (
    <div>
      <Header />
      <Featuredblog />
      <PostList posts={posts} />
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
