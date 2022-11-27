import React from "react";
import styeld from "styled-components";
import { useState, useRef, useEffect } from "react";
import Slide from './Slide';
import styled from "styled-components";
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
// 전체 슬라이드 개수(총3개. 배열로 계산)
const SlideComponent = ({ Piedata = [], LineData = [], progressData = [], children, sxL = {}, sxR = {}, changeHeader=f=>f }) => {
    const [currentSlide, setCurrentSlide] = useState(Piedata && Piedata.map(() => { }).length - 1);
    const slideRef = useRef(null);
    const TOTAL_SLIDES = Piedata && Piedata.map(() => { }).length - 1;
    console.log(currentSlide)

    const NextSlide = () => {
        if (currentSlide >= TOTAL_SLIDES) {
            setCurrentSlide(0); // 1번째 사진으로 넘어갑니다.
            changeHeader(0);
        } else {
            setCurrentSlide(currentSlide + 1);
            changeHeader(currentSlide + 1);
        }
    };
    const PrevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(TOTAL_SLIDES); // 마지막 사진으로 넘어갑니다.
            changeHeader(TOTAL_SLIDES);
        } else {
            setCurrentSlide(currentSlide - 1);
            changeHeader(currentSlide - 1);
        }
    };

    useEffect(() => {
        slideRef.current.style.transition = 'all 0.5s ease-in-out';
        slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    }, [currentSlide]);

    return (
        <>
            {/* <StyledButton onClick={PrevSlide} style={{float: "left",marginLeft: "10%"}}>&lt;</StyledButton>
            <StyledButton onClick={NextSlide} style={{float: "right", marginRight: "10%"}}>&gt;</StyledButton> */}
            <GoChevronLeft onClick={PrevSlide} size="20" color="#878787" style={sxL} />
            <GoChevronRight onClick={NextSlide} size="20" color="#878787" style={sxR} />
            <Wrapper>
                <SlideWrapper ref={slideRef} style={{ width: '100%', height: '100%' }}>
                    {children}
                </SlideWrapper>
            </Wrapper>
        </>
    );
};

export default SlideComponent;

const Wrapper = styeld.div`
  width: 97%;
  height: 80%;
//   border-radius:20px;
   overflow: hidden;
`;

const SlideWrapper = styeld.div`
  //flex-wrap: nowrap;
  display: inline-flex;
  width: 100%;
  
`;
const StyledButton = styled.button`
  margin: 0;
  border: none;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
  font-size: var(--button-font-size, 1  rem);
  padding: var(--button-padding, 8px 12px);
  border-radius: var(--button-radius, 8px);
//   background: var(--button-bg-color, #fbdae3);
  color: var(--button-color, #555555);
  font-weight: var(--button-font-weight, bold)
 
`;