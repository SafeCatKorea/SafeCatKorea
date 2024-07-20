import React, {useState} from 'react';
import ReportDropDown from "./ReportDropDown";
import classes from "../../css/report/ReportForm.module.css"

const ReportForm = () => {
  const [dropDown, setDropDown] = useState(false);
  const [pickItem, setPickItem] = useState('서울');
  const localItem = ['서울', '부산', '경남', '대전', '대구'];
  const clickDropDown = () => {
    setDropDown(!dropDown);
  }
  const slickItem = (item) => {
    setPickItem(item);
    clickDropDown();
  }
  return (
    <form className={classes.reportForm}>
        <h1 className={classes.reportTitle}>유기묘 신고하기</h1>
      <div className={classes.reportForm1}>
        <div className={classes.reportDesc}>유기묘 발견 지역을 선택해주세요</div>
        <div className={!dropDown && classes.dropDown} onClick={clickDropDown}>
          {!dropDown && pickItem}
          {dropDown && <ReportDropDown localItem={localItem} slickItem={slickItem}/>}
        </div>
      </div>
      <div className={classes.checkBox}>
        확인 ▶
      </div>

    </form>
  );
};

export default ReportForm;