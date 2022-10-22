import { Outlet } from 'react-router-dom';
import { StyledContainer } from './Layout.styled';
import Header from 'pages/Header/Header';
import Footer from 'pages/Footer/Footer';

export default function Layout() {
  return (
    <StyledContainer>
      <Header />
      <Outlet />
      <Footer />
    </StyledContainer>
  );
}
