import React from 'react';
import classes from './Search.module.css';
const Search = (props) => (
    <form className={classes.Search}>
        <input className={classes.Input} type="text" placeholder="Nhập tên sản phẩm, tên nhãn hàng"/>
    </form>
);
export default Search;
