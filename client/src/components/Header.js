import React from 'react';
import { Link } from 'react-router-dom';

// what kind of react component do i need?
function Header() {
	return (
		<header>
  			<div className="logo">Mustang Ice Cream</div>
 		 		<nav>
			    <ul>
			      <li><Link to='/'>Home</Link></li>
			      <li><Link to='/ice-cream'>Ice Cream</Link></li>
			      <li><Link to='/add'>Add New Ice Cream</Link></li>
			      <li></li>
			    </ul>
			  </nav>
		</header>
	)
}

export default Header;