import localFont from 'next/font/local';

// For custom fontss

export const frick = localFont({
  src: [{ path: '../../public/fonts/frick03-regular.otf', weight: '400' }],
  display: 'block',
});

export const grotesk = localFont({
  src: [
    {
      path: '../../public/fonts/OverusedGrotesk-Bold-BF64eeac1756b57.otf',
      weight: '700',
    },
    {
      path: '../../public/fonts/OverusedGrotesk-Medium-BF64eeac181a996.otf',
      weight: '500',
    },
    {
      path: '../../public/fonts/OverusedGrotesk-Roman-BF64eeac17dee17.otf',
      weight: '400',
    },
    {
      path: '../../public/fonts/OverusedGrotesk-SemiBold-BF64eeac17e1195.otf',
      weight: '600',
    },
  ],
  variable: '--grotesk-font',
});
