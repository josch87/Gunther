import Image from "next/image";
import {
  DataContainer,
  DataType,
  ExternalLink,
  StyledDetailsItem,
} from "./ContactDetailsItem.styled";

export default function ContactDetailsItem({
  icon,
  iconAlt = "",
  value,
  type,
  href,
  target = "_self",
}) {
  return (
    <StyledDetailsItem>
      <div>
        <Image src={icon} alt={iconAlt} width={20} height={20} />
      </div>
      <DataContainer>
        <div>
          {href ? (
            <ExternalLink href={href} target={target}>
              {value}
            </ExternalLink>
          ) : (
            value
          )}
        </div>
        <DataType>{type}</DataType>
      </DataContainer>
    </StyledDetailsItem>
  );
}
