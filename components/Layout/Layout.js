import styled from "styled-components";
import Header from "../Header/Header";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import DefaultHead from "./DefaultHead/DefaultHead";
import { Main } from "./Layout.styled";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const StyledVersion = styled.p`
  text-align: center;
  font-size: 0.75rem;
  margin-top: 5px;
`;

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>
        {children}
        <StyledVersion>
          {"Gunther v" +
            publicRuntimeConfig.version +
            " on " +
            process.env.NEXT_PUBLIC_ENVIRONMENT}
          <br />
          <p>Next.js Dependencies:</p>
          <ul>
            {Object.keys(publicRuntimeConfig.dependencies).map(
              (dependency, index) => (
                <li
                  key={index}
                >{`${dependency}: ${publicRuntimeConfig.dependencies[dependency]}`}</li>
              )
            )}
          </ul>
          {"Next.js: " + publicRuntimeConfig.dependencies.next}
        </StyledVersion>
      </Main>

      <MobileNavigation />
    </>
  );
}
