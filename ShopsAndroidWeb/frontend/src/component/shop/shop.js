import React, { Component} from "react";
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
            })
    }
    render() {
        return (
            <html>
                <div>
                    <img className="main-image" src={MainPhoto} alt="img" />
                    <div id="#top-bar-shop" className="top-bar-shop mgt-1pr">
                    </div>
                    <h1 className="main-center-text">Happy Holidays</h1>
                    <h3 className="main-center-text sub-center-text">Discounts on everything up to 20%</h3>
                    <div id="#top-bar-shop" className="top-bar-shop">
                    </div>
                    <body className="work-window">
                        <div className="instrument-bar">
                            <div className="sub-instrument-bar">
                                <h2 className="center">Search filter</h2>
                                <hr />
                                <h4 className="center sub-center">Platform</h4>
                                <div className="sub-center center item-instrument-bar">
                                    <h5 className="sub_text text-weight-normal">PC</h5>
                                    <input className="input-margin" type="checkbox" />
                                </div>
                                <div className="sub-center center item-instrument-bar">
                                    <h5 className="sub_text text-weight-normal">Laptop</h5>
                                    <input className="input-margin" type="checkbox" />
                                </div>
                            </div>
                            <hr className="mgt-10pr" />
                            <div className="sub-instrument-bar">
                                <h4 className="center sub-center">Type</h4>
                                <div className="sub-center center item-instrument-bar">
                                    <h5 className="sub_text text-weight-normal">RAM</h5>
                                    <input className="input-margin" type="checkbox" />
                                </div>
                                <div className="sub-center center item-instrument-bar">
                                    <h5 className="sub_text text-weight-normal">CPU</h5>
                                    <input className="input-margin" type="checkbox" />
                                </div>
                                <div className="sub-center center item-instrument-bar">
                                    <h5 className="sub_text text-weight-normal">GPU</h5>
                                    <input className="input-margin" type="checkbox" />
                                </div>
                                <div className="sub-center center item-instrument-bar">
                                    <h5 className="sub_text text-weight-normal">PSU</h5>
                                    <input className="input-margin" type="checkbox" />
                                </div>
                                <div className="sub-center center item-instrument-bar">
                                    <h5 className="sub_text text-weight-normal">Memory</h5>
                                    <input className="input-margin" type="checkbox" />
                                </div>
                                <div className="sub-center center item-instrument-bar">
                                    <h5 className="sub_text text-weight-normal">Monitor</h5>
                                    <input className="input-margin" type="checkbox" />
                                </div>
                                <div className="sub-center center item-instrument-bar">
                                    <h5 className="sub_text text-weight-normal">Cpu Fan</h5>
                                    <input className="input-margin" type="checkbox" />
                                </div>
                                <div className="sub-center center item-instrument-bar">
                                    <h5 className="sub_text text-weight-normal">Case Fan</h5>
                                    <input className="input-margin" type="checkbox" />
                                </div>
                            </div>
                            <hr className="mgt-10pr" />
                            <div className="sub-instrument-bar">
                                <h4 className="center sub-center">Manufactory</h4>
                                <div className="sub-center center item-instrument-bar">
                                    <h5 className="sub_text text-weight-normal">HyperX</h5>
                                    <input className="input-margin" type="checkbox" />
                                </div>
                                <div className="sub-center center item-instrument-bar">
                                    <h5 className="sub_text text-weight-normal">Samsung</h5>
                                    <input className="input-margin" type="checkbox" />
                                </div>
                                <div className="sub-center center item-instrument-bar">
                                    <h5 className="sub_text text-weight-normal">Kingston</h5>
                                    <input className="input-margin" type="checkbox" />
                                </div>
                                <div className="sub-center center item-instrument-bar">
                                    <h5 className="sub_text text-weight-normal">GoodRam</h5>
                                    <input className="input-margin" type="checkbox" />
                                </div>
                                <div className="sub-center center item-instrument-bar">
                                    <h5 className="sub_text text-weight-normal">Nvidia</h5>
                                    <input className="input-margin" type="checkbox" />
                                </div>
                                <div className="sub-center center item-instrument-bar">
                                    <h5 className="sub_text text-weight-normal">AMD</h5>
                                    <input className="input-margin" type="checkbox" />
                                </div>
                                <div className="sub-center center item-instrument-bar">
                                    <h5 className="sub_text text-weight-normal">Intel</h5>
                                    <input className="input-margin" type="checkbox" />
                                </div>
                            </div>
                        </div>
                        <div className="work-space">
                            {this.state.products.map(product => <div className="item-product">
                                <img alt="tite imag" className="img-tile-shop" src={`data:image/jpeg;base64,${product.image}`} />
                                <div className="tile">
                                    <h3 className="tile">{product.name}</h3>
                                    <h6>{product.description}</h6>
                                </div>
                                <div className="two-item">
                                    <h4 className="tile tile-price">{product.price} UAN</h4>
                                    <a className="link" href={"/"+product.link}>BUY</a>
                                </div>
                            </div>)}
                        </div>
                    </body>
                </div>
            </html >
        )
    }
}