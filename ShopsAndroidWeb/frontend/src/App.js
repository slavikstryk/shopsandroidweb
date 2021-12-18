import React from 'react';
import Header from './component/header/header';
import { Route } from 'react-router-dom';

import Main from './component/main/main'
import Shop from './component/shop/shop'
import Support from './component/support/support';

import SSD240GB from './component/240GB SSD HyperX/ssd240gb';
import SSD480GB from './component/480GB SSD HyperX/ssd480gb';
import SSD960GB from './component/960GB SSD HyperX/ssd960gb';

import SSD120GBA400 from './component/120GB SSD Kingston A400/a400120gb'
import SSD240GBA400 from './component/240GB SSD Kingston A400/a400240gb'

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
        <Route path="/shop" component={Shop} />
        <Route path="/support" component={Support}/>
      </body>
    </html>
  );
}

export default App;
