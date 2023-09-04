import React from 'react'

const ShoeCard = ( { shoe, changeBigShoeImage, bigShoeImage } ) => {
  const handleClick = () => {
    if (bigShoeImage !== shoe.bigShoe) {
        changeBigShoeImage(shoe.bigShoe)
    }
  }
    return (
    <div className={`border-2 rounded-xl ${ bigShoeImage === shoe.bigShoe ? 'border-coral-red' : 'border-transparent' } cursor-pointer max-sm:flex-1 `}
        onClick={handleClick}
    >
      <div className='flex items-center justify-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 '>
        <img className='object-contain ' width={127} height={103} src={shoe.thumbnail} alt="Shoe Collection" />
      </div>
    </div>
  )
}

export default ShoeCard