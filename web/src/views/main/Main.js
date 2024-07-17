import React from 'react';
import classes from "../../css/main/Main.module.css"
import MainIcons from "./MainIcons";


const Main = () => {
  return (
    <div className={classes.main}>
      <div className={classes.mainWrapper} style={{backgroundImage: `url(/mainImg.png)`}}>
        <div className={classes.mainText}>
          <h2 className={classes.title}>통합 유기묘 플랫폼</h2>
          <div className={classes.desc}>길 잃은 생명에게 나침반을</div>
        </div>
        <MainIcons/>
      </div>
    </div>
  );
};

export default Main;