import CustomButton from "../btns/CustomButton"
import ProductBannerCard from "./ProductBannerCard"

// images
import Img1 from './assets/AirPodsXwatch.png'
import Img2 from './assets/Ipad.png'
import Img3 from './assets/Galaxy.png'
import Img4 from './assets/MacBook.png'


const ProductBanner = () => {
    return (
        <section className="w-full min-h-[650px] flex ">
            <ProductBannerCard bgColor={'bg-white'} textColor={'text-black'} title={'Popular Products'} img={Img1} buttonComponent={<CustomButton textColor={'text-black'} borderColor={'border-black'} hoverBgColor={'hover:bg-black'} hoverTextColor={'hover:text-white'}/>} />
            <ProductBannerCard bgColor={'bg-[#F9F9F9]'} textColor={'text-black'} title={'Ipad Pro'} img={Img2} buttonComponent={<CustomButton textColor={'text-black'} borderColor={'border-black'} hoverBgColor={'hover:bg-black'} hoverTextColor={'hover:text-white'}/> } />
            <ProductBannerCard bgColor={'bg-[#EAEAEA]'} textColor={'text-black'} title={'Samsung Galaxy'} img={Img3} buttonComponent={<CustomButton textColor={'text-black'} borderColor={'border-black'} hoverBgColor={'hover:bg-black'} hoverTextColor={'hover:text-white'}/>} />
            <ProductBannerCard bgColor={'bg-[#2C2C2C]'} textColor={'text-white'} title={'Macbook Pro'} img={Img4} buttonComponent={<CustomButton textColor={'text-white'} borderColor={'border-white'} hoverBgColor={'hover:bg-white'} hoverTextColor={'hover:text-black'}/>} />
        </section>
    )
}

export default ProductBanner
