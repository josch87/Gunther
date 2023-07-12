import { Container, StyledLabel } from "./Checkbox.styled";

export default function Checkbox({ id, name, labelContent }) {
  return (
    <Container>
      <input type="checkbox" id={id} name={name} />
      <StyledLabel htmlFor={id}>{labelContent}</StyledLabel>
    </Container>
  );
}
