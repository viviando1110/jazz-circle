import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Jazz Circle — Interactive Circle of Fifths for Jazz Musicians';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0d0f14',
          padding: '60px',
        }}
      >
        {/* Decorative musical note */}
        <div
          style={{
            fontSize: 72,
            color: '#c8956c',
            marginBottom: 24,
            opacity: 0.6,
          }}
        >
          ♩
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: '#c8956c',
            textAlign: 'center',
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Jazz Circle
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 32,
            color: '#f0e8dc',
            textAlign: 'center',
            lineHeight: 1.4,
            maxWidth: 800,
          }}
        >
          Interactive Circle of Fifths for Jazz Musicians
        </div>

        {/* Decorative divider */}
        <div
          style={{
            width: 120,
            height: 2,
            backgroundColor: '#c8956c',
            marginTop: 40,
            opacity: 0.4,
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 20,
            color: '#f0e8dc',
            textAlign: 'center',
            marginTop: 24,
            opacity: 0.6,
          }}
        >
          Chords &bull; Scales &bull; Progressions &bull; Standards
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
