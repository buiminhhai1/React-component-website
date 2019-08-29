import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Trang chủ</NavigationItem>
        <NavigationItem link="/login">Đăng nhập</NavigationItem>
        <NavigationItem link="/categories">Loại sản phẩm</NavigationItem>
    </ul>
);
export default NavigationItems;