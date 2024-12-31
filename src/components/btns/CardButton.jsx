import React from 'react'

const CardButton = ({event, }) => {
  return (
    <button onClick={event} className='bg-black text-white rounded-lg py-3 px-16 hover:opacity-50'>
        Buy Now
    </button>
  )
}

export default CardButton
