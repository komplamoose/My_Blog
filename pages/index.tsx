import { allPosts } from "@/.contentlayer/generated";
import RecentPosts from "@/components/RecentPosts";
import { InferGetStaticPropsType } from "next";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className={"my-5 w-full`"}>
      <RecentPosts posts={posts} />
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

export default Home;
