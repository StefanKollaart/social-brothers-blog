import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Container from "@/ui/Container/Container";
import Header from "@/features/Header/Header";

import { PostProvider } from "../context/PostContext";

import "./globals.css";
import Footer from "@/ui/Footer/Footer";
import { PageProvider } from "@/context/PageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social Brothers",
  description:
    "The latest on tech, news, sports, and even news from your region",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageProvider>
      <PostProvider>
        <html lang="en">
          <body className={`${inter.className} bg-darker-white min-h-screen`}>
            <Header />
            <Container>
              <main className="py-16">{children}</main>
            </Container>
            <Footer />
            <ToastContainer position="bottom-right" autoClose={5000} />
          </body>
        </html>
      </PostProvider>
    </PageProvider>
  );
}

export default RootLayout;
