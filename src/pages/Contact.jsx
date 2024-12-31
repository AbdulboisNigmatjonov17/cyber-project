import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Contact = () => {
    return (
        <>
            <div className='w-full h-[80vh] flex justify-center items-center'>
                <div className="contactCard flex flex-col gap-14 border-[2px] border-black rounded-3xl py-14 px-10">
                    <h1 className='text-center text-5xl font-semibold leading-10'>cyber</h1>
                    <form className="formPart flex flex-col gap-2">
                        <div className='text-[#5c5c5c] py-2 px-5 rounded-xl border-[2px] border-black'>
                            <input type="email" required placeholder='enter your gmail' className='py-1 px-2'/>
                            <PermIdentityOutlinedIcon className='cursor-pointer' />
                        </div>
                        <div className='text-[#5c5c5c] py-2 px-5 rounded-xl border-[2px] border-black'>
                            <input type="password" required placeholder='enter your password' className='py-1 px-2'/>  
                            <VisibilityOffIcon className='cursor-pointer'/>
                        </div>
                        <button className='border-black border-[2px] hover:text-black hover:bg-white rounded-xl py-2 text-white bg-black transition-all' type='submit'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact