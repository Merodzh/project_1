import React, { useRef } from 'react'
import './App.css'
import {ways} from './components/link/value'
import Link from './components/link/link'
import Logo from './images/LOGO.png'
import Burger from './images/main_burger.png'
import Why from './components/why-items/why-items'
import {data} from './components/why-items/value'
import why_Burger from './images/burger.png'
import why_Meat from './images/meat.png'
import why_Truck from './images/food truck.png'
import Burger_menu from "./components/burgers/burger_Menu"
import {info} from "./components/burgers/value"
import Br_1 from "./images/7.png"
import Br_2 from "./images/8.png"
import Br_3 from "./images/9.png"
import Br_4 from "./images/10.png"
import Br_5 from "./images/11.png"
import Br_6 from "./images/12.png"
import Br_7 from "./images/burger 3 1.png"
import Form from "./components/input/forms"
import {value} from "./components/input/value"
import Img from "./images/order_image.png"


export default function App() {
  const myRef = useRef(null)
  const input_1 = useRef(null)
  const input_2 = useRef(null)
  const input_3 = useRef(null)
  const order = useRef(null)
  const scroll = () => order.current.scrollIntoView({ behavior: "smooth" })
  return (
    <>
      <section className="main">
      <header className="header">
        <div className="container">
          <div className="logo">
          <img src={Logo} alt="Logo" />
          </div>
          <nav className="menu">
            <ul className="menu-list">
              <Link scroll={"#why-title"} text={ways.text_1} />
              <Link scroll={"#products-title"} text={ways.text_2}  />
              <Link scroll={"#order-title"} text={ways.text_3}  />
            </ul>
          </nav>
          <div className="currency" title="Изменить валюту" id="change-currency">
            $
          </div>
        </div>
      </header>

      <section className="main-content">
        <div className="container">
          <div className="main-info">
            <span className="main-small-info">Новое меню</span>
            <h1 className="main-title">Бургер чеддер</h1>
            <p className="main-text">
              Мы обновили наше меню, спешите попробовать сезонные новинки и
              насладиться отличным вкусом наших бургеров. Готовим для вас лучшие
              бургеры в городе из отборной мраморной говядины.
            </p>
            <div className="main-action">
            <button onClick={() => myRef.current.scrollIntoView({ behavior: "smooth" })} className="button" id="main-action-button">
        Смотреть меню
      </button>
            </div>
          </div>
          <img
            src={Burger}
            alt="Big Burger"
            className="main-image"
          />
        </div>
      </section>
    </section>

    <section className="why" id="why">
      <div className="container">
        <div id='why-title' className="why-title common-title">почему нас выбирают?</div>
        <div className="why-items">
        <Why src={why_Burger} title={data[0].title} text={data[0].text} />
        <Why src={why_Meat} title={data[1].title} text={data[1].text} />
        <Why src={why_Truck} title={data[2].title} text={data[2].text} />
        
        </div>
      </div>
    </section>

    <section className="products" id="products" ref={myRef} >
      <div className="container">
        <div id='products-title' className="products-title common-title">выберите свой бургер</div>
        <div className="products-items">
      
         <Burger_menu onClick={scroll} src={Br_1} title={info[0].title} text={info[0].text} price={info[0].price} weight={info[0].weight} />
         <Burger_menu onClick={scroll} src={Br_4} title={info[1].title} text={info[0].text} price={info[0].price} weight={info[0].weight} />
         <Burger_menu onClick={scroll} src={Br_5} title={info[0].title} text={info[0].text} price={info[0].price} weight={info[1].weight} />
         <Burger_menu onClick={scroll} src={Br_6} title={info[0].title} text={info[1].text} price={info[0].price} weight={info[0].weight} />
         <Burger_menu onClick={scroll} src={Br_7} title={info[1].title} text={info[0].text} price={info[0].price} weight={info[1].weight} />
         <Burger_menu onClick={scroll} src={Br_2} title={info[0].title} text={info[0].text} price={info[0].price} weight={info[0].weight} />
         <Burger_menu onClick={scroll} src={Br_1} title={info[0].title} text={info[1].text} price={info[0].price} weight={info[1].weight} />
         <Burger_menu onClick={scroll} src={Br_7} title={info[1].title} text={info[0].text} price={info[0].price} weight={info[0].weight} />
         <Burger_menu onClick={scroll} src={Br_6} title={info[0].title} text={info[0].text} price={info[0].price} weight={info[1].weight} />
         <Burger_menu onClick={scroll} src={Br_2} title={info[0].title} text={info[1].text} price={info[0].price} weight={info[0].weight} />
         <Burger_menu onClick={scroll} src={Br_5} title={info[1].title} text={info[0].text} price={info[1].price} weight={info[0].weight} />
         <Burger_menu onClick={scroll} src={Br_4} title={info[0].title} text={info[1].text} price={info[0].price} weight={info[1].weight} />
         <Burger_menu onClick={scroll}src={Br_3} title={info[0].title} text={info[0].text} price={info[1].price} weight={info[1].weight} />
         <Burger_menu onClick={scroll} src={Br_7} title={info[1].title} text={info[1].text} price={info[1].price} weight={info[0].weight} />
         <Burger_menu onClick={scroll} src={Br_3} title={info[1].title} text={info[1].text} price={info[0].price} weight={info[0].weight} />
         <Burger_menu onClick={scroll} src={Br_3} title={info[1].title} text={info[1].text} price={info[0].price} weight={info[0].weight} />
         <Burger_menu onClick={scroll} src={Br_6} title={info[1].title} text={info[1].text} price={info[0].price} weight={info[0].weight} />
         <Burger_menu onClick={scroll} src={Br_7} title={info[1].title} text={info[1].text} price={info[0].price} weight={info[0].weight} />
         <Burger_menu onClick={scroll} src={Br_3} title={info[1].title} text={info[1].text} price={info[0].price} weight={info[0].weight} />
         <Burger_menu onClick={scroll} src={Br_2} title={info[1].title} text={info[1].text} price={info[0].price} weight={info[0].weight} />
         <Burger_menu onClick={scroll} src={Br_1} title={info[1].title} text={info[1].text} price={info[0].price} weight={info[0].weight} />
         <Burger_menu onClick={scroll} src={Br_3} title={info[1].title} text={info[1].text} price={info[0].price} weight={info[0].weight} />
         <Burger_menu onClick={scroll} src={Br_5} title={info[1].title} text={info[1].text} price={info[0].price} weight={info[0].weight} />
         <Burger_menu onClick={scroll} src={Br_6} title={info[1].title} text={info[1].text} price={info[0].price} weight={info[0].weight} />

        </div>
      </div>
    </section>

    <section className="order" id="order" ref={order}>
      <div className="container">
        <div id='order-title' className="order-title common-title">оформление заказа</div>
        <img
          src={Img}
          alt="Burger in the box"
          className="order-image"
        />
        <div className="order-form">
          <div className="order-form-text">
            Заполните все данные и наш менеджер свяжется с вами для
            подтверждения заказа
          </div>
          <div className="order-form-inputs">
            <Form qet={input_1} placeholder={value.placeholder1} />
            <Form qet={input_2} placeholder={value.placeholder2} />
            <Form qet={input_3} placeholder={value.placeholder3} />
            <button onClick={() =>{
              let btnActive = false
              [input_1, input_2, input_3].forEach(element => {
                if (!element.value) {
                  alert('заполните все поля')
                  btnActive = false
                }
              });
              if (btnActive) {
                alert("заказ выполнен")
              }
            }} className="button" id="order-action">Оформить заказ</button>
          </div>
        </div>
      </div>
    </section>

    <footer className="footer">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="rights">Все права защищены</div>
      </div>
    </footer>
    </>
  )
}

