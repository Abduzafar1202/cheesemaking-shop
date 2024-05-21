import React from 'react'
import "./style.css"
import hero_img1 from "../../img/Rectangle 6.png" 
import hero_img2 from "../../img/Rectangle 226.png"  
import hero_img3 from "../../img/Rectangle 227.png" 
import cheese from "../../img/cheese 1.png" 
import diagrams from "../../img/arrows-diagrams-04 3 (2).png" 
import cereal from "../../img/cereal-bowl 1.png" 
import card_img1 from "../../img/Rectangle 65 (6).png" 
import card_img2 from "../../img/Rectangle 65.png" 
import card_img3 from "../../img/Rectangle 65 (1).png" 
import card_img4 from "../../img/Rectangle 65 (2).png"
import card_img5 from "../../img/Rectangle 65 (3).png" 
import card_img6 from "../../img/Rectangle 65 (4).png" 
import card_img7 from "../../img/Rectangle 65 (5).png" 
import card_img8 from "../../img/Rectangle 65 (7).png"
import img from "../../img/04-Features.png" 
import img_box from "../../img/bg.png" 
import img_box2 from "../../img/bg (1).png" 
import corusel from "../../img/06-Staff.png" 
import card3_img1 from "../../img/arrows-diagrams-04 3.png" 
import card3_img2 from "../../img/image 4.png" 
import card4_img from "../../img/Group 278.png" 
// import  from "../../img/" 
// import  from "../../img/" 
// import  from "../../img/" 
// import  from "../../img/"
// import  from "../../img/" 
// import  from "../../img/" 
// import  from "../../img/" 
// import  from "../../img/"







