import Link from "next/link";
import { FadeInBottom } from "./compornents/FadeInBottom";
import FullScreenSection from "./compornents/FullScreenSection";
import Button from "./compornents/Button";

export default function Home() {
  return (
    <>
      <FullScreenSection
        imageSrc="/top.png"
        altText=""
        heading="Yuki Edamura"
        description=""
        toScroll={"toMain"}
      />
      <section className="relative py-8 bg-slate-200" id="toMain">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 pt-10 pb-10">
            作品例
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* 作品カード */}
            <FadeInBottom>
              <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                <img
                  src="https://via.placeholder.com/300"
                  alt="作品1"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">作品1</h3>
                  <p>作品の説明や詳細をここに記述します。</p>
                </div>
              </div>
            </FadeInBottom>
            <FadeInBottom>
              <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                <img
                  src="https://via.placeholder.com/300"
                  alt="作品1"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">作品1</h3>
                  <p>作品の説明や詳細をここに記述します。</p>
                </div>
              </div>
            </FadeInBottom>
            <FadeInBottom>
              <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                <img
                  src="https://via.placeholder.com/300"
                  alt="作品1"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">作品1</h3>
                  <p>作品の説明や詳細をここに記述します。</p>
                </div>
              </div>
            </FadeInBottom>
            <FadeInBottom>
              <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                <img
                  src="https://via.placeholder.com/300"
                  alt="作品1"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">作品1</h3>
                  <p>作品の説明や詳細をここに記述します。</p>
                </div>
              </div>
            </FadeInBottom>
            <FadeInBottom>
              <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                <img
                  src="https://via.placeholder.com/300"
                  alt="作品1"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">作品1</h3>
                  <p>作品の説明や詳細をここに記述します。</p>
                </div>
              </div>
            </FadeInBottom>
            <FadeInBottom>
              <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                <img
                  src="https://via.placeholder.com/300"
                  alt="作品1"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">作品1</h3>
                  <p>作品の説明や詳細をここに記述します。</p>
                </div>
              </div>
            </FadeInBottom>
          </div>

          <div className="pt-16 pb-8 flex justify-center items-center">
            <Link href="/contact">
              <Button text="問い合わせる"></Button>
            </Link>
          </div>
        </div>
      </section>{" "}
    </>
  );
}
