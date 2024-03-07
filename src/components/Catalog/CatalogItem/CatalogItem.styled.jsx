import styled from "styled-components";

export const CarItemWrapper = styled.li`
  width: 274px;
`;

export const CarImg = styled.img`
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const CarTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CarTitle = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #121417;
  margin-bottom: 8px;
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
      content: "";
      width: 1px;
      height: 16px;
      margin-right: 6px;
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
  padding: 12px 99px;
  width: 274px;
  height: 44px;
  background-color: #3470ff;
  border: none;
  text-align: center;
  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  line-height: 143%;
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0b44cd;
  }
`;
