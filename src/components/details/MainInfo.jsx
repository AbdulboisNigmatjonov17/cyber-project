
import Img1 from './assets/miniIphone.png'
import Img2 from './assets/faceIphone.png'
import Img3 from './assets/backIphone.png'
import Img4 from './assets/cornerIphone.png'

import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Battery4BarIcon from '@mui/icons-material/Battery4Bar';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import StoreIcon from '@mui/icons-material/Store';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useState } from 'react';

const MainInfo = () => {

    const [img, setImg] = useState(Img1)

    return (
        <>
            <div className="Container flex justify-between py-10">
                <div className="imgPart flex gap-10 items-center">
                    <div className="h-[445px] leftImages flex flex-col justify-between items-center">
                        <button onClick={()=> setImg(Img1)}>
                            <img src={Img1} alt="miniIphone" />
                        </button>
                        <button onClick={()=>setImg(Img2)}>
                            <img src={Img2} alt="faceIphone" />
                        </button>
                        <button onClick={()=>setImg(Img3)}>
                            <img src={Img3} alt="backIphone" />
                        </button>
                        <button onClick={()=>setImg(Img4)}>
                            <img src={Img4} alt="cornerIphone" />
                        </button>
                    </div>
                    <div className="mainImages">
                        <img src={img} alt="MainIphone" width={415} height={515}/>
                    </div>
                </div>
                <div className="contentPart w-[535px] flex flex-col gap-3">
                    <h2 className='font-bold text-[40px] leading-[40px]'>Apple iPhone 14 Pro Max</h2>
                    <div className='flex gap-3 items-center'>
                        <h3 className='font-medium text-3xl leading-[48px]'>$1399</h3>
                        <span className='text-[#A0A0A0] font-normal text-2xl leading-[32px]'>$1499</span>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <span className='text-[15px] leading-[24px] font-normal'>Select color :</span>
                        <div className="colors flex gap-2">
                            <div className='w-[32px] h-[32px] bg-black rounded-[50%] cursor-pointer'></div>
                            <div className='w-[32px] h-[32px] bg-[#781DBC] rounded-[50%] cursor-pointer'></div>
                            <div className='w-[32px] h-[32px] bg-[#E10000] rounded-[50%] cursor-pointer'></div>
                            <div className='w-[32px] h-[32px] bg-[#E1B000] rounded-[50%] cursor-pointer'></div>
                            <div className='w-[32px] h-[32px] bg-[#E8E8E8] rounded-[50%] cursor-pointer'></div>
                        </div>
                    </div>
                    <div className="storage flex justify-between">
                        <div className='py-4 px-10 rounded-lg border-[1px] text-[#D5D5D5] font-medium text-[14px] leading-[16px] cursor-pointer'>128GB</div>
                        <div className='py-4 px-10 rounded-lg border-[1px] text-[#6F6F6F] font-medium text-[14px] leading-[16px] cursor-pointer'>256GB</div>
                        <div className='py-4 px-10 rounded-lg border-[1px] text-[#6F6F6F] font-medium text-[14px] leading-[16px] cursor-pointer'>512GB</div>
                        <div className='py-4 px-10 rounded-lg border-[1px] text-black border-black font-medium text-[14px] leading-[16px] cursor-pointer'>1TB</div>
                    </div>
                    <div className="boxes w-[535px] h-[145px] grid grid-cols-3 gap-4 justify-between">
                        <div className="box flex items-center py-4 px-2 bg-[#F4F4F4] rounded-lg gap-2">
                            <PhoneIphoneIcon />
                            <div>
                                <h5 className='text-[#A7A7A7] font-normal text-[14px] leading-[16px]'>Screen size </h5>
                                <span className='text-[#4E4E4E] font-medium text-[14px] leading-[16px]'>6.7"</span>
                            </div>
                        </div>
                        <div className="box flex items-center py-4 px-2 bg-[#F4F4F4] rounded-lg gap-2">
                            <PhoneIphoneIcon />
                            <div>
                                <h5 className='text-[#A7A7A7] font-normal text-[14px] leading-[16px]'>CPU </h5>
                                <span className='text-[#4E4E4E] font-medium text-[14px] leading-[16px]'>Apple A16 Bionic</span>
                            </div>
                        </div>
                        <div className="box flex items-center py-4 px-2 bg-[#F4F4F4] rounded-lg gap-2">
                            <PhoneIphoneIcon />
                            <div>
                                <h5 className='text-[#A7A7A7] font-normal text-[14px] leading-[16px]'>Number of Cores </h5>
                                <span className='text-[#4E4E4E] font-medium text-[14px] leading-[16px]'>6</span>
                            </div>
                        </div>
                        <div className="box flex items-center py-4 px-2 bg-[#F4F4F4] rounded-lg gap-2">
                            <CameraAltIcon />
                            <div>
                                <h5 className='text-[#A7A7A7] font-normal text-[14px] leading-[16px]'>Main camera</h5>
                                <span className='text-[#4E4E4E] font-medium text-[14px] leading-[16px]'>48-12 -12 MP</span>
                            </div>
                        </div>
                        <div className="box flex items-center py-4 px-2 bg-[#F4F4F4] rounded-lg gap-2">
                            <CameraAltIcon />
                            <div>
                                <h5 className='text-[#A7A7A7] font-normal text-[14px] leading-[16px]'>Front-camera</h5>
                                <span className='text-[#4E4E4E] font-medium text-[14px] leading-[16px]'>12 MP</span>
                            </div>
                        </div>
                        <div className="box flex items-center py-4 px-2 bg-[#F4F4F4] rounded-lg gap-2">
                            <Battery4BarIcon />
                            <div>
                                <h5 className='text-[#A7A7A7] font-normal text-[14px] leading-[16px]'>Battery capacity</h5>
                                <span className='text-[#4E4E4E] font-medium text-[14px] leading-[16px]'>4323 mAh</span>
                            </div>
                        </div>
                    </div>
                    <p className='font-normal text-[14px] leading-[24px] text-[#6C6C6C] my-5'>Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras <span className='text-[#2C2C2C] underline'>more...</span></p>
                    <div className="btns w-full flex justify-between">
                        <button className='py-4 px-[56px] bg-white text-black border-black hover:bg-black hover:text-white border-[1px] rounded-md'>Add to Wishlist</button>
                        <button className='py-4 px-[56px] bg-black text-white hover:border-black hover:bg-white hover:text-black border-[1px] rounded-md'>Add to Card</button>
                    </div>
                    <div className="about flex justify-between my-2">
                        <div className='boxCard flex items-center gap-3'>
                            <div className="icon p-4 rounded-xl bg-[#F6F6F6]">
                                <AirportShuttleIcon fontSize='large' />
                            </div>
                            <div className='font-medium text-[14px] leading-[24px]'>
                                <h5 className=' text-[#717171]'>Free Delivery</h5>
                                <span className='text-black'>1-2 day</span>
                            </div>
                        </div>
                        <div className='boxCard flex items-center gap-3'>
                            <div className="icon p-4 rounded-xl bg-[#F6F6F6]">
                                <StoreIcon fontSize='large' />
                            </div>
                            <div className='font-medium text-[14px] leading-[24px]'>
                                <h5 className=' text-[#717171]'>In Stock</h5>
                                <span className='text-black'>Today </span>
                            </div>
                        </div>
                        <div className='boxCard flex items-center gap-3'>
                            <div className="icon p-4 rounded-xl bg-[#F6F6F6]">
                                <VerifiedIcon fontSize='large' />
                            </div>
                            <div className='font-medium text-[14px] leading-[24px]'>
                                <h5 className=' text-[#717171]'>Guaranteed</h5>
                                <span className='text-black'>1 year</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainInfo