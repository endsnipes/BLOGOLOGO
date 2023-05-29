import { Footer, Header } from "..";
import { Outlet } from "react-router-dom";
import { Container, Wrapper } from "./styles";

export const MainTemplate = () => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Outlet />
        <Footer />
      </Container>
    </Wrapper>
  );
};
