import Image from "next/image";
import {
  DataContainer,
  StyledDetailsItem,
} from "./InteractionDetailsItem.styled";

export default function InteractionDetailsItem({ icon, iconAlt = "", value }) {
  return (
    <StyledDetailsItem>
      <div>
        <Image src={icon} alt={iconAlt} width={20} height={20} />
      </div>
      <DataContainer>
        <div>{value}</div>
      </DataContainer>
    </StyledDetailsItem>
  );
}
