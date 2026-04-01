"use client";

import { useState, FormEvent } from "react";
import { Send, Loader2, CheckCircle } from "lucide-react";

interface ContactFormProps {
  source?: string;
}

const inputClass =
  "w-full px-4 py-3 rounded-lg bg-background border border-border text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 focus:bg-surface/30 transition-all duration-200";

export default function ContactForm({ source = "contact-page" }: ContactFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
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
          projectType: form.projectType,
          message: form.message,
          source,
          turnstileToken: document.querySelector<HTMLInputElement>("[name=cf-turnstile-response]")?.value || "",
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", phone: "", projectType: "", message: "" });
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
            className={inputClass}
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
            className={inputClass}
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm text-gray-400 mb-1">
            Phone (optional)
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={inputClass}
            placeholder="(678) 555-1234"
          />
        </div>
        <div>
          <label htmlFor="projectType" className="block text-sm text-gray-400 mb-1">
            Project Type
          </label>
          <select
            id="projectType"
            value={form.projectType}
            onChange={(e) => setForm({ ...form, projectType: e.target.value })}
            className={`${inputClass} appearance-none`}
          >
            <option value="">Select a project type</option>
            <option value="structured-cabling">Structured Cabling</option>
            <option value="fiber-optic">Fiber Optic</option>
            <option value="datacenter">Datacenter Build-Out</option>
            <option value="security-cameras">Security Cameras</option>
            <option value="phone-systems">Phone Systems</option>
            <option value="audio-video">Audio/Video</option>
            <option value="wireless">Wireless Networking</option>
            <option value="other">Other</option>
          </select>
        </div>
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
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your project..."
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm">
          Something went wrong. Please try again or call us directly.
        </p>
      )}
      <div className="cf-turnstile" data-sitekey="0x4AAAAAACyyw5m1flznn3Ce"></div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full btn-primary disabled:opacity-50 py-3.5 flex items-center justify-center gap-2"
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
