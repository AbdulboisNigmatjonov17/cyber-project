import CardButton from '../../btns/CardButton'
import { useState } from 'react';
import LikeButton from '../LikeButton';

// data
import { productData } from '../data/productsData'

const FeaturedProducts = () => {

  const [likedCards, setLikedCards] = useState([]);

  const toggleLike = (id) => {
    if (likedCards.includes(id)) {
      setLikedCards(likedCards.filter((cardId) => cardId !== id));
    } else {
      setLikedCards([...likedCards, id]);
    }
  };


  const featuredProductsCards = productData
    .filter((item) => item.featuredProducts === true)


  return (
    <div className='min-h-[900px]'>
      <div className='Container grid grid-cols-4 gap-5 '>
        {
          featuredProductsCards.map((item) => {
            const liked = likedCards.includes(item.id);
            return (
              <div key={item.id} className="ProductCard bg-[#F6F6F6] w-[270px] py-6 px-4 rounded-xl flex flex-col justify-between gap-3">
                <div className="iconPart w-full flex justify-end">
                  <LikeButton liked={liked} onClick={() => toggleLike(item.id)} />
                </div>
                <div className="imgPart w-full flex justify-center">
                  <img src={item.img} width={160} alt={item.title} />
                </div>
                <div className="contentPart w-full flex flex-col text-center gap-2">
                  <h3>{item.title}</h3>
                  <h2 className='font-semibold text-2xl leading-6'>${item.price}</h2>
                </div>
                <CardButton />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default FeaturedProducts
