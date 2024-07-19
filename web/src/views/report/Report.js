import React, {useState} from 'react';
import classes from "../../css/report/Report.module.css"
import ReportForm from "./ReportForm";

const Report = () => {

  return (
    <div className={classes.reportPage}>
      <div className={classes.reportText}>
        <div className={classes.reportTitle}>유기묘 신고하기</div>
        <div className={classes.reportDesc}>관할 보호소에 이첩됩니다.</div>
      </div>
      <div className={classes.reportForm}>
        <ReportForm  />
      </div>
    </div>
  );
};

export default Report;