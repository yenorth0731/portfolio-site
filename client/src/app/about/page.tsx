import FullScreenSection from "../compornents/FullScreenSection";
import React from "react";
import Link from "next/link";
import Button from "../compornents/Button";
import { FadeInBottom } from "../compornents/FadeInBottom";

const AboutPage = () => {
  return (
    <>
      <FullScreenSection
        imageSrc="/top3.png"
        altText="Image Alt Text"
        heading="About"
        description=""
        toScroll={"about"}
      />

      <div className=" relative bg-gray-100 h-full" id="about">
        <div className="container mx-auto px-4 py-16">
          <FadeInBottom>
            <div className="flex flex-col md:flex-row mb-10 items-center justify-center">
              <div className="w-full md:w-2/3">
                {" "}
                {/* ここを修正 */}
                <p className="text-md leading-relaxed pl-1">枝 村 勇 希</p>
                <h2 className="text-3xl font-bold mb-16">Yuki Edamura</h2>
                <div className="text-sm">
                  <p className="mb-4">
                    1996年2月生まれ、札幌市育ち。趣味は観葉植物とアニメ鑑賞。
                  </p>
                  <p className="">
                    日中はカスタマーセンターに勤めながら、夜間はライブハウスでイベントのディレクションや映像演出を担当。
                  </p>
                  <p className="mb-8">
                    何かを形にしたり、コンテンツを作りたい、と思い立ったのがきっかけでWeb開発を独学で学習しています。
                  </p>
                  <p className="">
                    自宅で200鉢以上の植物を管理しているので、職場や部屋に植物を置きたい!というご相談もお待ちしております。
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row md:flex-row mx-auto pb-10 border-b border-slate-500 items-center justify-center">
              <div className="w-full md:w-2/3 kg:w-full flex-col">
                <h3 className="text-sm font-semibold mb-2">開発言語</h3>
                <div className="text-sm">
                  <p className="pb-1">React, React Native, Swift</p>
                  <p>HTML/CSS</p>
                </div>
              </div>
            </div>
          </FadeInBottom>

          <FadeInBottom>
            <div className="flex justify-end mt-8 mr-4 items-center">
              <Link href={"/contact"}>
                <Button text={"問い合わせる"}></Button>
              </Link>
            </div>
          </FadeInBottom>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
