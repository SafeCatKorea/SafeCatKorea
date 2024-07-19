import React, {useState} from 'react';
import classes from "../../css/report/ReportDropDown.module.css"

const ReportDropDown = ({localItem,slickItem}) => {
  return (
    <div className={classes.localItemWrapper}>
      {localItem.map(item=>
        <div className={classes.localItem}onClick={()=>slickItem(item)}> {item}</div>)}
    </div>
  );
};

export default ReportDropDown;