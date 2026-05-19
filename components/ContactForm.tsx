"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Message sent! (Connect this to your backend)");
  };

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Your Name" className="newsletter-input" value={form.name} onChange={update("name")} />
      <input type="email" placeholder="Your Email" className="newsletter-input" value={form.email} onChange={update("email")} />
      <textarea
        placeholder="Your Message"
        className="newsletter-input"
        rows={4}
        style={{ resize: "vertical" }}
        value={form.message}
        onChange={update("message")}
      />
      <button type="submit" className="hero-btn">Send Message</button>
    </form>
  );
}
