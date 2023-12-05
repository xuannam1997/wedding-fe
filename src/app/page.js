"use client";
import AlbumImage from "@/components/album";
import Audio from "@/components/audio";
import Banner from "@/components/banner";
import Brides from "@/components/brides";
import Groom from "@/components/groom";
import HappyWedding from "@/components/happy-wedding";
import HeartFall from "@/components/heart-fall";
import Navbar from "@/components/navbar";
import ScrollToTop from "@/components/scroll-to-top";
import SendGreetings from "@/components/send-greeting";
import ThankYou from "@/components/thank-you";
import Toast from "@/components/toast";
export default function Home() {
  return (
    <main>
      <div className="text-zinc-700">
        <HeartFall />
        <Navbar />
        <Banner />
        <AlbumImage />
        <Brides />
        <Groom />
        <SendGreetings />
        <HappyWedding />
        <ThankYou />
        <Audio />
        <Toast />
        <ScrollToTop />
      </div>
    </main>
  );
}
