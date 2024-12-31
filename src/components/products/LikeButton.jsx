import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const LikeButton = ({ liked, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`icon-container cursor-pointer w-12 h-12 flex items-center justify-center rounded-md transition-all ${liked ? "bg-[#F6F6F6]" : "bg-[#F6F6F6]"}`}
        >
            {liked ? (
                <FavoriteIcon sx={{ color: "red", fontSize: 30 }} />
            ) : (
                <FavoriteBorderIcon sx={{ color: "#909090C4", fontSize: 30 }} />
            )}
        </div>
    );
};

export default LikeButton;
