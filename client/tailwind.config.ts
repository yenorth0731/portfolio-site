import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 中略

      // Animista で好みに生成したものを貼り付ける
      //FreeBSD-licensed CSS animation by Animista
      animation: {
        "fade-in-bottom": "fade-in-bottom 0.6s ease-out   both",
      },
      keyframes: {
        "fade-in-bottom": {
          "0%": {
            transform: "translateY(50px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
    },
  },

  plugins: [],
};
export default config;
