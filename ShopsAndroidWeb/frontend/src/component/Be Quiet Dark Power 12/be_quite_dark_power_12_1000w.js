import React from "react";
import './style.css';
import Image from './image/dark_power_12.png'
import БП from './image/m_1000w.png'
import Chip from './image/chip_1000w.png'

export default function DarkPower() {
    return (
        <html className="html">
            <header>
                <hr className="hr" />
                <h1 className="main-center-text">Happy Holidays</h1>
                <hr className="hr" />
            </header>
            <body>
                <div className="boda">
                    <img src={Image} className="img-main" alt="main img" />
                    <div>
                        <h1 className="main-text m-main">Be Quiet! Dark Power 12 1000W</h1>
                        <h5 className="main-text m-main d-m-text">be quiet! Dark Power Pro 12 1500W с
                            эффективностью 80 PLUS® Titanium и производительностью мирового
                            класса благодаря полностью цифровому управлению и бескаркасной концепции вентилятора.</h5>
                        <ul className="list-desc">
                            <li className="m-main d-m-text li">Эффективность 80 PLUS Titanium (до 94,9%)</li>
                            <li className="m-main d-m-text li">Полностью цифровое управление (PFC, LLC, SR/12V) и топология full bridge</li>
                            <li className="m-main d-m-text li">Специальный ключ (Overclocking key) для выбора между шестью 12В линиями или одной сверхмощной</li>
                            <li className="m-main d-m-text li">Алюминиевый корпус и модульные кабели с индивидуальной оплеткой для потрясающего внешнего вида</li>
                            <li className="m-main d-m-text li">Десять лет гарантии от производителя</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h4 className="features-top-text">Характеристики</h4>
                    <h4 className="m-main">СЕРТИФІКАЦІЯ 80 PLUS® TITANIUM</h4>
                    <div className="boda">
                        <h1 className="m-main d-m-text features-d-m-text">Dark Power Pro 12 1500W має
                            сертифікат 80 PLUS Titanium з ефективністю перетворення енергії
                            до 94,9% і забезпечує безліч переваг для вашої системи, включаючи
                            меншу споживану потужність, знижений рівень нагріву і більш тиху
                            роботу. Рівень споживання енергії в режимі «Очікування» (Standby)
                            становить менш 0.1 Вт.</h1>
                        <img src={БП} className="m-1pt chip" alt="img elenent" />
                    </div>
                    <hr />
                    <h4 className="m-main">ЯПОНСКИЕ КОНДЕНСАТОРЫ 105°C</h4>
                    <div className="boda">
                        <h1 className="m-main d-m-text">В Dark Power 12 1000W используются только 
                        лучшие компоненты. Применение исключительно высококачественных 
                        японских конденсаторов с температурным режимом 105°C обеспечивает
                         стабильность, надежность и очень длительный срок эксплуатации.</h1>
                        <img src={Chip} className="chip" alt="img elenent" />
                    </div>
                </div>
                <div className="send order">

                </div>
            </body>
        </html>
    )
}