export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-screen ">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body className="h-screen ">
        <div className="flex flex-col h-screen">{children}</div>
      </body>
    </html>
  );
}
