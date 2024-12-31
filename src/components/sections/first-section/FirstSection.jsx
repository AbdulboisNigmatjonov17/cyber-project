import PlayStation from '../../../assets/PlayStation.png'
import AirPods from '../../../assets/AirPods.png'
import AppleVision from '../../../assets/AppleVision.png'
import MacBookAir from '../../../assets/MacBookAir.png'
import CustomButton from '../../btns/CustomButton'

const FirstSection = () => {
    return (
        <section className='w-full flex'>
            <div className='leftSectionPart w-[50%]'>
                <div className='flex'>
                    <div className="imgPart">
                        <img src={PlayStation} alt="PlayStation" />
                    </div>
                    <div className="contentPart w-[340px] flex flex-col justify-center gap-5 ">
                        <h2 className='font-medium text-[50px] leading-[40px]'>Playstation 5</h2>
                        <p className='text-[#909090]'>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
                    </div>
                </div>
                <div className='flex w-full'>
                    <div className='flex w-[50%] bg-[#EDEDED]'>
                        <img src={AirPods} alt="AirPods" />
                        <div className="leftContentSide w-[160px] ml-[100px] mt-[50px]">
                            <h3 className='font-light text-[30px] leading-[40px]'>Apple AirPods <span className='font-medium'>Max</span></h3>
                            <p className='text-[#909090]'>Computational audio. Listen, it's powerful</p>
                        </div>
                    </div>
                    <div className='flex w-[50%] bg-[#353535] text-white'>
                        <img src={AppleVision} alt="AppleVision" />
                        <div className="rightContentSide w-[160px] ml-[80px] mt-[50px]">
                            <h3 className='font-light text-[30px] leading-[40px]'>Apple Vision <span className='font-medium '>Pro</span></h3>
                            <p className='text-[#909090]'>An immersive way to experience entertainment</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightSectionPart w-[50%] flex items-center bg-[#EDEDED]">
                <div className="rightSectionContentPart w-[360px] flex flex-col gap-5 ml-[100px]">
                    <h2 className='text-[65px] leading-[55px] font-thin'>Macbook <span className='font-medium'>Air</span></h2>
                    <p className='text-[#909090]'>The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                    <CustomButton textColor={'text-black'} borderColor={'border-black'} hoverBgColor={'hover:bg-black'} hoverTextColor={'hover:text-white'} />
                </div>
                <div className='rightSectionImgPart w-full flex justify-end'>
                    <img src={MacBookAir} alt="MacBookAir" />
                </div>
            </div>

        </section>
    )
}

export default FirstSection