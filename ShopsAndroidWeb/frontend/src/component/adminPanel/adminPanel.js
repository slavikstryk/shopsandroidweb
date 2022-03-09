import React, { Component } from 'react';
import axios from 'axios';
import noimage from '../../images/noimage.png'
import './style.css';

class PostProd extends Component {
    state = {
        name: '',
        price: '',
        image: '',
        description: '',
        link: '',
        typeProduct: '',
        identityANDROID: ''
    }

    base64 = "";

    onChangeInputHandler = (e) => {
        var target = e.target;
        this.setState({
            [target.name]: target.value
        })
    }

    imgtob64(event) {
        // eslint-disable-next-line
        let files = event.target.files;
        // eslint-disable-next-line
        let reader = new FileReader();
        // eslint-disable-next-line
        reader.readAsDataURL(files[0]);

        reader.onload = (e) => {

            this.setState({
                selectedFile: e.target.result,
            })
        }
    }

    

    postProdSubmit = event => {
        event.preventDefault();
        var nameCH = false, descCH = false, priceCH = false, typeCH = false, linkCH = false;
        if (document.getElementById("nminpt").value.length < 5)
            document.getElementById("nminpt").style.border = "1px dotted red";
        else if (document.getElementById("nminpt").value.length >= 5)
            nameCH = true;
        if (document.getElementById("description").value.length < 10)
            document.getElementById("description").style.border = "1px dotted red";
        else if (document.getElementById("description").value.length >= 10)
            descCH = true;
        if (document.getElementById("price").value.length < 3)
            document.getElementById("price").style.border = "1px dotted red";
        else if (document.getElementById("price").value.length >= 3)
            priceCH = true;
        if (document.getElementById("type").value.length < 3)
            document.getElementById("type").style.border = "1px dotted red";
        else if (document.getElementById("type").value.length >= 3)
            typeCH = true;
        if (document.getElementById("link").value.length < 15)
            document.getElementById("link").style.border = "1px dotted red";
        else if (document.getElementById("link").value.length >= 15)
            linkCH = true;

        if (nameCH && priceCH && descCH && typeCH && linkCH) {
            axios.post("http://127.0.0.1:5402/api/Products/post", this.state).then((response) => {
                console.log(response);
            })
        }

        setTimeout(this.clear, 2000);
    }



    clear() {
        document.getElementById("nminpt").style.border = "1px dotted rgb(163, 163, 163)";
        document.getElementById("description").style.border = "1px dotted rgb(163, 163, 163)";
        document.getElementById("price").style.border = "1px dotted rgb(163, 163, 163)";
        document.getElementById("type").style.border = "1px dotted rgb(163, 163, 163)";
        document.getElementById("link").style.border = "1px dotted rgb(163, 163, 163)";
    }

    render() {
        const fileInput = React.createRef();

        return (
            <div id="postProdPanel" className="center">
                <img alt='imgPostProd' className="img-postProd" onClick={() => fileInput.current.click()} src={noimage} />
                <input type="file" onChange={this.imgtob64(this)} ref={fileInput} style={{ display: 'none' }} />
                <div className="work-window-product-post">
                    <div className="table-postProd">
                        <input
                            id="nminpt"
                            placeholder="Product name"
                            name="name"
                            onChange={this.onChangeInputHandler}
                            className="inpt"
                            type="text" />
                        <textarea
                            id="description"
                            placeholder="Short description"
                            name="description"
                            className="inpt"
                            onChange={this.onChangeInputHandler}
                            type="text" />
                    </div>
                    <div className="table-postProd">
                        <input
                            id="price"
                            className="inpt"
                            type="text"
                            name="price"
                            onChange={this.onChangeInputHandler}
                            placeholder="Price" />
                        <input
                            id="type"
                            className="inpt"
                            type="text"
                            name="typeProduct"
                            onChange={this.onChangeInputHandler}
                            placeholder="Type" />
                        <input
                            id="link"
                            className="inpt"
                            type="text"
                            name="link"
                            onChange={this.onChangeInputHandler}
                            placeholder="Link for web" />
                    </div>
                </div>
                <button id="prodSendButt" className="butt-" onClick={this.postProdSubmit}>POST</button>
                <script>

                </script>
            </div>
        )
    }
}

