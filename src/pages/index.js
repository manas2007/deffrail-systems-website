import { Geist, Geist_Mono } from "next/font/google";
import LandingPage from "@/components/website/home";
import { Navbar } from "@/components/website/global/navbar";
import { Footer } from "@/components/website/global/footer";
import LetsTalkModal from "@/components/website/global/modal/contactModal";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {

    const [showLetsTalkModal, setShowLetsTalkModal] = useState(false);

const handleContactUs = () => {
        setShowLetsTalkModal(true);
    }

  return (
    <div className="">
      <Navbar />
      <LandingPage handleContactUs={handleContactUs} />
      <Footer />
            {showLetsTalkModal ? <LetsTalkModal setShowModal={setShowLetsTalkModal} /> : <></>}

    </div>
  );
}
