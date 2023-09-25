import React from 'react'
import './com.css'
import { Link } from 'react-router-dom';
import { Woumen } from './Kepka.jsx/Woumen';

export const Compt = () => {
  return (
    <div>
        <div className='nvbar'>
        <div className='container'>
    <div className='logo'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsScWYmyfPv3XdkNdEFVJ1wlDKMOgcSWUcg&usqp=CAU" alt="" />
    </div>
    <div className="menu">
      <ul className="menu_items">
       <Link to="/Can"><li>Мужское</li></Link> 
      <Link to="/start"> <li>Женское</li></Link> 
        <Link to={"/Ubut"}> <li>Унисекс</li></Link>
        <Link to={'/Kepk'}><li>Кепка</li></Link>
        <Link to={"/Woumen"}><li>Шляпа</li></Link>
       <Link to={"/Bisnes"} ><li>Безопасная сделка</li></Link>
      </ul>
    </div>
    <div>
      <button>Продать</button>
    </div>
    </div>
    </div>
  </div>
  )
}
export default Compt;

