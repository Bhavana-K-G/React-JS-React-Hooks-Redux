import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Navbar extends Component {
  render() {
    return <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
      <Link to="/home">React Example</Link>  
      <div className='ml-auto'>
        <ul className='navbar-nav'>
            <li><Link className='nav-link' to="/home">Home</Link></li>
            <li><Link className='nav-link' to="/products">Products</Link></li>
            <li><Link className='nav-link' to="/admin">Admin</Link></li>
            <li><Link className='nav-link' to="/create">Create</Link></li>
            
        </ul>
      </div>
    </nav>
  }
}

export default Navbar