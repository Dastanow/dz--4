import React from 'react'
import { PagesCart } from '../../pages/pagesCart'
export const Kepk = () => {
  return (
    <div style={{ display: "flex", gap: "30px", width: "299px" }}>
         <PagesCart img = {"https://trendzone.ru/upload/iblock/c21/lah93001tre_nb_03_i.jpg"}
      title={"шляпа"} prais={"50$"}/>
       <PagesCart img = {"https://redshark.ru/12776-thickbox_default/kepka-bogner001.jpg"}
      title={"шляпа"} prais={"20$"}/>
       <PagesCart img = {"https://kkaravaev.com/wa-data/public/shop/products/55/46/14655/images/25260/25260.1200.jpg"}
      title={"шляпа"} prais={"100$"}/>
    </div>
  )
}
export default Kepk ;
