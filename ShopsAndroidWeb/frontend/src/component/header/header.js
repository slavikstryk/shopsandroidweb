import React from 'react';
import "./style.css"
import main_text from '../../images/favicon.png'

function main() {
    window.location.assign('/');
}


export default function Header() {
    return (
        <div>
            <body className="body">
                <div className="top-bar">
                    <div className="links-box">
                        <a href="/shop" className="butt-link">Магазин</a>
                        <a href="/about" className="butt-link">Про нас</a>
                        <a href="/" className="butt-link">Контактна інформація</a>
                        <a className="butt-link-two" href="/support">Support</a>
                        <a className="butt-link-two" href="http://www.youtube.com/channel/UCvF0iRcz57YUjp0n6BcrhPQ">Youtube chanell</a>
                    </div>
                </div>
            </body>
        </div>
    )
}