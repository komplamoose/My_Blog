import Container from "@/components/Container";
import { allPosts } from "@/.contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!post) return;
  const MDX = useMDXComponent(post.body.code);

  return (
    <div className="mt-10 prose">
      <h1 className="text-sky-700">{post.title}</h1>
      <MDX />
    </div>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map((p) => ({ params: { path: p._raw.flattenedPath } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.path);
  return {
    props: {
      post,
    },
  };
};

export default Post;
