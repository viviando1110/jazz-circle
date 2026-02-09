import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Jazz Circle',
  description: 'Privacy policy for Jazz Circle, covering analytics, advertising, and cookie usage.',
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-serif font-bold text-[var(--gold)] sm:text-4xl mb-6">
        Privacy Policy
      </h1>

      <div className="space-y-6 text-sm text-[var(--cream-dim)]">
        <p>Last updated: February 2026</p>

        <section>
          <h2 className="text-base font-semibold text-[var(--cream)] mb-2">
            Overview
          </h2>
          <p>
            Jazz Circle is a free educational tool for learning jazz theory. We respect
            your privacy and aim to be transparent about any data practices.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-[var(--cream)] mb-2">
            Data We Collect
          </h2>
          <p>
            Jazz Circle does not require user accounts, does not collect personal
            information, and does not store any user data on our servers.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-[var(--cream)] mb-2">
            Analytics
          </h2>
          <p>
            We may use Google Analytics (GA4) to understand how visitors use the site.
            Google Analytics collects anonymized usage data such as page views, session
            duration, and approximate location. This data helps us improve the tool.
            You can opt out of Google Analytics by using a browser extension or
            disabling JavaScript.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-[var(--cream)] mb-2">
            Advertising
          </h2>
          <p>
            We may display advertisements through Google AdSense. AdSense uses cookies
            to serve ads based on your browsing history. You can manage your ad
            preferences through Google&apos;s Ad Settings. For more information, see
            Google&apos;s privacy policy.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-[var(--cream)] mb-2">
            Cookies
          </h2>
          <p>
            Jazz Circle itself does not set cookies. However, third-party services
            (Google Analytics, Google AdSense) may set cookies as described above.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-[var(--cream)] mb-2">
            Third-Party Links
          </h2>
          <p>
            This site may contain links to external websites. We are not responsible
            for the privacy practices of those sites.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-[var(--cream)] mb-2">
            Changes to This Policy
          </h2>
          <p>
            We may update this privacy policy from time to time. Any changes will be
            posted on this page with an updated date.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-[var(--cream)] mb-2">
            Contact
          </h2>
          <p>
            If you have questions about this privacy policy, please open an issue on
            our GitHub repository.
          </p>
        </section>
      </div>
    </div>
  );
}
