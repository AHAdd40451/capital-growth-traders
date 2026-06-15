import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const display = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "CGT — Build a Second Income. Create Freedom.",
  description:
    "Practical trading education for everyday Australians who want more options for themselves and their families.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        <Script
          src="https://moduleminds.ltd/api/widgets/embed.js"
          data-widget-id="wgt_kag9yhg25r"
          strategy="afterInteractive"
        />
        <Script
          src="https://moduleminds.ltd/api/widgets/embed.js"
          data-widget-id="wgt_9vrfh6t5yr"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