class DelProd extends Component {

    state = {
        products: []
    }

    nameDel = "";

    onChangeInputHandler = (e) => {
        var target = e.target;
        this.nameDel = target.value;
        console.log(this.nameDel);
    }

    delProdSubmit = event => {
        event.preventDefault();

        var nameCH = false;
        if (document.getElementById("nminptDel").value.length < 5)
            document.getElementById("nminptDel").style.border = "1px dotted red";
        else if (document.getElementById("nminptDel").value.length >= 5)
            nameCH = true;
        if (nameCH) {
            axios.get(`http://127.0.0.1:5402/api/Products/getname/${this.nameDel}`)
                .then(res => {
                    const products = res.data;
                    this.setState({ products });
                    console.log(products);
                    document.getElementById("sbmTextDelProd").style.visibility = "visible";
                    document.getElementById("sbmTextDelProd").style.marginBottom = "10px";
                }).catch()
        }
        setTimeout(this.clear, 2000);
    }

    clear() {
        document.getElementById("nminpt").style.border = "1px dotted rgb(163, 163, 163)";
        document.getElementById("nminptDel").style.border = "1px dotted rgb(163, 163, 163)";
        document.getElementById("description").style.border = "1px dotted rgb(163, 163, 163)";
        document.getElementById("price").style.border = "1px dotted rgb(163, 163, 163)";
        document.getElementById("type").style.border = "1px dotted rgb(163, 163, 163)";
        document.getElementById("link").style.border = "1px dotted rgb(163, 163, 163)";
    }

    delClick = event => {
        event.preventDefault();
        axios.delete(`http://127.0.0.1:5402/api/Products/delete/${this.nameDel}`)
            .then(response => {
                console.log(response);
                document.getElementById("del-submit-prod").visibility = "collapse";
            })
    }

