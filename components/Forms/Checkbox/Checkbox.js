import { Container, StyledLabel } from "./Checkbox.styled";

export default function Checkbox({
  id,
  name,
  labelContent,
  checked,
  onChange,
}) {
  return (
    <Container>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <StyledLabel htmlFor={id}>{labelContent}</StyledLabel>
    </Container>
  );
}
