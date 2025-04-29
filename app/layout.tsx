import type { Metadata } from "next";

import localFont from "next/font/local";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeModeScript } from "flowbite-react";

import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Providers } from "./provider";
import Head from 'next/head';

export const metadata: Metadata = {
  title: "Marketplace - WorldOfMalls",
  description: "Marketplace - WorldOfMalls",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: any;
}>) {

  return (
    <html lang="en">
      <Head>
        <ThemeModeScript />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* Add more links for different sizes if needed */}
      </Head>
      <body className={`antialiased`}>
        <Providers>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <section className="m-auto">
            {children}
          </section>
        </Providers>
      </body>
    </html>
  );
}
