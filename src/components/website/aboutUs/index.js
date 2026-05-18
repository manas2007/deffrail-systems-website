import Clients from "../home/clients";
import { Contact } from "../home/contact";
import { Partners } from "../home/partners";
import { Statistics } from "../home/statistics";
import HeroSection from "./heroSection";
import USP from "./usp";
import Vision from "./vision";
import WhoWeAre from "./whoWeAre";

const AboutUs = (props) => {

    const {handleContactUs} = props;

    return (<div>

        <HeroSection handleContactUs={handleContactUs} />
        <WhoWeAre handleContactUs={handleContactUs} />
        <Statistics handleContactUs={handleContactUs} />
        <USP handleContactUs={handleContactUs} />
        <Clients handleContactUs={handleContactUs} />
        <Vision handleContactUs={handleContactUs} />
        <Partners handleContactUs={handleContactUs} />
        <Contact handleContactUs={handleContactUs} />

    </div>)

}

export default AboutUs