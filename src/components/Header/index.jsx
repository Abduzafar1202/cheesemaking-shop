import React from 'react'
import "./style.css"
import location from "../../img/interface-essential-195 2.svg"
import time from "../../img/alarm-clock-time-timer.3 1.svg"
import nav from "../../img/users-06 1.svg"
import logo from "../../img/Logo.svg"
import media_img1 from "../../img/01.png"
import media_img2 from "../../img/02.png"
import media_img3 from "../../img/03.png"
import telegram from "../../img/Telegram.svg"
import watsap from "../../img/WhatsUp.svg"
import messenger from "../../img/Messenger.svg"
import phone from "../../img/phones-03 1.svg"
import korzinka from "../../img/shopping-cart 1.svg"
import arrows from "../../img/arrows-diagrams-04 3.svg"
import search from "../../img/search-loupe 2.svg"
// import logo from "../../img/"  



const Header = () => {
  return (
    <header className="header">
      {/* <img src={logo} alt="" /> */}
      <div className="container">
        <div className="cty">
          <img src={location} alt="" />
          <h2>Ваш город:</h2>
        <select class="input" name="select-service-type" >
               <option value="services-type" disabled="" selected=""><h2>Москва</h2></option>
        </select>
        </div>
        <div className="time">
          <img src={time} alt="" />
          <h2>Пн-Пт 9:00 - 19:00</h2>
        </div>
        <div className="navbar">
          <ol>
            <li>О компании</li>
            <li>Преимущества</li>
            <li>Акционные товары</li>
            <li><img src={nav} alt="" /> Войти в аккаунт</li>
          </ol>
        </div>
        <div className="media">
          <div className="navbar">
            <ol>
              <li><img src={logo} alt="" /></li>
              <li><img src={media_img1} alt="" /></li>
              <li><img src={media_img2} alt="" /></li>
              <li><img src={media_img3} alt="" /></li>
            </ol>
          </div>
          
          
        </div>
        <div className="smm">
          <div className="navbar">
            <ol>
              <li><img src={telegram} alt="" /></li>
              <li><img src={watsap} alt="" /></li>
              <li><img src={messenger} alt="" /></li>
            </ol>
          </div>
          <h2 className="phone">+8 916 460-19-60</h2>
          <button>
            <img src={phone} alt="" />
            <h2>Заказать звонок</h2>
          </button>
        </div>
        <div className="karzinka">
          <h2  className="h2">Ваша корзина</h2>
          <h2 className="sum">1680 руб.</h2>
          <img src={korzinka} alt="" />
        </div>
        <div className="header_and">
          <div className="navbar">
            <ol>
              <li>Рецепты <img src={arrows} alt="" /></li>
              <li>Доставка и оплата</li>
              <li>Калькулятор Сыродела</li>
              <li>Отзывы</li>
              <li>Вопросы и ответы</li>
              <li>Контакты</li>
            </ol>
          </div>
          <div className="search">
            <img src={search} alt="" />
            <input type="search" placeholder='Введите название товара или артикул' />
          </div>
        </div>
      </div>
    </header>

  )
}

export default Header