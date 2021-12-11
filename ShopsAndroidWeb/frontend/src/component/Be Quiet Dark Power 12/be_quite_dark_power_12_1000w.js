import React from "react";
import './style.css';
import Image from './image/dark_power_12.png'

export default function DarkPower() {
    return (
        <html className="html">
            <header>
                <hr className="hr" />
                <h1 className="main-center-text">Happy Holidays</h1>
                <hr className="hr" />
            </header>
            <body className="boda">
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
            </body>
        </html>
    )
}