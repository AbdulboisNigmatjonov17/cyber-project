import Header from '../components/header/Header'
import FirstSection from '../components/sections/first-section/firstSection'
import CarouselComponent from '../components/carouselCategory/CarouselComponent'
import ProductBanner from '../components/productsBanner/ProductBanner'
import DisCountProducts from '../components/products/DisCountProducts'
import BottomBanner from '../components/banners/BottomBanner'
import Products from '../components/products/Products'



const Home = () => {
    return (
        <>
            <Header />
            <FirstSection />
            <CarouselComponent />
            <Products />
            <ProductBanner />
            <DisCountProducts title={'Discounts up to -50%'}/>
            <BottomBanner />
        </>
    )
}

export default Home