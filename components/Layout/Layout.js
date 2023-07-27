import Header from "../Header/Header";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import DefaultHead from "./DefaultHead/DefaultHead";
import { Main } from "./Layout.styled";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <MobileNavigation />
    </>
  );
}
