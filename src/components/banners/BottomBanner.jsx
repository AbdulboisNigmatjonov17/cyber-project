import React from 'react'
import CustomButton from '../btns/CustomButton'
import BottomBannerBgImage from '../../assets/BottomBannerBgImage.jpeg'

const BottomBanner = () => {
    return (
        <div className='w-full h-[450px] flex items-center justify-center bg-no-repeat bg-cover' style={{backgroundImage: `url(${BottomBannerBgImage})`}}>
            <div className="contentBanner flex flex-col items-center gap-10">
                <div className="topPart text-center">
                    <h1 className='my-1 text-white font-thin text-[72px] leading-[72px]'>Big Summer <span className='font-light'>Sale</span></h1>
                    <p className='text-[#787878] font-normal text-[14px] leading-[32px]'>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
                </div>
                <CustomButton textColor={'text-white'} borderColor={'border-white'} hoverBgColor={'hover:bg-white'} hoverTextColor={'hover:text-black'}/>
            </div>
        </div>
    )
}

export default BottomBanner
