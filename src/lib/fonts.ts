import localFont from 'next/font/local';

// For custom fontss

export const frick = localFont({
  src: [{ path: '../../public/fonts/frick03-regular.otf', weight: '400' }],
  display: 'block',
});

export const grotesk = localFont({
  src: [
    { path: '../../public/fonts/OverusedGrotesk-Bold.otf', weight: '700' },
    { path: '../../public/fonts/OverusedGrotesk-Medium.otf', weight: '500' },
  ],
});
