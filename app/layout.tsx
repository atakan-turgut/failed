import '../styles/globals.css';

export const metadata = {
  title: 'Opportunity Engine',
  description: 'Find real-world problems you are uniquely positioned to solve'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
