import Image from "next/image";
import { Content, StyledDetailsItem } from "./InteractionDetailsItem.styled";

export default function InteractionDetailsItem({ icon, iconAlt = "", value }) {
  return (
    <StyledDetailsItem>
      <Image src={icon} alt={iconAlt} width={20} height={20} />

      <Content>{value}</Content>
    </StyledDetailsItem>
  );
}
