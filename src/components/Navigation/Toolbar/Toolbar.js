import React from 'react';
import classes from './Toolbar.module.css';

import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import {NavLink} from 'react-router-dom'
import Search from '../Search/Search';
const Toolbar = (props) =>(
    <header className={classes.Toolbar}>
        
        <div className={classes.Logo}>
            <Logo/>
            <NavLink to='/'><span className={classes.Span}>React shop</span></NavLink>
            <Search />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default Toolbar;
