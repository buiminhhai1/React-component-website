import React from 'react';
import Logo from './Logo/Logo';
import classes from './Brand.module.css';
const Brand = (props) => (
    <div className={classes.Brand}>
        <Logo className={classes.Logo}/>
        <span>REACTSHOP</span>
    </div>
);

export default Brand;