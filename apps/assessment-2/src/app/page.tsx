"use client";
import dynamic from "next/dynamic";
import About from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Pricing from "./components/pricing/Pricing";

const DynamicHeader = dynamic(
  () => import("./components/headernavbar/Header"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <DynamicHeader />
      <Hero />
      <About />
      <Pricing />
      <Contact />
    </main>
  );
}
