const ProductBannerCard = ({ img, title, buttonComponent, bgColor, textColor }) => {
    return (
        <>
            <div className={`w-[25%] h-[700px] ${bgColor} flex flex-col items-center justify-between py-8`}>
                <div className="imgPart max-w-[400px] max-h-[400px] flex justify-center ">
                    <img src={img} alt={title} width={400}  height={400} className="object-cover"/>
                </div>
                <div className="contentPart flex flex-col gap-4 items-start w-[296px]">
                    <h2 className={`${textColor} font-light text-[33px] leading-[48px]`}>{title}</h2>
                    <p className="text-[#909090] font-medium text-[14px] leading-6">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                    {buttonComponent}
                </div>
            </div>
        </>
    )
}

export default ProductBannerCard
