import React from 'react'

const DetailCard = ({detail: {id, title, image, detail}}) => {
  return (
    <div className='detail__card'>
          <img src={image} alt="detail_img" className='detail_image'/>
          <h1>{title}</h1>
          <p>{detail}</p>
    </div>
  )
}

export default DetailCard