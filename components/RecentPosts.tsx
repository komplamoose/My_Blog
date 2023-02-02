import { InferGetStaticPropsType } from "next";
import { getStaticProps } from "@/pages";
import BlogPost from "./BlogPost";

const RecentPosts = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <section>
      <h1 className="text-xl font-medium">최근 게시글</h1>
      <div className="flex flex-col">
        {posts.slice(0, 5).map((post) => {
          return (
            <BlogPost
              date={post.date}
              title={post.title}
              desc={post.description}
              path={post._raw.flattenedPath}
              key={post._id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RecentPosts;
