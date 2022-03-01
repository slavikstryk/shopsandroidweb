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

    render() {
        return (
            <body className="background">
                <div>
                    <div className="line-dotted"></div>
                    <h1 className="white-color">ADMIN PANEL</h1>
                    <div className="line-dotted"></div>
                </div>
            </body>)
    }
}