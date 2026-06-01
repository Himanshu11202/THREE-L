import type { Metadata } from "next";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";
import FloatingActions from "@/components/FloatingActions";

export const metadata: Metadata = {
  title: "THREE L | Premium Civil Engineering & Luxury Construction",
  description: "THREE L (longinglinestolive) is a premier civil engineering and luxury design-build firm specializing in corporate complexes, high-end private estates, and heavy infrastructure.",
  keywords: "THREE L, longinglinestolive, civil engineering, luxury construction, commercial developers, custom villas, structural engineers, residential estates",
  authors: [{ name: "THREE L" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `
          }}
        />
      </head>
      <body className="antialiased bg-luxury-black text-foreground transition-colors duration-500">
        <LoadingScreen />
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
