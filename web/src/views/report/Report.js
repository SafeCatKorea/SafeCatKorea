import React from 'react';
import classes from "../../css/report/Report.module.css"
import ReportForm from "./ReportForm";

const Report = () => {

  return (
    <div className={classes.reportPage}>
      <div className={classes.reportForm}>
        <ReportForm  />
      </div>
    </div>
  );
};

export default Report;