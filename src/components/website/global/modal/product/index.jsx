import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";
import CloseIcon from '@mui/icons-material/Close';
import styles from "./productModalStyles.module.css";

const ProductModal = (props) => {

    const { product, setShowModal } = props;
    const isMobile = useCheckMobileScreen();

    console.log(" Active Product :: ", product);

    return (
        <div className="relative">

            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className={`my-6 mx-auto max-w-5xl bg-white opacity-[0.98] h-fit rounded-[1.1rem] min-h-[] relative ${isMobile ? 'w-[95%] h-fit' : 'w-[70%] max-h-[]'}`}>
                    {/* Modal Content */}
                    <div className={isMobile ? "flex-col" : "flex w-full justify-center"}>
                        {/* Img */}
                        <div className={isMobile ? "hidden" : "w-[50%] rounded-[1.1rem_1.1rem_1.1rem_1.1rem]"}>
                            <img className="w-full h-full rounded-[1.1rem_0rem_0rem_1.1rem]" src={product.image} alt={product.title} />
                        </div>
                        {/* Content */}
                        <div className={isMobile ? "w-full px-[1rem] py-[2rem] max-h-[35rem] overflow-y-auto" : "w-[50%] py-[2rem] px-[1.5rem] overflow-y-auto max-h-[35rem] "}>
                            <h3 className="text-[2.5rem] font-bold mb-[1rem]">{product.title}</h3>
                            <div>
                                {product.about.map((data) => <p>{data}</p>)}
                            </div>
                        </div>
                    </div>
                    <div onClick={() => setShowModal(false)} className={`${styles.closeIcon}`}>
                        <CloseIcon style={{ fontSize: "1rem", color: "#4E4E4E" }} />
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>

        </div>
    )

}

export default ProductModal