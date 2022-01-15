import React from 'react';
import Header from './component/header/header';
import { Route } from 'react-router-dom';

import Main from './component/main/main';
import Shop from './component/shop/shop';
import Support from './component/support/support';

//SSD
import SSD240GB from './component/ssd/240GB SSD HyperX/ssd240gb';
import SSD480GB from './component/ssd/480GB SSD HyperX/ssd480gb';
import SSD960GB from './component/ssd/960GB SSD HyperX/ssd960gb';
import SSD120GBA400 from './component/ssd/120GB SSD Kingston A400/a400120gb';
import SSD240GBA400 from './component/ssd/240GB SSD Kingston A400/a400240gb';
import SSD480GBA400 from './component/ssd/480GB SSD Kingston A400/a400480gb';
import SSD960GBA400 from './component/ssd/960GB SSD Kingston A400/a400960gb';
import SSD1_92TBA400 from './component/ssd/1.92TB SSD Kingston A400/a4001.92tb';
import SSD120GBFURY from './component/ssd/120GB SSD Kingston HyperX Fury/FURY120gb';
import SSD240GBFURY from './component/ssd/240GB SSD Kingston HyperX Fury/FURY240gb';
import SSD480GBFURY from './component/ssd/480GB SSD Kingston HyperX Fury/FURY480gb';

//RAM
import RAM1X4GBFURY from './component/ram/1x4GB 3200 Kingston Fury HyperX/1x4GB3200KingstonFuryHyperX';
import RAM2X4GBFURY from './component/ram/2x4GB 3200 Kingston Fury HyperX/2x4GB3200KingstonFuryHyperX';
import RAM2X8GB3200FURYRGB from './component/ram/2x8 3200 Kingston Fury RGB HyperX/2x8GB3200KingstonFuryHyperXRgb';
import RAM4X8GB3200FURYRGB from './component/ram/4x8 3200 Kingston Fury RGB HyperX/4x8GB3200KingstonFuryHyperXRgb';

//CPU
import R1200AMD from './component/cpu/r1200AMD/r1200amd';
import R3500AMD from './component/cpu/r3500AMD/r3500amd';
import R1600AMD from './component/cpu/r1600AMD/r1600amd';
import I3101000 from './component/cpu/i3-10100/i310100';
import I510600KF from './component/cpu/i5-10600KF/i510600KF';
import I910900K from './component/cpu/i9-10900K/i910900K';

//GPU
import ASUSGTX770TI from './component/gpu/AsusNvidiaGTX770TI/asusnvidiagtx770ti';
import NVIDIAGTX1030 from './component/gpu/NvidiaGTX1030/asusgt1030';
import NVIDIAGTX1050 from  './component/gpu/NvidiaGTX1050/msigtx1050';
import AMDRX4704GB from './component/gpu/AMDRX4704GB/amdrx4704gb';
import AMDRX5708GB from './component/gpu/AMDRX5708GB/amdrx5708gb';
import AMDRX5804GB from './component/gpu/AMDRX5804GB/amdrx5804gb';

//PSU
import GAMEMAX400W from './component/psu/GAMEMAX400W/gamemax400w';
import GAMEMAX600W from './component/psu/GAMEMAX600W/gamemax600w';
import GAMEMAX800W from './component/psu/GAMEMAX800W/gamemax800w';
import BEQUIETDARKPOWER11550W from './component/psu/BEQUIETDARKPOWER11550W/bequietdarkpower11550w';
import BEQUIETDARKPOWER11750W from './component/psu/BEQUIETDARKPOWER11750W/bequietdarkpower11750w';
import BEQUIETDARKPOWER111200W from './component/psu/BEQUIETDARKPOWER111200W/bequietdarkpower111200w';

//CPUFAN
import IDCOOLINGSE903BBLUE from './component/cpufan/IDCOOLINGSE903BBlue/idcooligse903bblue';
import IDCOOLINGSE914XTBASIC from './component/cpufan/IDCOOLINGSE914XT/idcooligse914xt';
import IDCOOLINGSE207XTBLACK from './component/cpufan/IDCOOLINGSE207XTBlack/idcooligse207xtblack';
import IDCOOLINGAURAFLOWX240SNOW from './component/cpufan/IDCOOLINGSEAURAFLOWX240SNOW/idcooligauraflowx240snow';
import IDCOOLINGFROSTFLOWX360 from './component/cpufan/IDCOOLINGFROSTFLOWX360/idcooligfrostflowx360';
import IDCOOLINGZOOMFLOW360XT from './component/cpufan/IDCOOLINGZOOMFLOW360XT/idcooligzoomflow360xt';

//HDD
import WESTERNDIGITALBLUE500GB from './component/hdd/Western Digital Blue 500GB/westerndigitalblue500gb';
import WESTERNDIGITALBLUE1TB from './component/hdd/Western Digital Blue 1TB/westerndigitalblue1tb';

