import React, {Component} from 'react';
import account_icon from '../images/account.png'

export class Shop extends Component{
  render() {
      return(

          <div>
      <body className="body">
        <div className="top-bar">
          <div className="links-box">
          </div>
          <div className="search-box">
            <input className="search-input" type="search" placeholder="Search for interesting..."></input>
            <h1>HI</h1>
          </div>
            <img className="account-icon" src={account_icon} alt="account"/>
         </div>
         <div className="left-menu">
         </div>
         <div className="right-menu">
          </div>
         <div className="work-window">
         </div>
        </body>
     </div>
    )
  };
}

export default Shop;