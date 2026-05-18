import AboutUs from "@/components/website/aboutUs";
import { Navbar } from "@/components/website/global/navbar";
import { Footer } from "@/components/website/global/footer";
import LetsTalkModal from "@/components/website/global/modal/contactModal";
import { useState } from "react";

const AboutUsMain = () => {

      const [showLetsTalkModal, setShowLetsTalkModal] = useState(false);

      const handleContactUs = () => {
        setShowLetsTalkModal(true);
    }


    return (<div className="">
        <Navbar />
        <AboutUs handleContactUs={handleContactUs} />
        <Footer />
              {showLetsTalkModal ? <LetsTalkModal setShowModal={setShowLetsTalkModal} /> : <></>}

    </div>)

}

export default AboutUsMain