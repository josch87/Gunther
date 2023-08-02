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
  title,
}) {
  return (
    <StyledDetailsItem>
      <Image src={icon} alt={iconAlt} width={20} height={20} />

      <DataContainer>
        {href ? (
          <ExternalLink href={href} target={target} title={title}>
            {value}
          </ExternalLink>
        ) : (
          value
        )}

        <DataType>{type}</DataType>
      </DataContainer>
    </StyledDetailsItem>
  );
}
