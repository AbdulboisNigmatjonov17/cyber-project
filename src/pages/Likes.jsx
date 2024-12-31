import { useLocation } from 'react-router-dom';

const Likes = () => {
    const location = useLocation();
    const likedProducts = location.state ? location.state.likedProducts : [];

    return (
        <div className='Container'>
            <div>
                <h2 className='text-[25px] font-semibold'>Liked Products:</h2>
            </div>
            <div className='h-[60vh] w-full  flex flex-col items-center justify-center'>
                <p>No liked products yet.</p>
            </div>
        </div>
    );
};

export default Likes;