"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", title: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    if (!form.name || !form.email || !form.title || !form.message) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess("Your message has been sent!");
        setForm({ name: "", email: "", title: "", message: "" });
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Contact</h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-medium">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className="border border-neutral-400 dark:border-neutral-700 rounded px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-medium">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="border border-neutral-400 dark:border-neutral-700 rounded px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="font-medium">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            className="border border-neutral-400 dark:border-neutral-700 rounded px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="border border-neutral-400 dark:border-neutral-700 rounded px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p className="text-red-600 dark:text-red-400">{error}</p>}
        {success && <p className="text-green-600 dark:text-green-400">{success}</p>}
        <button
          type="submit"
          className="bg-neutral-800 dark:bg-neutral-200 text-white dark:text-black cursor-pointer px-6 py-2 rounded font-medium hover:bg-neutral-700 dark:hover:bg-neutral-400 transition-colors disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
} 