import React from 'react';
import {Link} from "react-router-dom";
import classes from "../../css/main/MainIcons.module.css"

const MainIcons = () => {
  const icons = [
    {
      title: '전국 유기묘 보호센터',
      url: '/center',
      desc: '전국의 유기묘 보호센터 목록을 볼 수 있습니다.'
    },
    {
      title: '동물병원',
      url: '/center',
      desc: '전국의 동물병원 목록을 볼 수 있습니다.'
    },
    {
      title: '고양이 관리법',
      url: '/center',
      desc: '고양이 관리법에 대해 볼 수 있습니다.'
    },
    {
      title: '입양 받는 절차',
      url: '/center',
      desc: '입양 받는 절차에 대해 볼 수 있습니다.'
    },
  ];
  return (
    <div className={classes.iconWrapper}>
      {icons.map(item=>
        <Link to={item.url} style={{textDecoration: 'none', color: 'black' }}>
          <div className={classes.iconContainer}>
            <div>{item.title}</div>
            <div>{item.desc}</div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default MainIcons;