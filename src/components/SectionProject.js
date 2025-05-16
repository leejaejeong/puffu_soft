import React, { useEffect, useRef } from "react";
import style from './SectionProject.module.css';
import projectImg01 from '../images/sec_project01_dynamic.png';
import projectImg02 from '../images/sec_project02_k_puffu.png';
import projectImg03 from '../images/sec_project03_puffu_app.png';
import projectImg04 from '../images/sec_project04_puffu_store.png';
import arrow from '../images/sec_services_arrow.png';

function SectionProject({ projectRef }) {
    return (
        <div className={style.container} ref={projectRef}>
            <div className={style.titBox}>
                <h5>우리가 만든 프로젝트</h5>
                <h3>
                    기획부터 개선까지<br />
                    푸푸소프트의 프로젝트
                </h3>
                <p>
                    기획부터 디자인, 개발, 개선까지<br />
                    단계마다 의미 있는 결과를 만들었습니다.
                </p>
            </div>
            <div className={style.projectBox}>
                <div 
                className={`${style.project} ${style.project01}`}
                onClick={() => window.open('https://dynamic.worldintl.co.kr/', '_blank')}
                >
                    <div className={style.imgBox}>
                        <img src={projectImg01} />
                    </div>
                    <div className={style.arrowBox}>
                        <img src={arrow} />
                    </div>
                    <div className={style.txtBox}>
                        <h4>DYNAMIC 사이트</h4>
                        <p>
                            일회용 전자담배 기기인<br />
                            DYNAMIC의 소개 사이트 제작
                        </p>
                    </div>
                    <div className={style.bgOverlay}></div>
                </div>
                <div 
                className={`${style.project} ${style.project02}`}
                onClick={() => window.open('https://www.puffukorea.com/kr/feeds', '_blank')}
                >
                    <div className={style.imgBox}>
                        <img src={projectImg02} />
                    </div>
                    
                    <div className={style.arrowBox}>
                        <img src={arrow} />
                    </div>
                    <div className={style.txtBox}>
                        <h4>K-PUFFU 이커머스 플랫폼</h4>
                        <p>
                            한국 상품을 중국 소비자를 대상으로 <br />
                            판매하는 이커머스 플랫폼 제작
                        </p>
                    </div>
                    <div className={style.bgOverlay}></div>
                </div>
            </div>
            <div className={`${style.projectBox} ${style.projectBox02}`} >
                <div 
                className={`${style.project} ${style.project01} ${style.app}`}
                // onClick={() => window.open('https://www.puffukorea.com/kr/feeds', '_blank')}
                >
                    <div className={style.imgBox}>
                        <img src={projectImg03} />
                    </div>
                    {/* <div className={style.arrowBox}>
                        <img src={arrow} />
                    </div> */}
                    <div className={style.txtBox}>
                        <h4>무인매장 PUFFU앱</h4>
                        <p>
                            24시간 무인으로 운영되는 매장인 <br />
                            PUFFU의 셀프 결제 앱 제작
                        </p>
                    </div>
                    <div className={style.bgOverlay}></div>
                </div>
                <div 
                className={`${style.project} ${style.project02}`}
                onClick={() => window.open('https://brand.puffu.co.kr/', '_blank')}
                >
                    <div className={style.imgBox}>
                        <img src={projectImg04} />
                    </div>
                    <div className={style.arrowBox}>
                        <img src={arrow} />
                    </div>
                    <div className={style.txtBox}>
                        <h4>PUFFU 가맹점 모집 사이트</h4>
                        <p>
                            무인 매장 PUFFU의 <br />
                            가맹점 모집 사이트 제작
                        </p>
                    </div>
                    <div className={style.bgOverlay}></div>
                </div>
            </div>
        </div>
    )
}

export default SectionProject;