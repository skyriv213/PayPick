import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globalTheme.css";
import * as styles from './layout.css'
import RQProvider from "./_component/RQProvider";
import Header from "./_component/Header";

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
      <body className={`${inter.className} ${styles.wrapper}`}>
        <RQProvider>
          <div className={styles.wrapper}>
            <Header />
            {children}
            <div id="modal"></div>
          </div>
        </RQProvider>
      </body>
    </html>
  );
}
