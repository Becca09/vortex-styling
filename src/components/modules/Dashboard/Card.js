import React from 'react'
import Container from '../../layouts/common/Container'

const Card = ({imgSrc, cardName, cardDescription, onClick}) => {
  return (

    <Container>
      <div className='flex flex-row bg-white my-10  p-5 gap-7 rounded-2xl shadow-2xl cursor-pointer w-11/12' onClick={onClick}>
        <div>
          <img src={imgSrc} alt={cardName} width={110} className='mt-3'/>
        </div>
        <div>
          <h1 className='font-bold text-2xl mt-9'>
            {cardName}
          </h1>
          <div>{cardDescription}</div>
        </div>
      </div>
    </Container>
  )
}

export default Card