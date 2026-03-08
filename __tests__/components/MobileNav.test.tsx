import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import MobileNav from '@/components/layout/MobileNav';

// Mock next/link
vi.mock('next/link', () => ({
  default: ({ children, href, onClick, ...props }: any) => (
    <a href={href} onClick={onClick} {...props}>{children}</a>
  ),
}));

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
];

describe('MobileNav', () => {
  it('renders nothing when closed', () => {
    const { container } = render(
      <MobileNav isOpen={false} links={LINKS} onClose={vi.fn()} />
    );
    expect(container.innerHTML).toBe('');
  });

  it('renders links when open', () => {
    render(<MobileNav isOpen={true} links={LINKS} onClose={vi.fn()} />);
    expect(screen.getByText('Home')).toBeDefined();
    expect(screen.getByText('About')).toBeDefined();
  });

  it('calls onClose when a link is clicked', () => {
    const onClose = vi.fn();
    render(<MobileNav isOpen={true} links={LINKS} onClose={onClose} />);
    fireEvent.click(screen.getByText('About'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose on Escape key', () => {
    const onClose = vi.fn();
    render(<MobileNav isOpen={true} links={LINKS} onClose={onClose} />);
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose on outside click', () => {
    const onClose = vi.fn();
    render(
      <div>
        <div data-testid="outside">Outside</div>
        <MobileNav isOpen={true} links={LINKS} onClose={onClose} />
      </div>
    );
    fireEvent.mouseDown(screen.getByTestId('outside'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose when clicking inside the nav', () => {
    const onClose = vi.fn();
    render(<MobileNav isOpen={true} links={LINKS} onClose={onClose} />);
    fireEvent.mouseDown(screen.getByLabelText('Mobile navigation'));
    expect(onClose).not.toHaveBeenCalled();
  });

  it('does not call onClose when clicking the toggle button', () => {
    const onClose = vi.fn();
    render(
      <div>
        <button aria-controls="mobile-nav">Toggle</button>
        <MobileNav isOpen={true} links={LINKS} onClose={onClose} />
      </div>
    );
    fireEvent.mouseDown(screen.getByRole('button', { name: 'Toggle' }));
    expect(onClose).not.toHaveBeenCalled();
  });

  it('does not call onClose when clicking a child of the toggle button', () => {
    const onClose = vi.fn();
    render(
      <div>
        <button aria-controls="mobile-nav">
          <svg data-testid="icon"><line /></svg>
        </button>
        <MobileNav isOpen={true} links={LINKS} onClose={onClose} />
      </div>
    );
    fireEvent.mouseDown(screen.getByTestId('icon'));
    expect(onClose).not.toHaveBeenCalled();
  });
});
