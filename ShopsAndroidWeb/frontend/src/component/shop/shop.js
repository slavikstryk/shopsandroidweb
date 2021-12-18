import React, { Component } from "react";
import './style.css'
import MainPhoto from './image/main_shop.png'
import axios from "axios";

export default class Shop extends Component {

    state = {
        products: []
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:5402/api/Products/all")
            .then(res => {
                const products = res.data;
                this.setState({ products });
            }).catch()
    }

    render() {
        return (
            <html>
                <body>
                    <img className="main-image" src={MainPhoto} alt="img" />
                    <div id="#top-bar-shop" className="top-bar-shop mgt-1pr">
                    </div>
                    <h1 className="main-center-text">Happy Holidays</h1>
                    <h3 className="main-center-text sub-center-text">Discounts on everything up to 20%</h3>
                    <div id="#top-bar-shop" className="top-bar-shop">
                    </div>
                    <body>
                        <div className="bgm">
                            {this.state.products.map(product => <div className="item-product">
                                <img alt="tite imag" className="img-tile-shop" src={`data:image/jpeg;base64,${product.image}`} />
                                <div className="tile">
                                    <h3 className="tile tile-text">{product.name}</h3>
                                    <h6 className="tile-sub-text">{product.description}</h6>
                                </div>
                                <div className="two-item">
                                    <h4 className="tile tile-price">{product.price} UAN</h4>
                                    <a className="link" href={"/" + product.link}>BUY</a>
                                </div>
                            </div>)}
                        </div>
                    </body>
                </body>
            </html >
        )
    }
}