import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 18px;
  margin-bottom: 50px;
`;
export const BrandInput = styled.input`
  width: 224px;
  background-color: #f7f7fb;
  border: transparent;
  border-radius: 14px;
  padding: 14px 18px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
  }
`;

export const SearchBtn = styled.button`
  display: block;
  border-radius: 12px;
  padding: 14px 44px;
  background-color: #3470ff;
  border: none;

  font-weight: 600;
  font-size: 14px;
  line-height: 143%;
  color: #fff;
`;
