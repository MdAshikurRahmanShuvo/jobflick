import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o4lgvqu",   // 🟢 EmailJS Service ID
        "template_vwkmevq",  // 🟢 EmailJS Template ID
        form.current,
        "35lCyVbwb9aUcuT7U"    // 🟢 EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Something went wrong! Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-3">
        Contact Me
      </h1>
      <p className="text-gray-600 text-center max-w-md mb-6">
        Have any question or project idea? Send me a quick message below 👇
      </p>

      {/* 🔹 Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 md:p-8 border border-blue-100"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Email
          </label>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Message
          </label>
          <textarea
            name="message"
            placeholder="Write your message..."
            required
            className="w-full border border-gray-300 rounded-lg p-3 h-32 resize-none focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-200"
        >
          ✉️ Send Message
        </button>

        {isSent && (
          <p className="text-green-600 text-center mt-3">
            ✅ Message sent successfully!
          </p>
        )}
      </form>

      {/* 🔹 Optional Social Links */}
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        <a
          href="https://m.me/ashikshuvo5633"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          💬 Messenger
        </a>
        <a
          href="https://wa.me/8801829744766"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          📱 WhatsApp
        </a>
        <a
          href="https://t.me/ashikshuvo5633"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition"
        >
          📩 Telegram
        </a>
        <a
          href="tel:+8801829744766"
          className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
        >
          ☎️ Call Now
        </a>
      </div>
    </div>
  );
};

export default Contact;
