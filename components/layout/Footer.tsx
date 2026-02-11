import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] mt-auto">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--cream-dim)]">
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-[var(--cream)] transition-colors">
              About
            </Link>
            <Link href="/privacy" className="hover:text-[var(--cream)] transition-colors">
              Privacy
            </Link>
            <Link href="/standards" className="hover:text-[var(--cream)] transition-colors">
              Songs
            </Link>
            <Link href="/contact" className="hover:text-[var(--cream)] transition-colors">
              Contact
            </Link>
          </div>
          <p>&copy; {new Date().getFullYear()} Jazz Circle by Lov Co. LLC</p>
        </div>
      </div>
    </footer>
  );
}
