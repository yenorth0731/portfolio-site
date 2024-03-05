import FullScreenSection from "../compornents/FullScreenSection";
import { getList } from "../../../libs/types/blogAPI";
import Link from "next/link";

export default async function BlogPage() {
  const time = new Date().toLocaleString();

  const { contents } = await getList();

  const truncateContent = (html: string) => {
    // HTMLタグを削除して純粋なテキストに変換
    const text = html.replace(/<[^>]+>/g, "");
    // 文字列を200文字に制限
    const truncatedText = text.slice(0, 200);
    // 文字列が200文字以上の場合は末尾に...を追加
    return text.length > 200 ? truncatedText + "..." : truncatedText;
  };
  const date = new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });

  // console.log(contents)

  return (
    <>
      <div>
        <FullScreenSection
          imageSrc="/top2.png"
          altText="Image Alt Text"
          heading="Blog"
          description=""
          toScroll={"blogs"}
        />
      </div>
      <div className="relative h-full bg-slate-200 pt-8 pb-10" id="blogs">
        <div className="flex-col ">
          {contents.map((post) => {
            return (
              <div className="flex flex-row" key={post.id}>
                <div className="bg-white rounded-lg shadow-md p-8 transition-shadow duration-300 hover:shadow-lg m-10 w-3/4">
                  <Link href={`/blog/${post.id}`} className="">
                    <img
                      src="https://via.placeholder.com/600"
                      alt="blog1"
                      className="w-full h-64 object-cover pb-4"
                    />

                    <h2 className="text-xl font-bold mb-4">{post.title}</h2>
                    <p className="mb-2">{post.createdAt}</p>
                    <p className="text-gray-700">
                      {truncateContent(post.content)}
                    </p>
                  </Link>
                </div>
              </div>
            );
          })}

          <div className="bg-white rounded-lg shadow-md p-8 transition-shadow duration-300 hover:shadow-lg m-10 w-1/4">
            <h3 className="text-xl font-semibold pb-3">カテゴリ</h3>
            <ul>
              <li>あ</li>
              <li>あ</li>
              <li>あ</li>
              <li>あ</li>
              <li>あ</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
