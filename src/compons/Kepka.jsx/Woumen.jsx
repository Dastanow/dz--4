import React from 'react'
import { PagesCart } from '../../pages/pagesCart'
export const Woumen = () => {
  return (
    <div style={{ display: "flex", gap: "30px", width: "299px" }}>
         <PagesCart img = {"https://goggles.su/image/catalog/hats/hsnbrg002.jpg"}
      title={"шляпа"} prais={"50$"}/>
       <PagesCart img = {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAewlBaKPJ_xTeojRODL6cmBTJ8pRF7nELerAKL41h&s"}
      title={"шляпа"} prais={"20$"}/>
       <PagesCart img = {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrCQpeejMXVrgODwnxM847I12MyWOljMesIdH0Pqk&s"}
      title={"шляпа"} prais={"100$"}/>
    </div>
  )
}
export default Woumen ;
