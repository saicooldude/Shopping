import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import {auth} from '../../firebase/firebase.utilis';
import {ReactComponent as Logo} from '../assests/crown.svg';

const Header=({currentuser})=>(
    <div className="header">
        <Link className='Logo-container' to="/">

            <Logo  className='logo'/>
        </Link>
        <div className="options">
            <Link className='option' to="/shop">Shop</Link>
            <Link className='option' to="/shop">Contact</Link>
            
            {
                currentuser ? (<div className='option' onClick={()=>auth.signOut()}>Signout </div>
                                                                                             ) 
                :
                (<Link className='option' to="/signin">Signin</Link>)
            }
            {
                currentuser ? (<div className='option'>{
                    currentuser.displayName
                } </div>
                                                                                             ) 
                :
               '' 
            }
        </div>
    </div>
);
export default Header;
