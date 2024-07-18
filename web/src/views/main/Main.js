import React, {useState} from 'react';
import classes from "../../css/main/Main.module.css"
import MainIcons from "./MainIcons";


const Main = () => {
  const [menuFlag, setMenuFlag] = useState(false);
  const [modal, setModal] = useState(false);

  const onMouseOver = ()=>{
    setMenuFlag(true);
  }

  const onClickIcon =()=>{
    setModal(true);
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
    <div className={classes.main}>
      {modal&&<div className={classes.iconClickModal} onClick={()=>setModal(false)}>
        <div className={classes.modalContainer}>
          아이콘 모달 입니다.
        </div>
      </div>}
      <div className={classes.mainWrapper} style={{backgroundImage: `url(/mainImg.png)`}}>
        <div className={classes.mainText}>
          <h1 className={classes.title}>통합 유기묘 플랫폼</h1>
          <div className={classes.desc}>길 잃은 생명에게 나침반을</div>
        </div>
        <div className={classes.menuIcon} onMouseOver={onMouseOver}>
          메뉴
        </div>
        <div className={`${classes.icons} ${!menuFlag&&classes.blankMenu}`}>
        <MainIcons menuFlag={menuFlag} icons={icons} onClickIcon={onClickIcon}/>
        </div>
      </div>
    </div>
  );
};

export default Main;