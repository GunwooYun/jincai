import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jincai Tour - 금채여행사 | Discover the True Essence of Korea",
  description: "Jincai Tour (금채여행사) is the premier inbound travel agency for Chinese tourists in South Korea, offering medical, cultural, and K-pop tourism packages.",
  keywords: "Jincai Tour, 금채여행사, Korea Travel, Inbound Travel Agency, Chinese Tourists in Korea, Medical Tourism, K-Pop Tours",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
