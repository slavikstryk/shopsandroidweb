import React from 'react';
import "./style.css"
import main_text from '../../images/ShopX.png'

function main() {
    window.location.assign('/');
}


export default function Header() {
    return (
        <html>
            <header>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </header>
            <body className="body">
                <div className="top-bar">
                    <div className="links-box">
                        <img className="imgmain" onClick={main} src={main_text} alt="main text"></img>
                        <a href="/shop" className="butt-link">Maгaзин</a>
                        <a href="/" className="butt-link">Koнтaктнa iнфopмaцiя</a>
                        <a className="butt-link-two" href="/support">Support</a>
                        <a className="butt-link-two" href="http://www.youtube.com/channel/UCvF0iRcz57YUjp0n6BcrhPQ">Youtube chanell</a>
                    </div>
                </div>
            </body>
        </html>
    )
}