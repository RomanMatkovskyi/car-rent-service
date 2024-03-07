import styled from 'styled-components';

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
  border: none;
`;

export const Modal = styled.dialog`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  padding: 40px;
  border-radius: 24px;
  width: 541px;
  height: 752px;

  background-color: #fff;
`;

export const CarImg = styled.img`
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const CarTitleWrapper = styled.div`
  width: 285px;
  height: 72px;
  margin-bottom: 14px;
`;

export const CarTitle = styled.h2`
  margin-bottom: 8px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px;
  line-height: 133%;
  color: #121417;

  span {
    color: #3470ff;
  }
`;

export const KeyWordsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 4px;
  column-gap: 12px;
`;

export const KeyWords = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(18, 20, 23, 0.5);
`;

export const CarDescription = styled.p`
  width: 461px;
  font-family: var(--font-family);
  font-size: 14px;
  line-height: 143%;
  color: #121417;
  margin-bottom: 24px;
`;

export const BenefitsTitle = styled.h3`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 15px;
  line-height: 143%;
  color: #121417;
`;

export const BenefitsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 4px;
  column-gap: 12px;
  margin-bottom: 24px;
`;

export const RentalConditionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const RentalConditionItem = styled.li`
  padding: 7px 14px;
  border-radius: 35px;
  background-color: #f9f9f9;

  span {
    color: #3470ff;
  }
`;

export const RentCarBtn = styled.a`
  margin-top: 24px;
  display: block;
  border-radius: 12px;
  padding: 12px 48px;
  width: 168px;
  height: 44px;
  background-color: #3470ff;
  border: none;

  font-weight: 600;
  font-size: 14px;
  line-height: 143%;
  color: #fff;
`;
