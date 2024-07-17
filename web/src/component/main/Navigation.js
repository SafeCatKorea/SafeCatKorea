import React from 'react';
import {Link} from "react-router-dom";
import classes from '../../css/component/Navigation.module.css'

const Navigation = () => {
    const menuItem = [
        {navName: '유기묘 찾기', navUrl: '/searchCat'},
        {navName: '유기묘 입양하기', navUrl: '/adoptCat'},
        {navName: '유기묘 신고하기', navUrl: '/reportCat'}]
    return (
        <nav className={classes.navBar}>
            <Link to={'/'} style={{textDecoration: 'none', color: 'black' }}>로고</Link>
            <div className={classes.navItem}>
                {menuItem.map((item, index) => (
                    <Link key={index} to={item.navUrl} className={classes.navItemDiv} style={{textDecoration: 'none', color: 'black'}}>
                        <div>{item.navName}</div>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navigation;