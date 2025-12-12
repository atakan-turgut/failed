import '../styles/globals.css';

export const metadata = {
  title: 'Opportunity Engine',
  description: 'Discover meaningful problems you are uniquely positioned to solve.',
  icons: { icon: '/favicon.png' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
