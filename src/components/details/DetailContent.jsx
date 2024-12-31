import React from 'react'

const DetailContent = () => {
    return (
        <>
            <section className='bg-[#FAFAFA] py-[80px]'>
                <div className="Container bg-white py-[48px] px-10 flex flex-col gap-8">
                    <h3 className='font-medium text-2xl leading-[32px]'>Details</h3>
                    <p className='text-[#9D9D9D]'>Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays. Both critics and mass consumers always praise the quality of the picture provided by the products of the Californian brand. And last year's 6.7-inch Retina panels, which had ProMotion, caused real admiration for many.</p>
                    <div className='flex flex-col gap-4'>
                        <h3 className='font-medium text-[20px] leading-[24px]'>Screen</h3>
                        <div className="topPart flex flex-col gap-3">
                            <div className='flex justify-between'>
                                <h4 className='font-normal leading-[24px] text-[16px]'>Screen diagonal</h4>
                                <h4>6.7"</h4>
                            </div>
                            <hr />
                            <div className='flex justify-between'>
                                <h4 className='font-normal leading-[24px] text-[16px]'>The screen resolution</h4>
                                <h4>2796x1290</h4>
                            </div>
                            <hr />
                            <div className='flex justify-between'>
                                <h4 className='font-normal leading-[24px] text-[16px]'>The screen refresh rate</h4>
                                <h4>120 Hz</h4>
                            </div>
                            <hr />
                            <div className='flex justify-between'>
                                <h4 className='font-normal leading-[24px] text-[16px]'>The pixel density</h4>
                                <h4>460 ppi</h4>
                            </div>
                            <hr />
                            <div className='flex justify-between'>
                                <h4 className='font-normal leading-[24px] text-[16px]'>Screen type</h4>
                                <h4>OLED</h4>
                            </div>
                            <hr />
                            <div className='flex justify-between'>
                                <h4>Additionally</h4>
                                <p className='w-[132px] text-right'>
                                    Dynamic IslandAlways-On displayHDR displayTrue ToneWide color {'(P3)'}
                                </p>
                            </div>
                            <hr />
                            <h3 className='font-medium text-[20px] leading-[24px]'>CPU</h3>
                            <div className='flex justify-between'>
                                <h4 className='font-normal leading-[24px] text-[16px]'>CPU</h4>
                                <h4>A16 Bionic</h4>
                            </div>
                            <hr />
                            <div className='flex justify-between'>
                                <h4>Number of cores</h4>
                                <h46></h46>
                            </div>
                            <div className='w-full flex justify-center'>
                                <button className='py-4 px-[56px] border-[#545454] border-[1px] rounded-lg hover:bg-black hover:text-white'>View More </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DetailContent