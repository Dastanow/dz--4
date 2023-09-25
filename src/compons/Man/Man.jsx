import React from 'react'
import { PagesCart } from '../../pages/pagesCart'


export const Can = () => {
  return (
    <div style={{ display: "flex", gap: "30px", width: "299px" }}>
        <PagesCart img = {"https://basket-10.wb.ru/vol1393/part139360/139360402/images/big/2.webp"}
      title={"Jordan"} prais={"2000$"}/>
        <PagesCart img = {"https://brooklynstore.com.ua/content/images/25/muzhskie-krossovki-nike-jordan-max-aura-4-dn3687-104-63119905925079_small11.jpg"}
      title={"snicers"} prais={"1000$"}
       />
       <PagesCart img={"https://werare.com.ua/image/cache/catalog/men-treiners/dz7292-200-1-267x300.jpg"} 
       title={"AIR jordan"} prais={"2000$"}/>
    </div>
  )
}
export default Can;