    render() {
        return (
            <div id="delProdPanel" className="center">
                <div className="work-window-product-post">
                    <div className="table-postProd">
                        <input
                            id="nminptDel"
                            placeholder="Product name"
                            name="nameDel"
                            onChange={this.onChangeInputHandler}
                            className="inpt"
                            type="text" />
                    </div>
                </div>
                <button id="prodSendButt" className="butt-" onClick={this.delProdSubmit}>DELETE</button>
                <div id="del-submit-prod" className="work-window card-del">
                    <h2 className="font-color-admP" id="sbmTextDelProd">You realy to delete this item?</h2>
                    <div className="card-del">
                        {this.state.products.map(product => <div className="carder">
                            <img alt="tite imag" className="img_submit_del_prod" src={`data:image/jpeg;base64,${product.image}`} />
                            <div className="tab2_del_prod">
                                <div className="bottom_border_dotted">
                                    <h3 className="tile tile-text font-color-admP">{product.name}</h3>
                                    <h4 className="tile tile-price font-color-admP">{product.price} UAN</h4>
                                </div>
                                <div className="flex_row flex_center">
                                    <button className="remov_butt_del_prod" onClick={this.delClick}>DELETE</button>
                                    <button className="cancel_butt_del_prod">CANCEL</button>
                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        )
    }
}

export default class AdminPanel extends Component {

    //line 1
    productClick() {
        document.getElementById("prodSetup").style.visibility = "visible";
        document.getElementById("prodSetup").style.height = "auto";
        document.getElementById("prodText").style.backgroundColor = "#1e1a41";

        document.getElementById("statSetup").style.visibility = "collapse";
        document.getElementById("statSetup").style.height = "0px";
        document.getElementById("statText").style.backgroundColor = "#0f0e1f";

        document.getElementById("repSetup").style.visibility = "collapse";
        document.getElementById("repSetup").style.height = "0px";
        document.getElementById("repText").style.backgroundColor = "#0f0e1f";

        document.getElementById("delSetup").style.visibility = "collapse";
        document.getElementById("delSetup").style.height = "0px";
        document.getElementById("delText").style.backgroundColor = "#0f0e1f";
    }
    statementClick() {
        document.getElementById("prodSetup").style.visibility = "collapse";
        document.getElementById("prodSetup").style.height = "0px";
        document.getElementById("prodText").style.backgroundColor = "#0f0e1f";

        document.getElementById("statSetup").style.visibility = "visible";
        document.getElementById("statSetup").style.height = "auto";
        document.getElementById("statText").style.backgroundColor = "#1e1a41";

        document.getElementById("repSetup").style.visibility = "collapse";
        document.getElementById("repSetup").style.height = "0px";
        document.getElementById("repText").style.backgroundColor = "#0f0e1f";

        document.getElementById("delSetup").style.visibility = "collapse";
        document.getElementById("delSetup").style.height = "0px";
        document.getElementById("delText").style.backgroundColor = "#0f0e1f";

        document.getElementById("postProdPanel").style.visibility = "collapse";
        document.getElementById("delProdPanel").style.visibility = "collapse";
    }
    reportClick() {
        document.getElementById("prodSetup").style.visibility = "collapse";
        document.getElementById("prodSetup").style.height = "0px";
        document.getElementById("prodText").style.backgroundColor = "#0f0e1f";

        document.getElementById("statSetup").style.visibility = "collapse";
        document.getElementById("statSetup").style.height = "0px";
        document.getElementById("statText").style.backgroundColor = "#0f0e1f";

        document.getElementById("repSetup").style.visibility = "visible";
        document.getElementById("repSetup").style.height = "auto";
        document.getElementById("repText").style.backgroundColor = "#1e1a41";

        document.getElementById("delSetup").style.visibility = "collapse";
        document.getElementById("delSetup").style.height = "0px";
        document.getElementById("delText").style.backgroundColor = "#0f0e1f";

        document.getElementById("postProdPanel").style.visibility = "collapse";
        document.getElementById("delProdPanel").style.visibility = "collapse";
    }
    deliveryClick() {
        document.getElementById("prodSetup").style.visibility = "collapse";
        document.getElementById("prodSetup").style.height = "0px";
        document.getElementById("prodText").style.backgroundColor = "#0f0e1f";

        document.getElementById("statSetup").style.visibility = "collapse";
        document.getElementById("statSetup").style.height = "0px";
        document.getElementById("statText").style.backgroundColor = "#0f0e1f";

        document.getElementById("repSetup").style.visibility = "collapse";
        document.getElementById("repSetup").style.height = "0px";
        document.getElementById("repText").style.backgroundColor = "#0f0e1f";

        document.getElementById("delSetup").style.visibility = "visible";
        document.getElementById("delSetup").style.height = "auto";
        document.getElementById("delText").style.backgroundColor = "#1e1a41";

        document.getElementById("postProdText").style.backgroundColor = "#0f0e1f";
        document.getElementById("delProdText").style.backgroundColor = "#0f0e1f";
        document.getElementById("getProdText").style.backgroundColor = "#0f0e1f";
        document.getElementById("putProdText").style.backgroundColor = "#0f0e1f";

        document.getElementById("postProdPanel").style.visibility = "collapse";
        document.getElementById("delProdPanel").style.visibility = "collapse";
    }

    //line 2
    postProdClick() {
        document.getElementById("postProdPanel").style.visibility = "visible";
        document.getElementById("postProdPanel").style.height = "auto";
        document.getElementById("delProdPanel").style.visibility = "collapse";
        document.getElementById("delProdPanel").style.height = "0px";

        document.getElementById("postProdText").style.backgroundColor = "#1e1a41";
        document.getElementById("delProdText").style.backgroundColor = "#0f0e1f";
        document.getElementById("getProdText").style.backgroundColor = "#0f0e1f";
        document.getElementById("putProdText").style.backgroundColor = "#0f0e1f";
    }

    delProdClick() {
        document.getElementById("postProdPanel").style.visibility = "collapse";
        document.getElementById("postProdPanel").style.height = "0px";
        document.getElementById("delProdPanel").style.visibility = "visible";
        document.getElementById("delProdPanel").style.height = "auto";

        document.getElementById("postProdText").style.backgroundColor = "#0f0e1f";
        document.getElementById("delProdText").style.backgroundColor = "#1e1a41";
        document.getElementById("getProdText").style.backgroundColor = "#0f0e1f";
        document.getElementById("putProdText").style.backgroundColor = "#0f0e1f";
    }

    render() {
        window.onload = function () {
            document.getElementById("prodSetup").style.visibility = "collapse";
            document.getElementById("prodSetup").style.height = "0px";
            document.getElementById("prodText").style.backgroundColor = "#0f0e1f";
            document.getElementById("statSetup").style.visibility = "collapse";
            document.getElementById("statSetup").style.height = "0px";
            document.getElementById("statText").style.backgroundColor = "#0f0e1f";
            document.getElementById("repSetup").style.visibility = "collapse";
            document.getElementById("repSetup").style.height = "0px";
            document.getElementById("repText").style.backgroundColor = "#0f0e1f";
            document.getElementById("delSetup").style.visibility = "collapse";
            document.getElementById("delSetup").style.height = "0px";
            document.getElementById("delText").style.backgroundColor = "#0f0e1f";

            document.getElementById("postProdPanel").style.visibility = "collapse";
            document.getElementById("delProdPanel").style.visibility = "collapse";

            document.getElementById("sbmTextDelProd").style.visibility = "collapse";
        }
        return (
            <body className="background">
                <div className="w100">
                    <div className="line-dotted"></div>
                    <h1 className="white-color">ADMIN PANEL</h1>
                    <div className="line-dotted"></div>
                </div>
                <div className="sel-bar">
                    <h1 id="prodText" className="sp-text" onClick={this.productClick}>PRODUCTS</h1>
                    <div className="vl-bar"></div>
                    <h1 id="statText" className="sp-text" onClick={this.statementClick}>STATEMENTS</h1>
                    <div className="vl-bar"></div>
                    <h1 id="repText" className="sp-text" onClick={this.reportClick}>REPORTS</h1>
                    <div className="vl-bar"></div>
                    <h1 id="delText" className="sp-text" onClick={this.deliveryClick}>DELIVEREDS</h1>
                </div>
                <div className="line-dotted"></div>
                <div id="prodSetup" className="sel-bar">
                    <h1 id="postProdText" onClick={this.postProdClick} className="sp-text">POST</h1>
                    <div className="vl-bar"></div>
                    <h1 id="delProdText" onClick={this.delProdClick} className="sp-text">DELETE</h1>
                    <div className="vl-bar"></div>
                    <h1 id="getProdText" className="sp-text">GET</h1>
                    <div className="vl-bar"></div>
                    <h1 id="putProdText" className="sp-text">PUT</h1>
                </div>
                <div id="statSetup" className="sel-bar">
                    <h1 className="sp-text">POST</h1>
                    <div className="vl-bar"></div>
                    <h1 className="sp-text">DELETE</h1>
                    <div className="vl-bar"></div>
                    <h1 className="sp-text">GET</h1>
                    <div className="vl-bar"></div>
                    <h1 className="sp-text">PUT</h1>
                </div>
                <div id="repSetup" className="sel-bar">
                    <h1 className="sp-text">POST</h1>
                    <div className="vl-bar"></div>
                    <h1 className="sp-text">DELETE</h1>
                    <div className="vl-bar"></div>
                    <h1 className="sp-text">GET</h1>
                    <div className="vl-bar"></div>
                    <h1 className="sp-text">PUT</h1>
                </div>
                <div id="delSetup" className="sel-bar">
                    <h1 className="sp-text">POST</h1>
                    <div className="vl-bar"></div>
                    <h1 className="sp-text">DELETE</h1>
                    <div className="vl-bar"></div>
                    <h1 className="sp-text">GET</h1>
                    <div className="vl-bar"></div>
                    <h1 className="sp-text">PUT</h1>
                </div>
                <div className="line-dotted"></div>
                <div className="sel-bar" id="postProd"><PostProd /></div>
                <div className="sel-bar" id="delProd"><DelProd /></div>
            </body>
        )
    }
}