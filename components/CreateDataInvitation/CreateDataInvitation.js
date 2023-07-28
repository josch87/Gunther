import Button from "../Button/Button";
import { Import, Note, StyledParagraph } from "./CreateDataInvitation.styled";

export default function CreateDataInvitation({
  entity,
  createEntity,
  onImport,
}) {
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
