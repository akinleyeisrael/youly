import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import JotaiProviders from "./JotaiProviders";
import { ReactQueryProvider } from "./QueryClientProvider";
import { Provider } from "jotai";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "./AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Youly",
  description: "A data analytic app for your youtube videos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>

          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            <AuthProvider>
              <ReactQueryProvider>
                <JotaiProviders>
                  {children}
                </JotaiProviders>
              </ReactQueryProvider>
            </AuthProvider>
          </ThemeProvider>
        </main>
      </body>
    </html >
  );
}
