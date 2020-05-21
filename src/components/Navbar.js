import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export class Navbar extends Component {
  componentDidMount(){
		//An array of assets
		let scripts = [
      { src: "js/theme.js" }
		]
		//Append the script element on each iteration
		scripts.map(item => { 
			const script = document.createElement("script")
			script.src = item.src
			script.async = true
			document.body.appendChild(script)
		})    
	  };
  render () {
    return (<div>

         {/*================Header Menu Area =================*/}
         <header className="header_area">
         <div className="top_menu row m0">
           <div className="container">
             <div className="float-left">
               <ul className="list header_social">
                 <li><marquee><h4>&#128525;&#128525;&#128293;Refer 3 friends and get a chance to visit skatepark for free&#128293;&#128525;&#128525;</h4></marquee></li>
               </ul>
             </div>
             <div className="float-right">
              <h3>Contact us at +123456789</h3>
             </div>
           </div>
         </div>
         <div className="main_menu">
           <nav className="navbar navbar-expand-lg navbar-light">
             <div className="container">
               {/* Brand and toggle get grouped for better mobile display */}
               <a className="navbar-brand logo_h" href="#home"><img src="img/logo.png" alt="" /></a>
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