import Image from "next/image";
import Button from "../Button/Button";
import { Import, Note, StyledParagraph } from "./CreateDataInvitation.styled";
import { materialWarning } from "@/assets/Icons8";

export default function CreateDataInvitation({
  hasActiveContacts,
  entity,
  createEntity,
  onImport,
}) {
  if (entity === "interaction" && hasActiveContacts === false) {
    return (
      <>
        <StyledParagraph>
          There are no {entity}s that can be displayed yet.
        </StyledParagraph>
        <StyledParagraph $warning>
          <Image src={materialWarning} width={25} height={25} alt="Warning" />
          You need to have at least one contact in order to create interactions.
        </StyledParagraph>
        <Button buttonType="primary" href="/">
          Switch to contacts
        </Button>
      </>
    );
  }
  return (
    <>
      <StyledParagraph>
        Create your first {entity} so that it can be displayed here.
      </StyledParagraph>
      <Button buttonType="primary" href={createEntity}>
        Add {entity}
      </Button>
      <Note>
        <em>
          Or <Import onClick={onImport}>import some demo data</Import> to get
          started.
        </em>
      </Note>
    </>
  );
}
