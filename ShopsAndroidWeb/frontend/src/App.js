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

import RAM1X4GBFURY from './component/ram/4x1GB 3200 Kingston Fury HyperX/1x4GB3200KingstonFuryHyperX';

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
        <Route path="/shop" component={Shop} />
        <Route path="/support" component={Support}/>
      </body>
    </html>
  );
}

export default App;
