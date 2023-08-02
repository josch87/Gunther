import Image from "next/image";
import { StyledLink } from "./BackLink.styled";
import { materialLongArrowLeft } from "@/assets/Icons8";

export default function BackLink({ href, children }) {
  return (
    <StyledLink href={href}>
      <Image
        src={materialLongArrowLeft}
        height={20}
        width={20}
        alt="Arrow back"
      />
      {children}
    </StyledLink>
  );
}
