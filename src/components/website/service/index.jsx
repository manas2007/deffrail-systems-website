import ServiceHeroSection from "./heroSection/index.jsx";
import Intro from "./intro/index.jsx";
import ProductRange from "./productRange/index.jsx";
import Advantage from "./advantage/index.jsx";
import { Contact } from "../home/contact/index.jsx";

const Service = (props) => {

    const { SERVICES_DATA } = props;

    return(<div>

        <ServiceHeroSection SERVICES_DATA={SERVICES_DATA} />
        <Intro SERVICES_DATA={SERVICES_DATA} />
        <ProductRange SERVICES_DATA={SERVICES_DATA} />
        <Advantage SERVICES_DATA={SERVICES_DATA} />
        <Contact />

    </div>)

}

export default Service