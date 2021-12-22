import React from 'react';
import Header from './component/header/header';
import { Route } from 'react-router-dom';

import Main from './component/main/main';
import Shop from './component/shop/shop';
import Support from './component/support/support';

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

import RAM1X4GBFURY from './component/ram/1x4GB 3200 Kingston Fury HyperX/1x4GB3200KingstonFuryHyperX';
import RAM2X4GBFURY from './component/ram/2x4GB 3200 Kingston Fury HyperX/2x4GB3200KingstonFuryHyperX';
import RAM2X8GB3200FURYRGB from './component/ram/2x8 3200 Kingston Fury RGB HyperX/2x8GB3200KingstonFuryHyperXRgb';
import RAM4X8GB3200FURYRGB from './component/ram/4x8 3200 Kingston Fury RGB HyperX/4x8GB3200KingstonFuryHyperXRgb';

import R1200AMD from './component/cpu/r1200AMD/r1200amd';
import R3500AMD from './component/cpu/r3500AMD/r3500amd';
import R1600AMD from './component/cpu/r1600AMD/r1600amd';

import I3101000 from './component/cpu/i3-10100/i310100';

function App() {
  return (
    <html>
      <head>
        <title><i>HypeX</i></title>
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
        <Route path="/shop" component={Shop} />
        <Route path="/support" component={Support}/>
      </body>
    </html>
  );
}

export default App;
