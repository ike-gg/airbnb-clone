import React from 'react';
import starImage from '../images/star.png';

const Card = ({title, coverImg, rating, reviewCount, location, price, openSpots}) => {
  let badgeText 
  if (openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (location === "Online") {
    badgeText = "ONLINE"
  }
  
  return (
    <div className='card'>
      {
        badgeText && 
        <div className='card--badge'>{badgeText}</div>
      }
      <img 
        className='card--image' 
        src={coverImg} 
      />
      <div className='card--details'>
          <img className="card--title-star" src={starImage}/> 
          {rating} 
          <span className='card--title-details'>
            ({reviewCount}) {location}
          </span>
      </div>
      <p className='card--title'>
        {title}
      </p>
      <p className='card--price'>
        <strong>From ${price} /</strong> person
      </p>
    </div>
  )
}

export default Card;