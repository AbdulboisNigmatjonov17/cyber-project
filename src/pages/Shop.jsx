import DetailContent from "../components/details/DetailContent"
import MainInfo from "../components/details/MainInfo"
// import Reviews from "../components/details/Reviews"
import DisCountProducts from '../components/products/DisCountProducts'

const Shop = () => {
  return (
    <>
      <div className="Container h-[10vh] flex items-center">
        <ul className="text-[#A4A4A4] w-full flex gap-4 font-medium text-[16px] leading-[16px]">
          <li>Home</li>
          <li>{'>'}</li>
          <li>Catalog</li>
          <li>{'>'}</li>
          <li>Smartphones</li>
          <li>{'>'}</li>
          <li>ِAplle</li>
          <li>{'>'}</li>
          <li>
            <span className="text-black">
              Iphone 14 Pro max
            </span>ِ
          </li>
        </ul>
      </div>
      <MainInfo />
      <DetailContent/>
      {/* <Reviews/> */}
      <DisCountProducts title={'Related Products'}/>
    </>
  )
}

export default Shop