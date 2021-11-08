import React from 'react';
import headerStyles from './Header.module.css';
import logoTree from '../../images/trans.png';

import {Link} from 'react-router-dom';

const Header = ({state}) =>{
  const regUsers = state.users.registredUsers;
  const trueUser = JSON.parse(localStorage.getItem("userData")).login;
  const getUser = regUsers.find((user) => user.login === trueUser);
    return(
        <header>
        <div className={headerStyles.logo}>
          <Link to='/profile'><img src={logoTree} alt='logo' /></Link>
        </div>
        <div className={headerStyles.headName}>{getUser.fullName}</div>
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
        </form>
      </header>
    );
}

export default Header;