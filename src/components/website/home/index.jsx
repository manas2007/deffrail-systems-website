import { HeroSection } from "./heroSection";
import { Statistics } from "./statistics";
import { Expertise } from "./expertise";
import { Solutions } from "./solutions";
import { Sectors } from "./sectors";
import { Testimonials } from "./testimonials";
import { Sustainability } from "./sustainability";
import { Contact } from "./contact";
import { Partners } from "./partners";
import Clients from "./clients";

const LandingPage = (props) => {

    const { handleContactUs } = props;

    return (<div>
        <HeroSection handleContactUs={handleContactUs} />
        <Statistics handleContactUs={handleContactUs} />
        <Expertise handleContactUs={handleContactUs} />
        <Solutions handleContactUs={handleContactUs} />
        <Sectors handleContactUs={handleContactUs} />
        <Clients handleContactUs={handleContactUs} />
        <Testimonials handleContactUs={handleContactUs} />
        <Sustainability handleContactUs={handleContactUs} />
        <Partners handleContactUs={handleContactUs} />
        <Contact handleContactUs={handleContactUs} />
    </div>)

}

export default LandingPage;