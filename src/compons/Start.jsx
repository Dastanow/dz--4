import React from "react";
import { PagesCart } from "../pages/pagesCart";
// import './com.css'


const Start = ()=>{
    return(
        <div style={{ display: "flex", gap: "30px", width: "299px" }}>
      <PagesCart img = {"https://caprice-russia.ru/assets/images/blog/2%20%D0%BD%D1%83%D0%B1%D1%83%D0%BA.jpg"}
      title={"snicers"} prais={"1000$"}
       />
         <PagesCart img = {"https://images.prom.ua/3732835621_krossovki-zhenskie-vikonty.jpg"}
      title={"snicers"} prais={"1000$"}
       />
       <PagesCart img={"https://images.prom.ua/4368775113_w600_h600_4368775113.jpg"} 
       title={"sneaker"} prais={"1000$"}/>
        </div>
    )
}

export default Start;