import React from 'react'
import headerImg from '../../assets/HeaderImg.png'
import CustomButton from '../btns/CustomButton'
const Header = () => {
    return (
        <>
            <header className='w-full h-[80vh] bg-[#211C24]'>
                <div className="Container flex justify-between items-center ">
                    <div className="header-content max-h-[255px] text-white flex flex-col items-start gap-10">
                        <h3 className='font-semibold opacity-[40%] text-[25px] leading-[32px]'>Pro.Beyond.</h3>
                        <h1 className='font-thin text-8xl leading-[72px]' >IPhone 14 <span className='font-semibold'>Pro</span></h1>
                        <p className='text-[#909090] text-[18px] leading-[24px] font-medium'>Created to change everything for the better. For everyone</p>
                        <CustomButton borderColor={'border-white'} textColor={'text-white'} hoverBgColor={'hover:bg-[white]'} hoverTextColor={'hover:text-[#211C24]'}/>
                    </div>
                    <div className="headerImg h-full flex items-end">
                        <img src={headerImg} alt="headerImg" className='h-[80vh]'/>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header