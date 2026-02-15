'use client';

import { useState } from 'react';
import type { Standard } from '@/lib/music/types';
import { useSubscription } from '@/components/subscription/SubscriptionProvider';
import { StandardPageClient } from './StandardPageClient';
import { LockIcon } from '@/components/icons/LockIcon';
import { PaywallModal } from '@/components/paywall/PaywallModal';

interface StandardPageContentProps {
  standard: Standard;
}

export function StandardPageContent({ standard }: StandardPageContentProps) {
  const { canAccessSong, startTrial } = useSubscription();
  const [showPaywall, setShowPaywall] = useState(false);

  const hasAccess = canAccessSong(standard.slug);

  // If user has access, render the full page
  if (hasAccess) {
    return <StandardPageClient standard={standard} />;
  }

  // Otherwise, show lock screen
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 text-center px-4">
        {/* Lock icon in rounded background */}
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-neutral-800">
          <LockIcon className="w-10 h-10 text-neutral-400" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-neutral-100">Premium Song</h2>

        {/* Description */}
        <p className="text-lg text-neutral-300 max-w-md">
          Unlock <span className="font-semibold">{standard.title}</span> with a free trial or subscription
        </p>

        {/* Unlock button */}
        <button
          onClick={() => setShowPaywall(true)}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
        >
          Unlock Now
        </button>
      </div>

      {/* Paywall modal */}
      <PaywallModal
        isOpen={showPaywall}
        onClose={() => setShowPaywall(false)}
        onStartTrial={() => {
          startTrial();
          setShowPaywall(false);
        }}
        onSelectMonthly={() => {
          // TODO: Implement monthly subscription flow
          console.log('[StandardPageContent] Monthly subscription selected');
        }}
        onSelectAnnual={() => {
          // TODO: Implement annual subscription flow
          console.log('[StandardPageContent] Annual subscription selected');
        }}
      />
    </>
  );
}
