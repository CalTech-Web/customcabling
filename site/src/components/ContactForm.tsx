"use client";

import { useState, FormEvent } from "react";
import { Send, Loader2, CheckCircle } from "lucide-react";

interface ContactFormProps {
  source?: string;
}

export default function ContactForm({ source = "contact-page" }: ContactFormProps) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://forms.caltechweb.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "customcablingsolutions.com",
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          source,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-white text-xl font-semibold mb-2">Message Sent</h3>
        <p className="text-gray-400">We will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm text-gray-400 mb-1">
            Name *
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
            Email *
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-background border border-border text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm text-gray-400 mb-1">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-background border border-border text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
          placeholder="(678) 555-1234"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-gray-400 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-3 rounded-lg bg-background border border-border text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors resize-none"
          placeholder="Tell us about your project..."
        />
      </div>
      {status === "error" && (
        <p className="text-red-400 text-sm">Something went wrong. Please try again or call us directly.</p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-cta hover:bg-cta-hover disabled:opacity-50 text-white py-3.5 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" /> Send Message
          </>
        )}
      </button>
    </form>
  );
}