function App() {
  return (
    <html>
      <head>
        <title><i>ShopX</i></title>
        <link rel="shortcut icon" href='./images/favicon.ico' />
      </head>
      <body>
        <Header />
        <Route exact path="/" component={Main} />
        <Route path="/kingston hyperx fury rgb 240 gb" component={SSD240GB}/>
        <Route path="/kingston hyperx fury rgb 480 gb" component={SSD480GB}/>
        <Route path="/kingston hyperx fury rgb 960 gb" component={SSD960GB}/>
        <Route path="/kingston a 400 120 gb" component={SSD120GBA400}/>
        <Route path="/kingston a 400 240 gb" component={SSD240GBA400}/>
        <Route path="/kingston a 400 480 gb" component={SSD480GBA400}/>
        <Route path="/kingston a 400 960 gb" component={SSD960GBA400}/>
        <Route path="/kingston a 400 1 92 tb" component={SSD1_92TBA400}/>
        <Route path="/kingston hyperx fury 120 gb" component={SSD120GBFURY}/>
        <Route path="/kingston hyperx fury 240 gb" component={SSD240GBFURY}/>
        <Route path="/kingston hyperx fury 480 gb" component={SSD480GBFURY}/>
        <Route path="/kingston hyperx fury 1 x 4 gb 3200" component={RAM1X4GBFURY}/>
        <Route path="/kingston hyperx fury 2 x 4 gb 3200" component={RAM2X4GBFURY}/>
        <Route path="/kingston hyperx fury rgb 2 x 8 gb 3200" component={RAM2X8GB3200FURYRGB}/>
        <Route path="/kingston hyperx fury rgb 4 x 8 gb 3200" component={RAM4X8GB3200FURYRGB}/>
        <Route path="/amd ryzen 3 1200 sAM4 box 3 2 G h z" component={R1200AMD}/>
        <Route path="/amd ryzen 5 3500 sAM4 box 3 2 G h z" component={R3500AMD}/>
        <Route path="/amd ryzen 5 1600 sAM4 box 3 2 G h z" component={R1600AMD}/>
        <Route path="/intel core i 3 10100 box 3 6 G h z" component={I3101000}/>
        <Route path="/intel core i 5 10600 K F box 4 1 G h z" component={I510600KF}/>
        <Route path="/intel core i 9 10900 K box 3 7 G h z" component={I910900K}/>
        <Route path="/asus nvidia gtx 770 4096 g b" component={ASUSGTX770TI}/>
        <Route path="/asus nvidia gt 1030 2 g b" component={NVIDIAGTX1030}/>
        <Route path="/msi nvidia gtx 1050 4 g b" component={NVIDIAGTX1050}/>
        <Route path="/amd sapphire radeon nitro rx 470 4 g b" component={AMDRX4704GB}/>
        <Route path="/amd sapphire radeon nitro rx 570 8 g b" component={AMDRX5708GB}/>
        <Route path="/amd sapphire radeon nitro rx 580 4 g b" component={AMDRX5804GB}/>
        <Route path="/gamemax 4 0 0 w gm - 4 0 0 - 8 c м" component={GAMEMAX400W}/>
        <Route path="/gamemax 6 0 0 w gm - 6 0 0 - 8 c м" component={GAMEMAX600W}/>
        <Route path="/gamemax 8 0 0 w gm - 8 0 0 - 8 c м" component={GAMEMAX800W}/>
        <Route path="/be quiet dark power pro 11 5 5 0 w" component={BEQUIETDARKPOWER11550W}/>
        <Route path="/be quiet dark power pro 11 7 5 0 w" component={BEQUIETDARKPOWER11750W}/>
        <Route path="/be quiet dark power pro 11 1 2 0 0 w" component={BEQUIETDARKPOWER111200W}/>
        <Route path="/id cooling se 903 b blue" component={IDCOOLINGSE903BBLUE}/>
        <Route path="/id cooling se 914 xt basic" component={IDCOOLINGSE914XTBASIC}/>
        <Route path="/id cooling se 207 xt black" component={IDCOOLINGSE207XTBLACK}/>
        <Route path="/id cooling auraflow x 240 snow" component={IDCOOLINGAURAFLOWX240SNOW}/>
        <Route path="/id cooling frostflow x 360" component={IDCOOLINGFROSTFLOWX360}/>
        <Route path="/id cooling zoomflow 360 xt" component={IDCOOLINGZOOMFLOW360XT}/>
        <Route path="/western digital blue 500 gb" component={WESTERNDIGITALBLUE500GB}/>
        <Route path="/western digital blue 1 tb" component={WESTERNDIGITALBLUE1TB}/>
        <Route path="/shop" component={Shop} />
        <Route path="/support" component={Support}/>
      </body>
    </html>
  );
}

export default App;