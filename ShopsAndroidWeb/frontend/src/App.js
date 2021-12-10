import React from 'react';
import Header from './component/header/header';
import { Route } from 'react-router-dom';
import DarkPower12 from './component/Be Quiet Dark Power 12/be_quite_dark_power_12_1000w'

import Main from './component/main/main'
import Shop from './component/shop/shop'
import About from './component/about/about'

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
        <Route path="/about" component={About} />
        <Route path="/be quiet dark power 12 1000w" component={DarkPower12}/>
        <Route path="/shop" component={Shop} />
      </body>
    </html>
  );
}

export default App;
