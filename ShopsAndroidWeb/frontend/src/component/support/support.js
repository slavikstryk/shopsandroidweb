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
        console.log('data send = ', this.state)
    }

    onChangeInputHandler = (e) => {
        var target = e.target;
        this.setState({
            [target.name]: target.value
        });
    }


    render() {
        const {firstname,lastname, phone, email, product, text} = this.state;
        console.log(this);
        return (
            <html>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            First Name:
                            <input id="#firstname" name="firstname" type="text" value={firstname} onChange={this.onChangeInputHandler} />
                        </label>
                        <label>
                            Last Name:
                            <input name="lastname" type="text" value={lastname} onChange={this.onChangeInputHandler} />
                        </label>
                        <label>
                            Phone number:
                            <input name="phonenumber" type="text" value={phone} onChange={this.onChangeInputHandler} />
                        </label>
                        <label>
                            E-Mail:
                            <input name="email" type="text" value={email} onChange={this.onChangeInputHandler} />
                        </label>
                        <label>
                            Product:
                            <input name="product" type="text" value={product} onChange={this.onChangeInputHandler} />
                        </label>
                        <label>
                            Text:
                            <input name="text" type="text" value={text} onChange={this.onChangeInputHandler} />
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </html>
        )
    }

}