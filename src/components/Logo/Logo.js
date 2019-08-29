import React from 'react';
import classes from './Logo.module.css';
import shopLogo from '../../assets/Images/Logo.jpg';

const Logo = (props) => (
    <div className={classes.Logo}>
        <img src={shopLogo} alter="MyShop" />
    </div>
);

export default Logo;
