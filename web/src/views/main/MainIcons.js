import React, { useState } from 'react';

import classes from "../../css/main/MainIcons.module.css";

const MainIcons = ({ menuFlag, icons, onClickIcon}) => {
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



  return (
    <div className={classes.iconWrapper}>
      {icons.map((item, index) => (
        <div key={index}>
          <div
            className={`${classes.iconContainer} ${classes[`icon${index}`]} ${animationEnded[index] && menuFlag ? classes.changed : ''} ${hoverIcon[index] && menuFlag ? classes.hoverIcon : ''}`}
            onAnimationEnd={() => handleAnimationEnd(index)}
            onMouseOver={()=>handleHoverIcon(index)}
            onMouseOut={()=>handleHoverOver(index)}
            onClick={()=>onClickIcon()}
          >
            <div >{item.title} </div>
            <div>{hoverIcon[index]&&item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainIcons;
