import { NavLink, useRouteError } from 'react-router-dom'
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

function ErrorPage() {
  const error = useRouteError()

  if (error.status === 404) {
    return (
      <>
        <Navbar />
        <div className="Container h-[60vh] flex items-center justify-center">
          <div className="w-[50%] rounded-3xl h-[30vh] flex flex-col gap-5 items-center justify-center border-black border-[2px] ">
            <WarningAmberIcon fontSize='large' />
            <h1>404 - page not found</h1>
            <button className='bg-black text-white hover:bg-white hover:text-black font-medium rounded-lg py-2 px-3'>
              <NavLink to="/">Return to the Home Page</NavLink>
            </button>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <div className="Container h-[60vh] flex flex-col gap-5 items-center justify-center">
      <h1>👇Something went wrong :(👇</h1>
      <p className="bg-opacity-75">{error.message}</p>
      <button className='bg-black text-white font-medium rounded-lg py-1 px-2'>
        <NavLink to="/">Return to the Home Page</NavLink>
      </button>
    </div>
  )
}

export default ErrorPage