import React, { Component } from "react";
import axios from "axios";
import './style.css'

export default class Support extends Component {
    state = {
        firstname: '',
        lastname: '',
        phonenumber: '',
        email: '',
        product: '',
        text: ''
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.post("http://127.0.0.1:5402/api/Report/post", this.state)
            .then(responce => {
                console.log(responce);
            })
        console.log('data send = ', this.state);

        this.setState({
            firstname: '',
            lastname: '',
            phonenumber: '',
            email: '',
            product: '',
            text: ''
        })
    }

    onChangeInputHandler = (e) => {
        var target = e.target;
        this.setState({
            [target.name]: target.value
        });
    }

    render() {
        const { firstname, lastname, phonenumber, email, product, text } = this.state;
        console.log(this);
        return (
            <html className="support-bg">
                <form id="#form" onSubmit={this.handleSubmit}>
                    <div className="form-box">
                        <div className="form-main-box">
                            <div className="box">
                                <input id="#firstname"
                                    className="input"
                                    placeholder="Name"
                                    name="firstname" type="text"
                                    value={firstname}
                                    onChange={this.onChangeInputHandler} />
                                <input
                                    className="input"
                                    placeholder="Last name"
                                    name="lastname"
                                    type="text" value={lastname}
                                    onChange={this.onChangeInputHandler} />
                                <input
                                    className="input"
                                    placeholder="Phone number"
                                    name="phonenumber"
                                    type="text" value={phonenumber}
                                    onChange={this.onChangeInputHandler} />
                            </div>
                        </div>
                        <div className="form-main-box">
                            <div className="box">
                                <input
                                    className="input"
                                    placeholder="Product name"
                                    name="product"
                                    type="text"
                                    value={product}
                                    onChange={this.onChangeInputHandler} />
                                <input
                                    className="input"
                                    placeholder="e-mail"
                                    name="email"
                                    type="text"
                                    value={email}
                                    onChange={this.onChangeInputHandler} />
                                <textarea
                                    placeholder="Enter text message..."
                                    className="textarea"
                                    name="text" type="text"
                                    value={text}
                                    onChange={this.onChangeInputHandler} />
                            </div>
                        </div>
                    </div>
                    <button className="butt" type="submit">Submit</button>
                </form>
            </html>
        )
    }

}