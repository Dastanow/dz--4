import React from 'react'
import './Pagesss.css'

export const PagesCart = ({img, title, prais}) => {
  return (
<div>
<div className='cart'>
    <div className='cart2'>
        <img src= {img} alt="" />
                <h2>{title}</h2>
                <h3>{prais}</h3>
    </div>
</div>
</div>
    );
}
export default PagesCart;