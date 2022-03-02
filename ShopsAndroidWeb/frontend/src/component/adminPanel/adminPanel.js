import React, { Component } from 'react';
import axios from 'axios';
import './style.css';

export default class AdminPanel extends Component {
    productDTO = {
        name: 'SSD KINGSTON',
        price: '3423',
        image: 'werfds',
        typeProduct: 'SSD',
        description: 'sadsdfsdf',
        link: '/kingston a 400 240gb',
        identityANDROID: 'IDENT'
    }

    handleSubmitPost = event => {
        event.preventDefault();

        axios.post("http://127.0.0.1:5402/api/Products/post", this.productDTO)
            .then(responce => {
                console.log(responce);
            })
    }

    onChangeInputHandler = (e) => {
        var target = e.target;
        this.productDTO({
            [target.name]: target.value
        });
    }

    productClick = event => {

    }

    render() {
        return (
            <body className="background">
                <div>
                    <div className="line-dotted"></div>
                    <h1 className="white-color">ADMIN PANEL</h1>
                    <div className="line-dotted"></div>
                </div>
                <div className="sel-bar">
                    <h1 className="sp-text" onClick={this.productClick}>PRODUCT</h1>
                    <div className="vl-bar"></div>
                    <h1 id="statText" className="sp-text">STATEMENT</h1>
                    <div className="vl-bar"></div>
                    <h1 className="sp-text">REPORTS</h1>
                    <div className="vl-bar"></div>
                    <h1 className="sp-text">DELIVERED</h1>
                </div>
                <div className="line-dotted"></div>
                <div className="sel-bar">
                    <h1 className="sp-text" onClick={this.productClick}>POST</h1>
                    <div className="vl-bar"></div>
                    <h1 id="statText" className="sp-text">DELETE</h1>
                    <div className="vl-bar"></div>
                    <h1 className="sp-text">GET</h1>
                    <div className="vl-bar"></div>
                    <h1 className="sp-text">PUT</h1>
                </div>
            </body>
        )
    }
}