import React, {useState} from 'react';
import ReportDropDown from "./ReportDropDown";
import classes from "../../css/report/ReportForm.module.css"

const ReportForm = () => {
  const [dropDown, setDropDown] =useState(false);
  const [pickItem, setPickItem] =useState('서울');
  const localItem =['서울','부산','경남','대전','대구'];
  const clickDropDown =()=>{
    setDropDown(!dropDown);
  }
  const slickItem =(item)=>{
    setPickItem(item);
    clickDropDown();
  }
  return (
    <form>
      <div className={classes.dropDown} onClick={clickDropDown}>
        {pickItem}
        {dropDown&&<ReportDropDown localItem={localItem} slickItem={slickItem}/>}
      </div>


    </form>
  );
};

export default ReportForm;