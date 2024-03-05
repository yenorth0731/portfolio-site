// ScrollTopButton.tsx
"use client";
import React, { useState, useEffect } from "react";
import { Link as Scroll } from "react-scroll";

const ScrollTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // スクロール位置が一定の位置よりも上にある場合、ボタンを表示
      if (window.scrollY > window.innerHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // スクロールイベントリスナーを追加
    window.addEventListener("scroll", handleScroll);

    // クリーンアップ
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // 空の配列を渡して初回レンダリング時のみ実行するように設定

  return (
    <div
      className={`fixed bottom-4 left-6 z-50 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md cursor-pointer transition-opacity ${
        isVisible ? "opacity-100 duration-300" : "opacity-0 duration-300"
      }`}
    >
      <Scroll to="top" smooth={true} duration={500}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </Scroll>
    </div>
  );
};

export default ScrollTopButton;
