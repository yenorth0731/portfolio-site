import { notFound } from "next/navigation";
import parse from "html-react-parser";
import { getDetail, getList } from "../../../../libs/types/blogAPI";

export async function generateStaticParams() {
 const { contents } = await getList();

 const paths = contents.map((post) => {
  return {
   postId: post.id,
  };
 });

 return [...paths];
}

export default async function StaticDetailPage({
 params: { postId },
}: {
 params: { postId: string };
}) {
 const post = await getDetail(postId);

 // ページの生成された時間を取得
 const time = new Date().toLocaleString();
 if (!post) {
  notFound();
 }

 return (
    <div className="" key={post.id}>
    <div className="container max-w-3xl mx-auto px-4 py-8 mt-10 mb-10">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className=" border-b border-slate-500"></div>
      <h2 className="text-gray-500 text-sm mb-16 text-end mt-4">{time}    作成者××××</h2>
      <div className="prose max-w-none leading-relaxed">
        {/* HTMLをReact要素に変換して表示 */}
        {parse(post.content)}
      </div>
    </div>
    </div>
 );
}