import React, {useState} from 'react';
import classes from "../../css/main/Main.module.css"
import MainIcons from "./MainIcons";


const Main = () => {
  const [menuFlag, setMenuFlag] = useState(false);

  const onMouseOver = ()=>{
    setMenuFlag(true);
  }
  return (
    <div className={classes.main}>
      <div className={classes.mainWrapper} style={{backgroundImage: `url(/mainImg.png)`}}>
        <div className={classes.mainText}>
          <h1 className={classes.title}>통합 유기묘 플랫폼</h1>
          <div className={classes.desc}>길 잃은 생명에게 나침반을</div>
        </div>
        <div className={classes.menuIcon} onMouseOver={onMouseOver}>
          메뉴
        </div>
        <div className={`${classes.icons} ${!menuFlag&&classes.blankMenu}`}>
        <MainIcons menuFlag={menuFlag}/>
        </div>
      </div>
    </div>
  );
};

export default Main;