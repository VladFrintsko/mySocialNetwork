import React from 'react';
import headerStyles from './Header.module.css';
import logoTree from '../../images/trans.png';

import {Link} from 'react-router-dom';

const Header = () =>{
    return(
        <header>
          
        <div className={headerStyles.logo}>
          <Link to='/profile'><img src={logoTree} alt='logo' /></Link>
        </div>
        
      </header>
    );
}

export default Header;