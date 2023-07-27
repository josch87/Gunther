import { styled } from "styled-components";
import Button from "../Button/Button";

export default function CreateDataInvitation({ entity, createEntity }) {
  return (
    <>
      <StyledParagraph>
        Create your first {entity} so that it can be displayed here.
      </StyledParagraph>
      <Button buttonType="primary" href={createEntity}>
        Add {entity}
      </Button>
      <Note>
        <em>Or import some demo data to get started.</em>
      </Note>
    </>
  );
}

const Note = styled.p`
  font-size: 0.6rem;
  margin-top: 10px;
`;

const StyledParagraph = styled.p`
  margin-bottom: 15px;
`;
