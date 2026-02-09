'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

interface NavLink {
  href: string;
  label: string;
}

interface MobileNavProps {
  isOpen: boolean;
  links: NavLink[];
  onClose: () => void;
}

export default function MobileNav({ isOpen, links, onClose }: MobileNavProps) {
  const navRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;

    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen, onClose]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={navRef}
      id="mobile-nav"
      role="navigation"
      aria-label="Mobile navigation"
      className="md:hidden border-t border-[var(--border)] bg-[var(--surface)]"
    >
      <nav className="flex flex-col px-4 py-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="py-3 text-sm text-[var(--cream-dim)] hover:text-[var(--cream)] border-b border-[var(--border)] last:border-b-0 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
