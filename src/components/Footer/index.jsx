import React from 'react'
import "./styl.css"
import logo from "../../img/Logo.svg" 
import Ruble from "../../img/Ruble.svg" 
import Vector from "../../img/Vector.svg" 
import Sberbank from "../../img/Sberbank.svg"
import Yandex from "../../img/Yandex.svg" 
import Mastercard from "../../img/Mastercard.svg" 
import Visa from "../../img/Visa.svg" 
import time from "../../img/alarm-clock-time-timer.3 1.svg"
import location from "../../img/interface-essential-195 2.svg"
import instagram from "../../img/logo-instagram 1.svg"
import vk from "../../img/logo-vk 1.svg" 
import tvitter from "../../img/logo-twitter 1.svg" 
import faceboock from "../../img/logo-facebook 1.svg"
import youtube from "../../img/logo-youtube 1.svg"






const Footer = () => {
  return (
    <footer className="footer">
     <div className="logo_navbar">
      <ol>
        <li><img src={logo} alt="" /></li>
        <li><h2>Компания</h2></li>
        <li><h2>Поддержка</h2></li>
        <li className="li"><h2>Способы оплаты</h2></li>
        <li className="li2"><h2>+7 495 120-00-00</h2></li>
      </ol>
     </div>
     <div className="logo_text">
      <h2>Все материалы данного сайта <br /> являются объектами авторского <br /> права.</h2>
      <p>Разработка сайта: ЛяЧиз</p>
     </div>
     <div className="Компания">
      <ol>
        <li><h2>О компании</h2></li>
        <li><h2>Акции и скидки</h2></li>
        <li><h2>Доставка и оплата</h2></li>
        <li><h2>Отзывы</h2></li>
        <li><h2>Гарантия и возврат</h2></li>
      </ol>
     </div>
     <div className="Поддержка">
      <ol>
        <li><h2>Вопрос-ответ</h2></li>
        <li><h2>Бонусная программа</h2></li>
        <li><h2>Политика конфиденциальности</h2></li>
        <li><h2>Персональные данных</h2></li>
      </ol>
     </div>
     <div className="Способы_оплаты">
      <ol>
        <li><img src={Ruble} alt="" /></li>
        <li><img src={Vector} alt="" /></li>
        <li><img src={Sberbank} alt="" /></li>
        <li><img src={Yandex} alt="" /></li>
        <li><img src={Mastercard} alt="" /></li>
        <li><img src={Visa} alt="" /></li>
      </ol>
     </div>
     <div className="footer_time">
      <img src={time} alt="" />
      <h2>Пн-пт 9:00 - 19:00</h2>
     </div>
     <div className="footer_location">
      <img src={location} alt="" />
      <h2>г. Москва,  улица Свободы 1/7</h2>
     </div>
     <div className="socialmedia">
      <ol>
        <li><img src={instagram} alt="" /></li>
        <li><img src={vk} alt="" /></li>
        <li><img src={tvitter} alt="" /></li>
        <li><img src={faceboock} alt="" /></li>
        <li><img src={youtube} alt="" /></li>
      </ol>
     </div>

    </footer>

  )
}


 export default Footer