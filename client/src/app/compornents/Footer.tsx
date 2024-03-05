import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="absolute order-t bg-slate-950 w-full pb-16">
      {/* <ul className='flex justify-end pt-2 mx-auto'>
  <li>
    <Link className="text-white text-md pr-8 font-semibold hover:text-orange-300 duration-75 drop-shadow-2xl leading-relaxed" href="/">Home</Link>
  </li>
  <li>
    <span className="text-white text-md pr-8 font-semibold">|</span>
  </li>
  <li>
    <Link className="text-white text-md pr-8 font-semibold hover:text-orange-300 duration-75 drop-shadow-2xl leading-relaxed" href="/about">About</Link>
  </li>
  <li>
    <span className="text-white text-md pr-8 font-semibold">|</span>
  </li>
  <li>
    <Link className="text-white text-md pr-8 font-semibold hover:text-orange-300 duration-75 drop-shadow-2xl leading-relaxed" href="/blog">Blog</Link>
  </li>
  <li>
    <span className="text-white text-md pr-8 font-semibold">|</span>
  </li>
  <li>
    <Link className="text-white text-md pr-8 font-semibold hover:text-orange-300 duration-75 drop-shadow-2xl leading-relaxed " href="/contact">Contact</Link>
  </li>
</ul> */}
      {/* 4/1 */}
      <div className="pt-4 flex justify-center">
        <p className="text-slate-100">@2024 Yuki Edamura</p>
      </div>
    </footer>
  );
};

export default Footer;
