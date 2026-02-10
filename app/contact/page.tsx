import type { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact — Jazz Circle',
  description:
    'Get in touch with the Jazz Circle team. Questions, feedback, or partnership inquiries welcome.',
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-serif font-bold text-[var(--gold)] sm:text-4xl mb-6">
        Contact Us
      </h1>

      <div className="space-y-6 text-[var(--cream-dim)]">
        <p>
          Have a question, suggestion, or feedback about Jazz Circle? We&apos;d love to hear
          from you. Fill out the form below or email us directly.
        </p>

        <ContactForm />

        <section className="pt-4 border-t border-[var(--border)]">
          <h2 className="text-lg font-semibold text-[var(--cream)] mb-2">
            About
          </h2>
          <p>
            Jazz Circle is operated by Lov Co. LLC. We are committed to building
            free, high-quality music education tools for jazz musicians at every level.
          </p>
        </section>
      </div>
    </div>
  );
}
