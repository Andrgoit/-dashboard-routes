import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled.nav``;

export const StyledNavList = styled.ul`
  padding: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
  list-style: none;
`;

export const StyledNavlink = styled(NavLink)`
  padding: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.primary};
  background-color: transparent;
  text-decoration: none;
  border-radius: ${p => p.theme.radii.md};

  &:hover {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.secondary};
  }

  &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.secondary};
  }
`;
