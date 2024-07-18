import React, { useState } from 'react';
import { Link } from "react-router-dom";
import classes from "../../css/main/MainIcons.module.css";

const MainIcons = ({ menuFlag }) => {
  const [animationEnded, setAnimationEnded] = useState(Array(4).fill(false));
  const [hoverIcon, setHoverIcon] = useState(Array(4).fill(false));

  const handleAnimationEnd = (index) => {
    setAnimationEnded(prevState => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  }

    const handleHoverIcon = (index) => {
      setHoverIcon(prevState => {
        const newState = [...prevState];
        newState[index] = true;
        return newState;
      });
  };

  const handleHoverOver= (index) =>{
    setHoverIcon(prevState => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    })
  }

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
      {icons.map((item, index) => (
        <Link to={item.url} style={{ textDecoration: 'none', color: 'black' }} key={index}>
          <div
            className={`${classes.iconContainer} ${classes[`icon${index}`]} ${animationEnded[index] && menuFlag ? classes.changed : ''} ${hoverIcon[index] && menuFlag ? classes.hoverIcon : ''}`}
            onAnimationEnd={() => handleAnimationEnd(index)}
            onMouseOver={()=>handleHoverIcon(index)}
            onMouseOut={()=>handleHoverOver(index)}
          >
            <div >{item.title} </div>
            <div>{hoverIcon[index]&&item.desc}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MainIcons;
