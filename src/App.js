import { useRef, useEffect, useState } from 'react';
import './reset.css';
import './App.css';
import logo from './images/logo_w.png';
import SectionAbout from './components/SectionAbout.js';
import SectionProject from './components/SectionProject.js';
import SectionValues from './components/SectionValues.js';
import SectionServices from './components/SectionServices.js';
import shapeImg01 from './images/main_visual_img01.png';
import shapeImg02 from './images/main_visual_img02.png';

function App() {
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const valuesRef = useRef(null);
    const servicesRef = useRef(null);

    const goToAbout = () => {
        window.scrollTo({
            top: aboutRef.current.offsetTop,
            behavior: 'smooth',
        })
    }
    const goToProject = () => {
        window.scrollTo({
            top: projectRef.current.offsetTop,
            behavior: 'smooth',
        })
    }
    const goToValues = () => {
        window.scrollTo({
            top: valuesRef.current.offsetTop,
            behavior: 'smooth',
        })
    }
    const goToServices = () => {
        window.scrollTo({
            top: servicesRef.current.offsetTop,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        function setvhSize() {
            const height = window.visualViewport?.height || window.innerHeight;
            const vh = height * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }

        setvhSize();

        window.addEventListener('resize', setvhSize);
        window.visualViewport?.addEventListener('resize', setvhSize);

        return () => {
            window.removeEventListener('resize', setvhSize);
            window.visualViewport?.removeEventListener('resize', setvhSize);
        };
    }, []);

    return (
        <div className="wrap">
            <header className="header">
                <div className='logo' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img src={logo} alt="puffu soft" />
                </div>
                <ul>
                    <li onClick={() => { goToAbout(); }}>ABOUT</li>
                    <li onClick={() => { goToProject(); }}>PROJECT</li>
                    <li onClick={() => { goToValues(); }}>VALUES</li>
                    <li onClick={() => { goToServices(); }}>SERVICES</li>
                </ul>
            </header>
            <div className='main_visual'>
                <div className='txtContainer'>
                    <h1>
                        기술을 <span>새롭게</span><br />
                        경험을 <span>다르게</span>
                    </h1>
                    <p>
                        기획부터 개발, 유지보수까지.<br />
                        푸푸소프트는 빠르게 시작해<br />
                        사용자에게 가치를 전하는 솔루션을 만듭니다.
                    </p>
                </div>
                <div className='imgContainer'>
                    <div className='imgBox imgBox01'>
                        <img src={shapeImg01} />
                    </div>
                    <div className='imgBox imgBox02'>
                        <img src={shapeImg02} />
                    </div>
                </div>
            </div>
            <SectionAbout aboutRef={aboutRef} />
            <SectionProject projectRef={projectRef} />
            <SectionValues valuesRef={valuesRef} />
            <SectionServices servicesRef={servicesRef} />
            <footer>
                <div className='infoBox'>
                    <p>
                        <span>대표</span>
                        허준
                    </p>
                    <p>
                        <span>주소</span>
                        대전광역시 서구 관저중로95번길 74, 5층(관저동)
                    </p>
                </div>
                <div className='copyrightBox'>
                    <p>© PUFFU SOFT ALL RIGHTS RESERVED.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
