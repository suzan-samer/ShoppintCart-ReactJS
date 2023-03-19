import React from 'react';
import HeaderImg from '../../images/header.jpg' ;
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>CLUB MONAKO</h1>
        <HeaderCartButton onClickButton={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={HeaderImg} alt='HeaderImg' />
      </div>
      
    </React.Fragment>
  );
}

export default Header;
