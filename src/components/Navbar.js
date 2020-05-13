import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export class Navbar extends Component {
render () {
    return (<div>

         {/*================Header Menu Area =================*/}
         <header className="header_area">
         <div className="top_menu row m0">
           <div className="container">
             <div className="float-left">
               <ul className="list header_social">
                 <li><a href="#">Exciting offers here</a></li>
               </ul>
             </div>
             <div className="float-right">
               <select>
                 <option value={1}>USD</option>
                 <option value={1}>EUR</option>
                 <option value={1}>AOA</option>
                 <option value={1}>AUD</option>
               </select>
               <select>
                 <option value={1}>ENG</option>
                 <option value={1}>FRA</option>
                 <option value={1}>BAN</option>
               </select>
             </div>
           </div>
         </div>
         <div className="main_menu">
           <nav className="navbar navbar-expand-lg navbar-light">
             <div className="container">
               {/* Brand and toggle get grouped for better mobile display */}
               <a className="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt="" /></a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="icon-bar" />
                 <span className="icon-bar" />
                 <span className="icon-bar" />
               </button>
               {/* Collect the nav links, forms, and other content for toggling */}
               <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                 <ul className="nav navbar-nav menu_nav ml-auto">
                   <li className="nav-item active"><NavLink className='active' to='/'>Home</NavLink></li>
                   <li className="nav-item"><NavLink  to='/about' >About</NavLink></li>
                   <li className="nav-item"><NavLink to='/login' >Login</NavLink></li>
                   
                   <li className="nav-item"><NavLink  to='/contact' >Contact</NavLink></li>
                 </ul>
               </div>
             </div>
           </nav>
         </div>
       </header>
</div>
)
}
}

export default Navbar