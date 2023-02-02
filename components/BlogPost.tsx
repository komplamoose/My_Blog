import Link from "next/link";

interface BlogPostProps {
  date: string;
  title: string;
  desc: string;
  path: string;
}

const BlogPost = ({ date, title, desc, path }: BlogPostProps) => {
  return (
    <Link
      href={`/blog/${path}`}
      passHref
      className="w-full my-7 hover:-translate-x-1.5"
    >
      <div className="font-medium text-xs text-grey-400">{date}</div>
      <div className="font-bold text-2xl mt-2">{title}</div>
      <div className="font-medium text-gray-600 text-xl mt-1">{desc}</div>
    </Link>
  );
};

export default BlogPost;
