import React from 'react'
import { PagesCart } from '../../pages/pagesCart'
// import { PagesCart } from '../../pages/pagesCart'


export const Ubut = () => {
  return (
    <div style={{ display: "flex", gap: "30px", width: "299px" }}>
        <PagesCart img={"https://zhikrussia.ru/pictures/product/big/5827_big.jpg"}
        title={" Zhik 22 FUZE"} prais = {"1222$"}/>
         <PagesCart img={"https://ae04.alicdn.com/kf/H055905bd8ba347ea9e556c1170a22508t.jpeg_640x640.jpg"}
        title={" Zhik 22 FUZE"} prais = {"1222$"}/> 
        <PagesCart img={"https://img5.lalafo.com/i/posters/original/79/43/23/4551d55d0305369a8b0f88c2dc.jpeg"}
        title={" Zhik 22 FUZE"} prais = {"1222$"}/>
    </div>
  )
}
export default Ubut;
