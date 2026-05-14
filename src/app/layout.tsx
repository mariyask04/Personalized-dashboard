import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ReduxProvider from "@/redux/provider";

export const metadata: Metadata = {
  title: "Personalized Dashboard",
  description: "Content dashboard app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-right" />
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}