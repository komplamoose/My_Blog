import BlogPost from "@/components/BlogPost";
import { InferGetStaticPropsType } from "next";
import { allPosts } from ".contentlayer/generated";
// import { getStaticProps } from "@/util";

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="mt-10 flex flex-col">
      {posts.map((post) => (
        <BlogPost
          date={post.date}
          title={post.title}
          desc={post.description}
          path={post._raw.flattenedPath}
          key={post._id}
        />
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
