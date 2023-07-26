import Header from "../Header/Header";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import DefaultHead from "./Head/Head";
import { Main } from "./Layout.styled";

export default function Layout({ children }) {
  return (
    <>
      <DefaultHead />
      <Header />
      <Main>{children}</Main>
      <MobileNavigation />
    </>
  );
}
