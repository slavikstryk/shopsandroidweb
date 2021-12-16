import React from 'react';
import Header from './component/header/header';
import { Route } from 'react-router-dom';
import DarkPower12 from './component/Be Quiet Dark Power 12/be_quite_dark_power_12_1000w'

import Main from './component/main/main'
import Shop from './component/shop/shop'
import Support from './component/support/support';
import Ssd128GB from './component/128GB SSD HyperX/ssd128gb';

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
        <Route path="/be quiet dark power 12 1000w" component={DarkPower12}/>
        <Route path="/ssd 120 GB HyperX" component={Ssd128GB}/>
        <Route path="/shop" component={Shop} />
        <Route path="/support" component={Support}/>
      </body>
    </html>
  );
}

export default App;
