"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import BasicLayout from "@/components/BasicLayout";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <BasicLayout>
            {children}
          </BasicLayout>
        </Provider>
      </body>
    </html>
  );
}