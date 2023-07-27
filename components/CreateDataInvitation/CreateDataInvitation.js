import { styled } from "styled-components";
import Button from "../Button/Button";

export default function CreateDataInvitation({ entity, onClick }) {
  return (
    <>
      <p>Create your first {entity} so that it can be displayed here.</p>
      <Button buttonType="primary" onClick={onClick}>
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
`;
