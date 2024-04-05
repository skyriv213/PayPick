import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globalTheme.css";
import RQProvider from "./_component/RQProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paypick",
  description: "Paypick",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RQProvider>
          {children}
          <div id="modal"></div>
        </RQProvider>
      </body>
    </html>
  );
}
