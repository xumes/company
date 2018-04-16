import React from 'react'
import {Link} from 'react-router-dom'

const Header = props => {
    return (
        <nav className='navbar navbar-default navbar-fixed-top'>
            <div className='container'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link to='/' className='navbar-brand' >Logo</Link>
                </div>
                <div className='collapse navbar-collapse' id='myNavbar'>
                    <ul className='nav navbar-nav navbar-right'>
                        <li><Link to='/about'>ABOUT</Link></li>
                        <li><Link to='/services'>SERVICES</Link></li>>
                        <li><Link to='/portfolio'>PORTFOLIO</Link></li>
                        <li><a href='#pricing'>PRICING</a></li>
                        <li><a href='#contact'>CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header