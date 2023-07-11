import Header from "../Header/Header";
import { Main } from "./Layout.styled";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}
