// components/ContactForm.tsx
"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FullScreenSection from "../compornents/FullScreenSection";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch(
        "https://portfolio-yenorth-rj0uasvct-yenorths-projects.vercel.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
      } else {
        throw new Error("Failed to send form data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <FullScreenSection
        imageSrc="/top1.png"
        altText="Image Alt Text"
        heading="お問い合わせ"
        description=""
        toScroll={"contact"}
      />

      <div className="relative bg-slate-200 h-full" id="contact">
        <div className="container mx-auto px-4 py-16 pb-24">
          <div className="mb-16 mt-16">
            <p className="text-sm leading-relaxed pl-1">お問い合わせ</p>
            <h2 className="text-3xl font-bold mb-8">Contact</h2>

            <p className="text-sm">
              ご意見やお問い合わせなどお気軽にお待ちしております。
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto justify-between mt-8"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                名前:
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: true })}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              {errors.name && (
                <span className="text-red-500">名前を入力してください</span>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                メールアドレス:
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true })}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              {errors.email && (
                <span className="text-red-500">
                  メールアドレスを入力してください
                </span>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                お問い合わせ内容:
              </label>
              <textarea
                id="message"
                {...register("message", { required: true })}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                rows={4}
              ></textarea>
              {errors.message && (
                <span className="text-red-500">
                  お問い合わせ内容を入力してください
                </span>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              送信
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
