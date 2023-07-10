import Image from "next/image";
import {
  DataContainer,
  DataType,
  ExternalLink,
  StyledDetailsItem,
} from "./ContactDetailsItem.styled";

export default function ContactDetailsItem({
  icon,
  value,
  type,
  href,
  target = "_self",
}) {
  return (
    <StyledDetailsItem>
      <div>
        <Image src={icon} alt="" width={20} height={20} />
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
