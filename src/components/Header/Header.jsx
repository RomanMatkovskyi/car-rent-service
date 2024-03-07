import {
  HeaderContainer,
  Navigation,
  StyledLink,
  IconWrapper,
} from "./Header.styled";
import sprite from "assets/sprite.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/catalog">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          First
        </StyledLink>
        <StyledLink to="/favorites">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Second
        </StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};
