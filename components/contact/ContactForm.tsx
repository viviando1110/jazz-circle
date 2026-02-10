'use client';

import { useState, type FormEvent } from 'react';

const CONTACT_EMAIL = 'lovco.contact@gmail.com';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Jazz Circle Contact: ${name}`);
    const body = encodeURIComponent(
      `From: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.open(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`, '_self');
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 text-center">
        <p className="text-[var(--cream)] font-semibold mb-2">
          Thank you for reaching out!
        </p>
        <p className="text-sm text-[var(--cream-dim)]">
          Your email client should have opened with your message. If it didn&apos;t,
          please email us directly at{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-[var(--gold)] underline underline-offset-2"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
        <button
          type="button"
          onClick={() => {
            setSent(false);
            setName('');
            setEmail('');
            setMessage('');
          }}
          className="mt-4 text-sm text-[var(--gold)] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--cream)] mb-1">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-[var(--cream)] placeholder:text-[var(--cream-dim)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/50"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--cream)] mb-1">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-[var(--cream)] placeholder:text-[var(--cream-dim)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/50"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-[var(--cream)] mb-1">
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-[var(--cream)] placeholder:text-[var(--cream-dim)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/50 resize-y"
          placeholder="Your message..."
        />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <button
          type="submit"
          className="px-6 py-2 rounded-lg bg-[var(--gold)] text-[var(--bg)] font-semibold hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/50"
        >
          Send Message
        </button>
        <p className="text-xs text-[var(--cream-dim)]">
          Or email us directly at{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-[var(--gold)] underline underline-offset-2"
          >
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </form>
  );
}
