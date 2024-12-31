import Logo from '../../assets/Logo.png'

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className='bg-black text-white h-[40vh] py-8'>
                <div className='Container h-full flex justify-between'>
                    <div className='h-full flex flex-col justify-between w-[400px]'>
                        <div className="topPart">
                            <img className='mb-1' src={Logo} alt="whiteLogo" />
                            <p className='text-[#CFCFCF]'>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
                        </div>
                        <div className="footerIcons flex gap-5">
                            <TwitterIcon />
                            <FacebookOutlinedIcon />
                            <YouTubeIcon />
                            <Link target='blank' to={'https://www.instagram.com/abdulbois_707?igsh=M2V6ZGR3eXl3MmZ3'}>
                                <InstagramIcon />
                            </Link>
                        </div>
                    </div>
                    <ul>
                        <h3 className='mb-3'>Services</h3>
                        <li><a href="#">Bonus program</a></li>
                        <li><a href="#">Gift cards</a></li>
                        <li><a href="#">Credit and payment</a></li>
                        <li><a href="#">Service contracts</a></li>
                        <li><a href="#">Non-cash account</a></li>
                        <li><a href="#">Payment</a></li>
                    </ul>
                    <ul>
                        <h3 className='mb-3'>Assistance to the buyer</h3>
                        <li><a href="#">Find an order</a></li>
                        <li><a href="#">Terms of delivery</a></li>
                        <li><a href="#">Exchange and return of goods</a></li>
                        <li><a href="#">Guarantee</a></li>
                        <li><a href="#">Frequently asked questions</a></li>
                        <li><a href="#">Terms of use of the site</a></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer