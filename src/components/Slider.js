import React from "react";
import styeld from "styled-components";
import { useState, useRef, useEffect } from "react";
import Slide from './Slide';
import { style } from "@mui/system";

const TOTAL_SLIDES = 5; // 전체 슬라이드 개수(총3개. 배열로 계산)
const SlideComponent = ({ Piedata = [] }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);

    // Next 버튼 클릭 시
    const NextSlide = () => {
        if (currentSlide >= TOTAL_SLIDES) {
            // 더 이상 넘어갈 슬라이드가 없으면
            setCurrentSlide(0); // 1번째 사진으로 넘어갑니다.
            // return;  // 클릭이 작동하지 않습니다.
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };
    // Prev 버튼 클릭 시
    const PrevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(TOTAL_SLIDES); // 마지막 사진으로 넘어갑니다.
            // return;  // 클릭이 작동하지 않습니다.
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };

    useEffect(() => {
        slideRef.current.style.transition = 'all 0.5s ease-in-out';
        slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
    }, [currentSlide]);

    return (
        <>
            <button onClick={PrevSlide}>prev</button>
            <button onClick={NextSlide}>next</button>
            <Wrapper>
                <SlideWrapper ref={slideRef} style={{ width: '100%', height: '100%', }}>
                    {Piedata.map(pie => <div style={{ width: '100%', height: '100%', flex: 'none' }}> <Slide Piedata={pie} /> </div>)}




                </SlideWrapper>


            </Wrapper>


        </>
    );
};

export default SlideComponent;

const Wrapper = styeld.div`
  width: 80%;
  height: 80%;
  
   overflow: hidden;
`;

const SlideWrapper = styeld.div`
  //flex-wrap: nowrap;
  display: inline-flex;
  width: 100%;
  
`;