const Hero = ({state, setState}) => {
  return (
    <section className="hero">
          <div className="hero_img1">
      <img src={hero_img1} alt="" />
      <h2>Наборы для сыроделия</h2>
      <p>Все что вам нужно для приготовления сыра <br /> в домашних условиях</p>
      <button>Смотреть наборы</button>
    </div>
    <div className="hero_img2">
      <img src={hero_img2} alt="" />
      <h2>Сыры с плесенью</h2>
      <p>Рецепты</p>
    </div>
    <div className="hero_img3">
      <img src={hero_img3} alt="" />
      <h2>закваски для сыра</h2>
      <p>Акции</p>
    </div>
    <div className="navbar_staff">
      <button className='btn'><img src={cheese} alt="" /> <h2>Ингредиенты</h2></button>
      <ol>
        <li><button><h2>Закваски для сыра</h2><img src={diagrams} alt="" /></button></li>
        <li><button><h2>Ферменты для сыра</h2><img src={diagrams} alt="" /></button></li>
        <li><button><h2>Хлористый кальций</h2></button></li>
        <li><button><h2>Плесень для сыра</h2><img src={diagrams} alt="" /></button></li>
        <li><button><h2>Кисломолочные закваски</h2><img src={diagrams} alt="" /></button></li>
        <li><button><h2>Красители для сыра</h2></button></li>
        <li><button><h2>Специи для сыра</h2><img src={diagrams} alt="" /></button></li>
      </ol>
      
    </div>
    <div className="navbar_staff2">
      <button className='btn'><img src={cereal} alt="" /> <h2>Оборудование</h2></button>
      <ol>
        <li><button><h2>Формы для сыра</h2><img src={diagrams} alt="" /></button></li>
        <li><button><h2>Латексное покрытие</h2></button></li>
        <li><button><h2>Воск для сыра</h2></button></li>
        <li><button><h2>Термоусадочные пакеты</h2><img src={diagrams} alt="" /></button></li>
        <li><button><h2>Дренажные коврики</h2></button></li>
        <li><button className='li'><h2>Дренажные мешки и салфетки <br /> для прессования</h2></button></li>
        <li><button><h2>Дренажные контейнеры</h2></button></li>
      </ol>
    </div>
    <div className="card">
      <div className="navbar">
        <ol>
          <li>Популярные товары</li>
          <li>Акции</li>
        </ol>
      </div>
      <h2>Ингредиенты</h2>
      <div className="card_navbar">
        <ol>
          <li><div><img src={card_img1} alt="" /><h2>Мезофильная закваска <br /> Danisco CHOOZIT MM...</h2><p>1300₽/ 1 шт.</p><del>1800₽</del><button onClick={() => setState(state + 1)}>Добавить</button></div></li>
          <li><div><img src={card_img2} alt="" /><h2>Душистый перец <br /> горошком (100г)</h2><p>200₽/ 1 шт.</p><del>320₽</del><button onClick={() => setState(state + 1)}>Добавить</button></div></li>
          <li><div><img src={card_img3} alt="" /><h2>Красный перец молотый <br /> (100г)</h2><p>380₽/ 1 шт.</p><del>400₽</del><button onClick={() => setState(state + 1)}>Добавить</button></div></li>
          <li><div><img src={card_img4} alt="" /><h2>Мускатный орех <br /> молотый (100г)</h2><p>420₽/ 1 шт.</p><del>560₽</del><button onClick={() => setState(state + 1)}>Добавить</button></div></li>
          <li><div><img src={card_img5} alt="" /><h2>Форма для твердого <br /> сыра 1 кг</h2><p>1300₽/ 1 шт.</p><del>1800₽</del><button onClick={() => setState(state + 1)}>Добавить</button></div></li>
          <li><div><img src={card_img6} alt="" /><h2>Душистый перец <br /> горошком (100г)</h2><p>200₽/ 1 шт.</p><del>320₽</del><button onClick={() => setState(state + 1)}>Добавить</button></div></li>
          <li><div><img src={card_img7} alt="" /><h2>Красный перец молотый <br /> (100г)</h2><p>380₽/ 1 шт.</p><del>400₽</del><button onClick={() => setState(state + 1)}>Добавить</button></div></li>
          <li><div><img src={card_img8} alt="" /><h2>Мускатный орех <br /> молотый (100г)</h2><p>420₽/ 1 шт.</p><del>560₽</del><button onClick={() => setState(state + 1)}>Добавить</button></div></li>
        </ol>
      </div>
    </div>
    <div className="card2">
      <h2>Оборудование</h2>
      <div className="card_navbar">
      <ol>
          <li><div><img src={card_img1} alt="" /><h2>Мезофильная закваска <br /> Danisco CHOOZIT MM...</h2><p>1300₽/ 1 шт.</p><del>1800₽</del><button onClick={() => setState(state + 1)}>Добавить</button></div></li>
          <li><div><img src={card_img2} alt="" /><h2>Душистый перец <br /> горошком (100г)</h2><p>200₽/ 1 шт.</p><del>320₽</del><button onClick={() => setState(state + 1)}>Добавить</button></div></li>
          <li><div><img src={card_img3} alt="" /><h2>Красный перец молотый <br /> (100г)</h2><p>380₽/ 1 шт.</p><del>400₽</del><button onClick={() => setState(state + 1)}>Добавить</button></div></li>
          <li><div><img src={card_img4} alt="" /><h2>Мускатный орех <br /> молотый (100г)</h2><p>420₽/ 1 шт.</p><del>560₽</del><button onClick={() => setState(state + 1)}>Добавить</button></div></li>
          <li><div><img src={card_img5} alt="" /><h2>Форма для твердого <br /> сыра 1 кг</h2><p>1300₽/ 1 шт.</p><del>1800₽</del><button onClick={() => setState(state + 1)}>Добавить</button></div></li>
          <li><div><img src={card_img6} alt="" /><h2>Душистый перец <br /> горошком (100г)</h2><p>200₽/ 1 шт.</p><del>320₽</del><button onClick={() => setState(state + 1)}>Добавить</button></div></li>
          <li><div><img src={card_img7} alt="" /><h2>Красный перец молотый <br /> (100г)</h2><p>380₽/ 1 шт.</p><del>400₽</del><button onClick={() => setState(state + 1)}>Добавить</button></div></li>
          <li><div><img src={card_img8} alt="" /><h2>Мускатный орех <br /> молотый (100г)</h2><p>420₽/ 1 шт.</p><del>560₽</del><button onClick={() => setState(state + 1)}>Добавить</button></div></li>
        </ol>
      </div>
    </div>
    <div className="state"><h1>{state}</h1></div>
    <div className="img">
      <img src={img} alt=""  />
    </div>
    <div className="img_box">
      <h3>Мы подобрали для вас</h3>
      <img src={img_box} alt="" />
      <h2>более 1000 <br /> лучших рецептов</h2>
      <p>Мы собрали для Вас большую <br /> базу рецептов.</p>
      <button>Перейти</button>
    </div>
  <div className="img_box2">
      <img src={img_box2} alt="" />
      <h2>крутые Наборы <br /> для сыра</h2>
      <p>Готовые наборы сэкономят <br /> время, мы всё сделали за Вас.</p>
      <button>Перейти</button>
    </div>
     
     <div className="corusel">
      <h2>наше оборудование</h2>
      <img src={corusel} alt="" />
     </div>
     <div className="card3">
      <img src={card3_img1} alt="" className="img1" />
      <h2>Сырная тарелка</h2>
      <img src={card3_img2} alt="" className="img2" />
      <p className="p1">Так называется блюдо, которое состоит <br /> из разных сортов сыра. </p>
      <p className="p2">Читать далее </p>
     </div>

     <div className="card4">
      <h2 className="h1">Просмотренные товары</h2>
      <h2 className="h2">Аналогичные товары</h2>
      <img src={card4_img} alt="" />
      <div className="card_navbar">
        <ol>
          <li><div><img src={card_img1} alt="" /><h2>Мезофильная закваска <br /> Danisco CHOOZIT MM...</h2><p>1300₽/ 1 шт.</p><del>1800₽</del><button onClick={() => setState(state + 1)}>Добавить</button></div></li>
          <li><div><img src={card_img2} alt="" /><h2>Душистый перец <br /> горошком (100г)</h2><p>200₽/ 1 шт.</p><del>320₽</del><button onClick={() => setState(state + 1)}>Добавить</button></div></li>
          <li><div><img src={card_img3} alt="" /><h2>Красный перец молотый <br /> (100г)</h2><p>380₽/ 1 шт.</p><del>400₽</del><button onClick={() => setState(state + 1)}>Добавить</button></div></li>
          <li><div><img src={card_img4} alt="" /><h2>Мускатный орех <br /> молотый (100г)</h2><p>420₽/ 1 шт.</p><del>560₽</del><button onClick={() => setState(state + 1)}>Добавить</button></div></li>
          <li><div><img src={card_img5} alt="" /><h2>Форма для твердого <br /> сыра 1 кг</h2><p>1300₽/ 1 шт.</p><del>1800₽</del><button onClick={() => setState(state + 1)}>Добавить</button></div></li>
          
        </ol>
      </div>
    </div>

    </section>
  )
}


 export default Hero