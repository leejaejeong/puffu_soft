import React, { useEffect, useRef } from "react";
import style from './SectionAbout.module.css';
import secImg01 from '../images/sec_about_img01.png';
import secImg02 from '../images/sec_about_img02.png';
import secImg03 from '../images/sec_about_img03.png';
import secImg04 from '../images/sec_about_img04.png';

function SectionAbout({ aboutRef }) {
    const imgRefs = useRef([]);
    const marqueeTrackRef = useRef(null);
    const keywords = [
        '# 사용자 중심',
        '# 기능보다 경험',
        '# 작지만 깊이 있는 결과',
        '# 기술의 본질을 고민하는 팀',
        '# 기획-개발까지 일관된 흐름',
        '# 빠른 실행 & 민첩한 팀'
    ];

    useEffect(() => {
        const marqueeTrack = marqueeTrackRef.current;

        // 애니메이션 시작 함수
        function startAnimation() {
            const contentWidth = marqueeTrack.scrollWidth / 2; // 두 개의 콘텐츠가 화면에 다 보이게 설정
            marqueeTrack.style.transition = `transform 15s linear`;
            marqueeTrack.style.transform = `translateX(-${contentWidth}px)`;
        }

        // 애니메이션 종료 후 트랙을 원위치로 되돌리고, 다시 애니메이션을 시작
        marqueeTrack.addEventListener('transitionend', () => {
            marqueeTrack.style.transition = 'none';
            marqueeTrack.style.transform = `translateX(0)`;
            setTimeout(startAnimation, 0); // 0초 후 애니메이션 시작
        });

        // 첫 번째 애니메이션 시작
        startAnimation();

        // Cleanup: 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
            marqueeTrack.removeEventListener('transitionend', startAnimation);
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(style.visible);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.8 } // 요소의 80%가 보이면 작동
        );

        imgRefs.current.forEach(el => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className={style.container} ref={aboutRef}>
            <div className={style.marqueeWrapper}>
                <div className={style.marqueeTrack} ref={marqueeTrackRef}>
                    <div className={style.marqueeContent}>
                        {keywords.map((word, index) => (
                            <span className={style.keyword} key={`first-${index}`}>{word}</span>
                        ))}
                        {/* 복제본: 자연스러운 무한 반복 */}
                        {keywords.map((word, index) => (
                            <span className={style.keyword} key={`second-${index}`}>{word}</span>
                        ))}
                    </div>
                </div>
            </div>
            <div className={style.contentsBox}>
                <div className={style.txtBox}>
                    <h2>
                        우리는 빠르게 움직이고<br />
                        끝까지 고민합니다.
                    </h2>
                    <p>
                        기획부터 디자인, 개발과 유지보수까지.<br />
                        푸푸소프트는 사용자에게 의미 있는 경험을<br />
                        만들기 위해 끊임없이 질문하고 움직입니다.
                    </p>
                </div>
                <div className={style.imgContainer}>
                    {[secImg01, secImg02, secImg03, secImg04].map((img, index) => (
                        <div
                            className={style.imgBox}
                            key={index}
                            ref={el => (imgRefs.current[index] = el)}
                        >
                            <img src={img} alt={`About image ${index + 1}`} />
                        </div>
                    ))}
                </div>
                {/* <div className={style.imgContainer}>
                    <div className={style.imgBox}>
                        <img src={secImg01} />
                    </div>
                    <div className={style.imgBox}>
                        <img src={secImg02} />
                    </div>
                    <div className={style.imgBox}>
                        <img src={secImg03} />
                    </div>
                    <div className={style.imgBox}>
                        <img src={secImg04} />
                    </div>
                </div> */}
            </div>

        </div>
    )
}

export default SectionAbout;