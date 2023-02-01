import Link from "next/link";

const BlogPost = () => {
  return (
    <Link href="/blog" passHref className="w-full my-7 hover:-translate-x-1.5">
      <div className="font-medium text-xs text-grey-400">2023. 2. 1</div>
      <div className="font-extrabold text-2xl mt-2">게시글 제목</div>
      <div className="font-medium text-gray-600 text-xl mt-1">게시글 설명</div>
    </Link>
  );
};

export default BlogPost;
