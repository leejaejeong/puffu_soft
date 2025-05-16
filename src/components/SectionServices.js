import React, { useEffect, useRef, useState } from "react";
import style from "./SectionServices.module.css";
import arrow from '../images/sec_services_arrow.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import slideImg01 from "../images/sec_services_slide_img01.png";
import slideImg02 from "../images/sec_services_slide_img02.png";
import slideImg03 from "../images/sec_services_slide_img03.png";
import sildeImg04 from "../images/sec_services_slide_img04.png";


function SectionServices({ servicesRef }) {
    const [swiper, setSwiper] = useState(null);
    const [swiperIndex, setSwiperIndex] = useState(0);

    return (
        <div className={style.container} ref={servicesRef}>
            <div className={style.contents}>
                <div className={style.titBox}>
                    <div className={style.txtBox}>
                        <h5>우리가 제공하는 서비스</h5>
                        <h3>
                            사용자 중심으로<br />
                            만들어가는 디지털 경험
                        </h3>
                        <p>
                            푸푸소프트는 기획부터 개발, <br />
                            유지보수까지 함께하며 비즈니스의 방향성과 <br />
                            사용자 니즈에 집중합니다.
                        </p>
                    </div>
                    <div className={style.arrowContainer}>
                        <div className={`${style.imgBox} ${style.prevArrow}`}>
                            <img src={arrow} alt="Previous" />
                        </div>
                        <div className={`${style.imgBox} ${style.nextArrow}`}>
                            <img src={arrow} alt="Next" />
                        </div>
                    </div>
                </div>
                <Swiper
                    navigation={{
                        prevEl: `.${style.prevArrow}`,
                        nextEl: `.${style.nextArrow}`,
                    }}
                    modules={[Navigation, Autoplay, A11y]}
                    slidesPerView={1.1}
                    breakpoints={{
                        1024: {
                            slidesPerView: 1.7,
                        },
                    }}
                    spaceBetween={20}
                    loop={true}
                    speed={400}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    onActiveIndexChange={(e) => setSwiperIndex(e.realIndex)}
                    onSwiper={(e) => { setSwiper(e) }}
                    className={style.swiper}
                >
                    <SwiperSlide className={style.swiperSlide}>
                        <div>
                            <div className={style.imgBox}>
                                <img src={slideImg01} />
                            </div>
                            <div className={style.bgOverlay}></div>
                            <div className={style.txtBox}>
                                <p>
                                    <strong>웹/앱 개발</strong>
                                    UX 설계, 프론트/백엔드 개발까지 <br />
                                    빠르게 진행해 완성도 높은 제품으로 만듭니다.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={style.swiperSlide}>
                        <div>
                            <div className={style.imgBox}>
                                <img src={sildeImg04} />
                            </div>
                            <div className={style.bgOverlay}></div>
                            <div className={style.txtBox}>
                                <p>
                                    <strong>UI/UX 디자인</strong>
                                    사용자의 행동과 감각을 고려한 설계로,<br />
                                    서비스의 목적과 경험을 자연스럽게 연결합니다.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={style.swiperSlide}>
                        <div>
                            <div className={style.imgBox}>
                                <img src={slideImg02} />
                            </div>
                            <div className={style.bgOverlay}></div>
                            <div className={style.txtBox}>
                                <p>
                                    <strong>IT 솔루션 컨설팅</strong>
                                    막연한 아이디어를<br />
                                    구체적인 설계로 전환하고<br />
                                    방향성과 전략을 함께 고민합니다.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={style.swiperSlide}>
                        <div>
                            <div className={style.imgBox}>
                                <img src={slideImg03} />
                            </div>
                            <div className={style.bgOverlay}></div>
                            <div className={style.txtBox}>
                                <p>
                                    <strong>시스템 구축 및 유지보수</strong>
                                    안정적인 시스템 구축,<br />
                                    지속적인 개선과 <br />
                                    문제 해결까지 함께합니다.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>
    )
}

export default SectionServices;