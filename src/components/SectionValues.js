import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import style from "./SectionValues.module.css";
import titImg from "../images/sec_values_tit_img.png";

gsap.registerPlugin(ScrollTrigger);

function SectionValues({ valuesRef }) {

    return (
        <div className={style.container} ref={valuesRef}>
            <div className={style.titBox}>
                <div className={style.imgBox}>
                    <img src={titImg} />
                </div>
                <h5>우리가 만드는 가치</h5>
                <h3>
                    기술을 새롭게 바라보고<br />
                    경험을 다르게 설계하는 푸푸소프트
                </h3>
                <p>
                    우리는 빠르게 시작해 본질에 집중합니다.<br />
                    기술보다 경험, 기능보다 사람을 먼저 생각하며<br />
                    사용자에게 진정한 가치를 전하는 솔루션을 만듭니다.
                </p>
            </div>

            <div className={style.cardBox} >
                <div className={style.card}>
                    <div>
                        <h4>
                            사람 중심의 기술
                        </h4>
                        <div className={style.line}></div>
                        <p>
                            사용자의 입장에서<br />
                            생각하고 설계합니다.
                        </p>
                    </div>
                </div>
                <div className={style.card}>
                    <div>
                        <h4>
                            끊임없는 개선을 통한 성장
                        </h4>
                        <div className={style.line}></div>
                        <p>
                            실용을 중시하고,<br />
                            항상 방향성을 지켜 나갑니다.
                        </p>
                    </div>
                </div>
                <div className={style.card}>
                    <div>
                        <h4>
                            경험을 설계하다
                        </h4>
                        <div className={style.line}></div>
                        <p>
                            제품은 쓰이는 순간<br />
                            비로소 완성된다고 믿습니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionValues;