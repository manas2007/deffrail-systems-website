import { SERVICES_DATA } from "@/components/website/global/constants/services";
import { Footer } from "@/components/website/global/footer";
import { Navbar } from "@/components/website/global/navbar";
import Service from "@/components/website/service";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ServiceMain = () => {

    const router = useRouter();
    const { id } = router.query;
    const [serviceData,setServiceData] = useState(null);

    useEffect(() => {

        if(id){
            const DATA = SERVICES_DATA[id];
            setServiceData(DATA);
        }

    },[id]);


    return (<div>
        <Navbar />
        {serviceData ? <Service SERVICES_DATA={serviceData} /> : <div>No Data Found</div>}
        <Footer />
    </div>)

}

export default ServiceMain
