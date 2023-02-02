import { allPosts } from "@/.contentlayer/generated";
import { customMetaAtom } from "@/data/metadata";
import { useAtom } from "jotai";
import { InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { useEffect } from "react";

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!post) return;
  const MDX = useMDXComponent(post.body.code);

  const [_, setCustomMetaData] = useAtom(customMetaAtom);

  useEffect(() => {
    const { title, description, date } = post;
    setCustomMetaData((prev) => {
      return {
        ...prev,
        title,
        description,
        date: new Date(date).toISOString(),
      };
    });

    return () => {
      setCustomMetaData((prev) => {
        return {
          ...prev,
          title: "나 사나이 강보석",
          description: "강보석 블로그",
        };
      });
    };
  }, [post.title]);

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
