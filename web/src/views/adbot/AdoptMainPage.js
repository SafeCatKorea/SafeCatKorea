import React, {useEffect} from 'react';
import classes from '../../css/AdoptPage.module.css';

const AdoptMain = () => {
    const [isScreen, setIsScreen] = React.useState(window.innerWidth >= 1000);

    const handleResize = () => {
        setIsScreen(window.innerWidth <= 768);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={classes.contentBox}>
            <div className={classes.adoptHeader}>
                <h3>입양대상 동물</h3>
            </div>
            <div className={classes.subContentBox}>
                <div className={classes.adoptForm}>
                    <div className={isScreen ? classes.adoptFormMobile : classes.adoptFormGroup}>
                        <label>날짜</label>
                        <input type="date"
                               name="searchSDate"
                               id="searchSDate"
                               title="시작일"
                               maxLength="10"
                               className={classes.adoptFormControl}
                        />
                        <div className={classes.hyphen}>~</div>
                        <input type="date"
                               name="searchEDate"
                               id="searchEDate"
                               title="종료일"
                               maxLength="10"
                               className={classes.adoptFormControl}
                        />
                        <label>(접수일 기준)</label>
                    </div>
                    <div className={classes.adoptFormGroup}>
                        <label>시도</label>
                        <select className={classes.adoptFormControl}>
                            <option>전체</option>
                            <option>전국</option>
                        </select>
                    </div>
                    <div className={classes.adoptFormGroup}>
                        <label>시군구</label>
                        <select className={classes.adoptFormControl}>
                            <option>전체</option>
                            <option>전국</option>
                        </select>
                    </div>
                    <div className={classes.adoptFormGroup}>
                        <label>보호센터</label>
                        <select className={classes.adoptFormControl}>
                            <option>전체</option>
                            <option>전국</option>
                        </select>
                    </div>
                    <div className={classes.adoptFormGroup}>
                        <label>고양이 품종</label>
                        <select className={classes.adoptFormControl}>
                            <option>전체</option>
                            <option>고양이</option>
                            <option>기타</option>
                            <option>알수없음</option>
                            <option>페르시안</option>
                            <option>믹스</option>
                        </select>
                    </div>
                    <div className={classes.adoptFormGroup}>
                        <label>동물등록번호</label>
                        <input type="text"
                               name="searchRfid"
                               id="searchRfid"
                               maxLength="15"
                               size="20"
                               title="동물등록번호입력"
                               className={classes.adoptFormControl}
                        />
                    </div>
                    <div className={classes.hr}/>
                    <div className={classes.adoptFormSubmit}>
                        <button> 조회</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdoptMain;
