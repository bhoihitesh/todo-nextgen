"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import BasicLayout from "@/components/BasicLayout";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }: any) {
  const pathname = usePathname(); // Get the current route
  const isAuthPage = pathname === "/login";
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          {isAuthPage ? children : <BasicLayout>{children}</BasicLayout>}
        </Provider>
      </body>
    </html>
  );
}