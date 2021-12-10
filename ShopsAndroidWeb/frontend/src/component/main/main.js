import React from "react";
import './style.css'
import Photo from '../../images/photo_main.png'
import Ram_icon from '../../image/rgb_ram.jpg'
import Cpu from '../../image/ryzen.jpg'
import PCU from '../../image/pcu.jpg'
import GPU from '../../image/rtx_3080.jpg'

export default function Main() {
    return (
        <html>
            <header>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
            </header>
            <div className="main_box">
                <h1 className="text_main">Headset in different<br /> styles
                    from different<br /> manufacturers<br /><h6 className="sub-text">Large Range of Products</h6></h1>
                <div className="black" />
                <img className="imgmain_main" src={Photo} alt="main icon"></img>
            </div>
            <div className="card-box">
                <div className="card">
                    <img className="img-tile r_image" src={Cpu} alt="cpu icon" />
                    <label className="tile_sub_text">Powerful processors for various tasks</label>
                </div>
                <div className="card">
                    <img className="img-tile" src={Ram_icon} alt="ram icon" />
                    <label className="tile_sub_text">Beautiful and beatrate RAM</label>
                </div>
                <div className="card">
                    <img className="img-tile r_image" src={PCU} alt="pcu icon" />
                    <label className="tile_sub_text">Efficient and quiet power supplies</label>
                </div>
                <div className="card">
                    <img className="img-tile r_image" src={GPU} alt="pcu icon" />
                    <label className="tile_sub_text">Powerful, quiet, beautiful video cards</label>
                </div>
            </div>
        </html>
    )
}