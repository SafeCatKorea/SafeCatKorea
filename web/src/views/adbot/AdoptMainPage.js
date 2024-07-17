import React from 'react';
import classes from '../../css/AdoptPage.module.css';

const AdoptMain = () => {
    return (
        <div className={classes.contentBox}>
            <div className={classes.adoptHeader}>
                <h3>입양대상 동물</h3>
            </div>

            <div className={classes.adoptForm}>
                <div>날짜</div>
                <div>시도</div>
                <div>종류</div>
                <div>동물등록번호</div>
                <div className={classes.hr} />
                <div>
                    <button>
                        조회
                    </button>
                </div>
            </div>

        </div>
    );
};

export default AdoptMain;
