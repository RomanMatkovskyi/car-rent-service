import styled from 'styled-components';

export const CarItemWrapper = styled.li`
  width: 274px;
  height: 426px;
`;

export const FavoriteBtn = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  top: 16px;
  right: 15px;
`;

export const CarImgWrapper = styled.div`
  position: relative;
`;

export const CarImg = styled.img`
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const CarTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const CarTitle = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #121417;
  margin-bottom: 8px;
  width: 190px; // CHANGE WIDTH HERE
  overflow: hidden;
  white-space: nowrap;
`;

export const CarTitleModel = styled.span`
  color: #3470ff;
`;

export const CarTitlePrice = styled.span`
  margin-right: 9px;
  margin-left: auto;
`;

export const CarDescription = styled.ul`
  display: flex;
  row-gap: 4px;
  column-gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 28px;
`;

export const CarDescriptionLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  &:not(:first-child) {
    &::before {
      content: '';
      width: 1px;
      height: 16px;
      margin-right: 10px;
      background-color: rgba(18, 20, 23, 0.1);
    }
  }
`;

export const CarDescriptionItem = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(18, 20, 23, 0.5);
`;

export const LearnMoreBtn = styled.button`
  border-radius: 12px;
  padding: 12px 98px;
  width: 274px;
  height: 44px;
  background-color: #3470ff;
  border: none;
  text-align: center;
  font-family: 'Manrope', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 143%;
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0b44cd;
  }
`;

export const PopUpWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  z-index: 2;
  background-color: #12141764;
`;
