import items from './items';
import { StyledNav, StyledNavlink, StyledNavList } from './Nav.styled';

export const Nav = () => {
  const elements = items.map(({ id, text, to, end }) => (
    <li key={id}>
      <StyledNavlink to={to} end={end}>
        {text}
      </StyledNavlink>
    </li>
  ));
  return (
    <StyledNav>
      <StyledNavList>{elements}</StyledNavList>
    </StyledNav>
  );
};
