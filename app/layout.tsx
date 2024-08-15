import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster"
import '@stream-io/video-react-sdk/dist/css/styles.css'
import 'react-datepicker/dist/react-datepicker.css'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MeetLoop",
  description: "Video Calling App",
  icons: {
    icon: '/icons/meetloop-logo.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          variables: {
            colorText: "black",
          },
          layout: {
            logoImageUrl: "/icons/meetloop-logo-whitebg1.png",
            socialButtonsVariant: "iconButton",
          },
        }}
      >
        <body className={`${inter.className} bg-dark-2`}>{children} <Toaster /></body>
      </ClerkProvider>
    </html>
  );
}
